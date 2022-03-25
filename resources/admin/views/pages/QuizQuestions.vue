<template>
    <div v-if="isMounted">
        <CCol sm="12">
            <CButton color="primary" class="mb-3" @click="collapseAdd = !collapseAdd">
                Tambah Pertanyaan
            </CButton>
            <CCollapse :show="collapseAdd" :duration="400">
               <CCard :border-color="(addIsUploading)?'warning':''">
                   <CCardHeader body-wrapper>
                       <CCardText>Form Pertanyaan</CCardText>
                   </CCardHeader>
                   <CCardBody>
                       <CForm @submit="publishQuestion">
                           <CRow class="mb-3">
                               <CCol sm="3">
                                   Pertanyaan
                               </CCol>
                               <CCol sm="9">
                                   <Editor
                                       api-key="1p6b2ohxm4p6m2d0mwuljypf214adlk57nglwpu4le4fsx5a"
                                       :init="editorInit()"
                                       output-format="html"
                                       v-model="addQuestion"
                                   />
                               </CCol>
                           </CRow>
                           <CInput
                               v-for="choice in addChoices"
                               :key="choice.value"
                               :label="'Jawaban ' + choice.value + ':'"
                               required
                               horizontal
                               v-model="choice.label"
                           />
                           <CSelect
                               label="Jawaban Benar:"
                               horizontal
                               required
                               :value="addAnswerKey"
                               @change="updateAnswerKey"
                               :options="addChoices.map(c=>{return {label: c.value + '. ' + c.label, value: c.value}})"
                           />
                           <CSelect
                               label="Quiz Terkait :"
                               placeholder="Pilih Quiz yang sesuai"
                               horizontal
                               required
                               :value="addQuizId"
                               @change="updateQuizId"
                               :options="quizzes.map(q=>{return {label: q.label + 'ID: ' + q.id, value: q.id}})"
                           />
                           <CButton type="submit" size="sm" color="success">Publish</CButton>
                           <CButton @click="resetFields()" type="button" size="sm" color="danger">Reset</CButton>
                       </CForm>
                   </CCardBody>
               </CCard>
            </CCollapse>
        </CCol>
        <CCol sm="12" md="12">
            <CCard>
                <CCardHeader>
                    Pertanyaan Tersedia
                </CCardHeader>
                <CCardBody>
                    <CButton @click="collapse = !collapse" color="primary" class="mb-2">
                        Filter Quiz
                    </CButton>
                    <template v-if="selectedID.length">
                        <CButton type="button" color="danger" @click="removeQuestionIDs()" class="mr-2 float-right">Hapus</CButton>
                        <CDropdown
                            toggler-text="Tambahkan ke.."
                            color="primary"
                            class="mr-1 float-right"
                        >
                            <CDropdownItem v-for="quiz in quizzes" :key="quiz.id">{{quiz.title}}</CDropdownItem>
                        </CDropdown>
                    </template>
                    <CCollapse :show="collapse" :duration="400">
                        <CCard body-wrapper>
                            <CCardText>Collapse contents Here</CCardText>
                        </CCard>
                    </CCollapse>
                    <CDataTable
                        wrap
                        hover
                        fixed
                        :fields="['ID','Pertanyaan', 'Jawaban', 'Quiz Terkait']"
                        :items="dataset"
                        :items-per-page="10"
                        pagination
                        clickable-rows
                        @row-clicked="rowClicked"
                        :column-filter="{external: false, lazy: true}"
                    >
                        <template #ID="{item}">
                            <td>
                                <CBadge :color="selectedID.includes(item.ID)?'success':''">
                                    {{item.ID}}
                                </CBadge>
                            </td>
                        </template>
                    </CDataTable>
                    <template v-if="selectedID.length">
                        <CButton type="button" color="danger" @click="removeQuestionIDs()" class="mr-2 float-right">Hapus</CButton>
                        <CDropdown
                            toggler-text="Tambahkan ke.."
                            color="primary"
                            class="mr-1 float-right"
                        >
                            <CDropdownItem v-for="quiz in quizzes" :key="quiz.id">{{quiz.title}}</CDropdownItem>
                        </CDropdown>
                        <CCardText class="float-left mr-3">
                            {{selectedID.length}} terpilih
                        </CCardText>
                    </template>
                </CCardBody>
            </CCard>
        </CCol>
    </div>
</template>

<script>
    import routes from "../../api";
    import Editor from '@tinymce/tinymce-vue';
    import Connection from "../../../js/store/Connection";

    export default {
        name: "QuizQuestions",
        components:{
            Editor,
        },
        data(){
            return {
                addErrors: {
                    question: false,
                    answerA: false,
                    answerB: false,
                    answerC: false,
                    answerD: false,
                    answerE: false,
                },
                addQuestion: '',
                addAnswerKey: 'A',
                addChoices: [
                    {label: '', value: 'A'},
                    {label: '', value: 'B'},
                    {label: '', value: 'C'},
                    {label: '', value: 'D'},
                    {label: '', value: 'E'},
                ],
                addIsUploading: false,
                collapse: false,
                collapseAdd: false,
                quizzes: [],
                dataset:[],
                selectedID: [],
                addQuizId: null,
                isMounted: true,
            }
        },
        methods: {
            updateAnswerKey(v){
                this.addAnswerKey = v.target.value;
            },
            getSelected(id){
                return this.selectedID.includes(id)? 'success': 'error';
            },
            updateQuizId(v){
                console.log(v.target.value);
                this.addQuizId = v.target.value;
            },
            rowClicked(item, index, colName, e){
                let id = item.ID;
                if(!this.selectedID.includes(id)) {
                    this.selectedID.push(id);
                } else {
                    this.selectedID = this.selectedID.filter(d=>d !== id);
                }
            },
            getDataset(){
                return this.dataset.map(d=>{
                    let choice = d.choices.find(c=>d.answer_key === c.key);
                    return {
                        ID: d.id,
                        Pertanyaan: d.mce_question,
                        Jawaban: choice? choice.key + '. ' + choice.value: 'Error',
                        'Quiz Terkait': d.quiz.label
                    }
                });
            },
            resetFields(){
                this.isMounted = false;
                this.addQuestion = '';
                this.addAnswerKey = 'A';
                this.addChoices = [
                    {label: '', value: 'A'},
                    {label: '', value: 'B'},
                    {label: '', value: 'C'},
                    {label: '', value: 'D'},
                    {label: '', value: 'E'},
                ];
                setTimeout(()=>{
                    this.isMounted = true;
                }, 100);
            },
            publishQuestion(e){
                e.preventDefault();
                this.addIsUploading = true;
                let data = {
                    mce_question: this.addQuestion,
                    answer_key: this.addAnswerKey,
                    choices: this.addChoices.map(c=>{return {key: c.value, value: c.label}}),
                    quiz_id: this.addQuizId,
                };
                let self = this;

                Connection.post(routes.quizQuestionAdd, data).then(r=>{
                    if(r.data.status === 'success'){
                        let currQuiz = self.quizzes.find(q=>q.id === data.quiz_id);
                        let newQuestion = {
                            ID: r.data.id,
                            Pertanyaan: data.mce_question,
                            Jawaban: self.addAnswerKey + '. ' +  data.choices.find(c=>c.key === self.addAnswerKey).value,
                            'Quiz Terkait': currQuiz? currQuiz.label: 'Error'
                        };
                        self.dataset.push(newQuestion);
                        self.addIsUploading = false;
                        self.resetFields();
                    }
                }).catch(e=>{
                    self.addIsUploading = false;
                })
            },
            removeQuestionIDs(){
                let data = {
                    question_id: this.selectedID
                };
                let self = this;
                Connection.setHeader('Content-Type', 'application/json');
                Connection.post(routes.quizQuestionRemove, data).then(r=>{
                    if(r.data.status === 'success'){
                        self.dataset = self.dataset.filter(d=>!self.selectedID.includes(d.id));
                    }
                    self.selectedID = [];
                }).catch(e => {
                    console.log(e);
                })
            },
            editorInit(){
                return {
                    height: 500,
                    menubar: false,
                    plugins: [
                        'lists link image paste help wordcount'
                    ],
                    toolbar: 'undo redo | formatselect | link image | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent'
                }
            }
        },
        mounted(){
            Connection.get(routes.quizQuestions).then(r=>{
                if(r.data.error) return;
                this.dataset = r.data.map(d=>{
                    let choice = d.choices.find(c=>d.answer_key === c.key);
                    return {
                        ID: d.id,
                        Pertanyaan: d.mce_question,
                        Jawaban: choice? choice.key + '. ' + choice.value: 'Error',
                        'Quiz Terkait': d.quiz.label
                    }
                });
            });
            Connection.get(routes.quiz).then(r=>{
                this.quizzes = r.data;
            })
        }
    }
</script>

<style scoped>

</style>
