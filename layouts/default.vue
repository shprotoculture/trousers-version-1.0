<template>
  <div class="app">
    <app-header></app-header>
    <main class="main" :style="{'padding-top': mainContainerPadding + 'px'}">
      <nuxt/>
    </main>
    <app-footer></app-footer>
  </div>
</template>
<script>
import AppHeader from '~/components/header/AppHeader';
import AppFooter from '~/components/footer/AppFooter';
export default {
  components: {
    AppHeader,
    AppFooter
  },
  computed: {
    saleAlertIsActive () {
      return this.$store.state.header.saleAlertIsActive;
    },
    mainContainerPadding () {
      return this.saleAlertIsActive ? 79 : 49;
    }
  }
}
</script>
<style lang="scss">
  .main {
    transition: .25s ease;
  }
</style>





