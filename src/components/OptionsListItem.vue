<template>
  <div class="option" @click="onOptionSelect">
    <p>{{ option.title }}</p>
    <availabilities-list v-bind:availability="option.availability"  />
    <add-to-cart />
  </div>
</template>

<script>
import AddToCart from './AddToCart'
import AvailabilitiesList from './AvailabilitiesList'

export default {
  name: 'OptionListItem',
  props: ['option'],
  store: this.$store,
  components: {
    AddToCart,
    AvailabilitiesList
  },

  methods: {
    onOptionSelect () {
      this.$store.commit('selectOption', this.option.id);
    }
  }
}
</script>

<style scoped>
  .option {
    background: white;
    color: grey;
    padding: 4px 8px;
    margin: 8px 0;
  }
</style>
