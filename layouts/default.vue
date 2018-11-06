<template>
  <div class="app">
    <app-header></app-header>
    <main class="main" :style="{'padding-top': mainContainerPadding + 'px'}">
      <nuxt/>
    </main>
  </div>
</template>
<script>
import AppHeader from '~/components/header/AppHeader';
export default {
  components: {
    AppHeader
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





