<template>
    <div>
        <alert v-if="msg" :isSuccess="success" :success-message="msg" :error-message="msg" @close="msg = null"/>
        <div class="container col-lg-8" style="z-index: 2">
            <div class="row py-5 mt-lg-5 align-items-center">
                <!-- For Demo Purpose -->
                <div class="col-md-5 pr-lg-5 mb-5 mb-md-0 mx-auto">
                    <img :src="logo" style="width: 300px; height: 300px" class="img-fluid mb-3 d-none d-md-block mx-auto">

                </div>

                <!-- Registeration Form -->
                <div class="col-lg-6 mx-auto">
                    <div class="card login-shadow p-3">
                        <div class="card-body">
                            <h3 class="text-center mb-3 color-2-1">USER LOGIN</h3>
                            <form @submit.prevent="login" action="#">
                                <div class="row">

                                    <!-- First Name -->
                                    <div class="input-group col-lg-6 mb-4">
                                        <div class="input-group-prepend">
                            <span class="input-group-text bg-white px-4 border-md border-right-0">
                                <i class="fa fa-user text-muted"></i>
                            </span>
                                        </div>
                                        <input id="username" type="text" name="username" placeholder="NIM" v-model="username" class="form-control bg-white border-left-0 border-md">
                                    </div>

                                    <!-- Password -->
                                    <div class="input-group col-lg-6 mb-4">
                                        <div class="input-group-prepend">
                            <span class="input-group-text bg-white px-4 border-md border-right-0">
                                <i class="fa fa-lock text-muted"></i>
                            </span>
                                        </div>
                                        <input id="password" type="password" name="password" placeholder="Password" v-model="password" class="form-control bg-white border-left-0 border-md">
                                    </div>

                                    <!-- Submit Button -->
                                    <div class="form-group col-lg-12 mx-auto mb-0">
                                        <button type="submit" class="btn btn-color-2-1 btn-block py-2 text-white">Login</button>

                                        <!-- <p v-if="msg">{{ msg }}</p> -->
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <img :src="loginBG" style="position: absolute; bottom: 0; min-width: 100%; height:100%; z-index: 0;object-fit: cover; object-position: 50% 50%">
    </div>

</template>

<script>
    import Auth from '../../store/Authenticator';
    import loginBG from '../../../images/login-bg-2.png';
    import footer from '../../../images/footer.png';
    import logo from '../../../images/logo.png';
    import Alert from '../components/Alert';

    export default {
        name: "Login",
        components: { Alert },
        data() {
            return {
                username: '',
                password: '',
                msg: null,
                loginBG,
                footer,
                logo,
                success: false,
            };
        },
        emits: ['login'],
        methods: {
            async login() {
                let user;
                try {
                    user = await Auth.login({
                        username: this.username,
                        password: this.password
                    });
                    this.$emit('login');

                } catch(err) {
                    console.log(err.message);
                }
                if(!user){
                    this.msg = 'NIM atau Password Salah!';
                } else {
                    this.msg = 'Berhasil Login! Mohon Menunggu...';
                    this.success = true;
                    setTimeout(this.redirect, 2000);
                }
            },
            redirect() {
                location.replace(this.$route.query.redirect || '/home')
            }
        }
    }
</script>

<style scoped>

</style>
