<template>
    <Loading v-if="isLoading"/>
    <div v-else class="container-fluid pb-4">
        <div class="container pt-4 ">
            <div class="row justify-content-center align-items-center">
                <router-link :to="`/berita/${news.id}`" v-for="news in newsList" :key="news.id" class="card card-flyer m-2 p-0" style="width: 20rem; border-radius: 2rem; text-decoration: none; cursor: pointer; color: black">
                    <img class="card-img-top" :src="news.image" alt="Card image cap" style="height: 200px; border-radius: 2rem 2rem 0 0; min-width: 100%; object-fit: cover">
                    <div class="card-body p-4">
                        <h5 class="card-title font-medium">{{ news.title.toUpperCase() }}</h5>
                        <p class="text-muted">{{ news.publishedAt }}</p>
                        <p class="card-text">{{ stripContent(news.content).substr(0,80) + '...' }}</p>
                    </div>
                </router-link>

            </div>
        </div>
    </div>
</template>

<script>
    import sample from '../../../../images/sample-post.jpg'
    import apiRoutes from "../../../router/api";
    import Connection from "../../../store/Connection";
    import Loading from "../../components/Loading";

    export default {
        name: "NewsIndex",
        components: {Loading},
        data() {
            return {
                sample,
                newsList: [],
                isLoading: true,
            }
        },
        async mounted() {
            this.newsList = await this.getNews();
            setTimeout(()=>{
                this.isLoading = false;
            }, 1000);
        },
        methods: {
            stripContent(content) {
                return content.replace(/(<([^>]+)>)/gi, "");
            },
            makeContentPreview(content) {
                return content.replace(/[^a-zA-Z0-9 ]/g, '');
            },
            async getNews() {
                let res = await Connection.get(apiRoutes.news);
                return res.data.map(n => {
                    return {
                        id: n.id,
                        title: n.title,
                        content: n.content,
                        publishedAt: n.published_at.split(' ')[0],
                        image: '/images/' + n.image,
                    }
                });
            }
        }
    }
</script>

<style scoped>
    .card-flyer{
        background: #FFFFFF;
        margin-top: 50px;
        -webkit-transition: all 0.2s ease-in;
        -moz-transition: all 0.2s ease-in;
        -ms-transition: all 0.2s ease-in;
        -o-transition: all 0.2s ease-in;
        transition: all 0.2s ease-in;
        box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.40);
    }

    .card-flyer:hover{
        background: #fff;
        box-shadow: 0px 15px 26px rgba(0, 0, 0, 0.50);
        /*box-shadow: 0px 15px 26px rgba(0, 0, 0, 0.50);*/
        -webkit-transition: all 0.2s ease-in;
        -moz-transition: all 0.2s ease-in;
        -ms-transition: all 0.2s ease-in;
        -o-transition: all 0.2s ease-in;
        transition: all 0.2s ease-in;
        margin-top: 50px;
    }

</style>
