<template>
  <CHeader fixed with-subheader light>
    <CToggler
      in-header
      class="ml-3 d-lg-none"
      @click="$store.commit('toggleSidebarMobile')"
    />
    <CToggler
      in-header
      class="ml-3 d-md-down-none"
      @click="$store.commit('toggleSidebarDesktop')"
    />
<!--    <CHeaderBrand class="mx-auto d-lg-none" to="/">-->
<!--      <CIcon name="logo" height="48" alt="Logo"/>-->
<!--    </CHeaderBrand>-->
    <CHeaderNav class="d-md-down-none mr-auto">
<!--      <CHeaderNavItem class="px-3">-->
<!--        <CHeaderNavLink to="/dashboard">-->
<!--          Dashboard-->
<!--        </CHeaderNavLink>-->
<!--      </CHeaderNavItem>-->
<!--      <CHeaderNavItem class="px-3">-->
<!--        <CHeaderNavLink to="/users" exact>-->
<!--          Users-->
<!--        </CHeaderNavLink>-->
<!--      </CHeaderNavItem>-->
<!--      <CHeaderNavItem class="px-3">-->
<!--        <CHeaderNavLink>-->
<!--          Settings-->
<!--        </CHeaderNavLink>-->
<!--      </CHeaderNavItem>-->
    </CHeaderNav>
    <CHeaderNav class="mr-4">
      <CHeaderNavItem class="mx-2 ml-auto">
        <CHeaderNavLink href="/logout">
           <p class="mr-2 mt-3">Keluar</p>
          <CIcon name="cil-account-logout"/>
        </CHeaderNavLink>
      </CHeaderNavItem>
    </CHeaderNav>
<!--    <CSubheader class="px-3">-->
<!--      <CBreadcrumbRouter class="border-0 mb-0"/>-->
<!--    </CSubheader>-->
  </CHeader>
</template>

<script>
import TheHeaderDropdownAccnt from './TheHeaderDropdownAccnt'

export default {
  name: 'TheHeader',
  components: {
    TheHeaderDropdownAccnt
  },
}
</script>
