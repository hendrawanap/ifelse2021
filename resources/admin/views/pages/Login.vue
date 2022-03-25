<template>
  <div class="c-app flex-row align-items-center">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol md="8">
            <CCard class="p-4">
              <CCardBody>
                <CForm>
                  <h1>Login</h1>
                  <p class="text-muted">Sign In to your account</p>
                    <p class="text-danger" v-if="hasError">Validation Error</p>
                  <CInput
                    placeholder="Username"
                    autocomplete="username email"
                    v-model="username"
                  >
                    <template #prepend-content>
                        <CIcon name="cil-user"/>
                    </template>
                  </CInput>
                  <CInput
                    placeholder="Password"
                    type="password"
                    v-model="password"
                    autocomplete="current-password"
                  >
                    <template #prepend-content><CIcon name="cil-lock-locked"/></template>
                  </CInput>
                  <CRow>
                    <CCol col="6" class="text-left">
                      <CButton color="primary" class="px-4" @click="login">Login</CButton>
                    </CCol>

                  </CRow>
                </CForm>
              </CCardBody>
            </CCard>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script>
import Authenticator from "../../store/Authenticator";

export default {
    name: 'Login',
    data(){
      return {
          hasError: false,
          username: '',
          password: '',
      }
    },
    methods: {
        async login() {
            this.hasError = false;
            let isAuth = await Authenticator.login({username: this.username, password: this.password});
            if (isAuth && Authenticator.role() !== 'student') {
                this.$router.push('/');
            } else {
                this.hasError = true;
                Authenticator.logout();
            }
        }
    }
}
</script>
