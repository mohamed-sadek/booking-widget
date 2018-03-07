<template>
  <div class="options-list">
      <Option v-for="(option, index) in options" v-bind:key="index" v-bind:option="option" />
  </div>
</template>

<script>
import Option from './OptionsListItem'

export default {
  name: 'OptionsListItem',
  components: {
    Option
  },
  data () {
    return {
      options: [
        {
          id: 0,
          title: 'option 0',
          availabilities: ['15:00', '16:00']
        },

        {
          id: 1,
          title: 'option 1',
          availabilities: ['15:00', '16:00']
        }
      ]
    }
  }
}
</script>

<style scoped>
.options-list {
  background: grey;
  padding: 16px;
}
</style>
