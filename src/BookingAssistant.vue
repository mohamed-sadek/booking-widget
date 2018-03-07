<template>
  <div id="app">
    <options-list v-bind:options="options" />
  </div>
</template>

<script>

import OptionsList from './components/OptionsList'

export default {
  name: 'BookingAssistant',
  store: this.$store,
  components: {
    OptionsList
  },
  computed: {
    options () {
      return this.$store.state.options;
    }
  }
}
</script>

<style scoped>

</style>
