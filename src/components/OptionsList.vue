<template>
  <div class="options-list">
      <Option v-for="(option, index) in options" v-bind:key="index" v-bind:option="option" />
  </div>
</template>

<script>
import Option from './OptionsListItem'

export default {
  name: 'OptionsListItem',
  store: this.$store,
  props: ['options'],
  components: {
    Option
  }
}
</script>

<style scoped>
.options-list {
  background: grey;
  padding: 16px;
}
</style>
