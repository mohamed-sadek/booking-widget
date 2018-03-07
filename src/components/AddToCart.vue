<template>
  <div class="add-to-cart">
   <button type="button" @click="onAddToCartClick">Add to Cart </button>
  </div>
</template>

<script>
export default {
  name: "AddToCart",
  methods: {
    onAddToCartClick () {
      console.log('Sending Request With the following Info: ', 'OptionId: ' + this.$store.state.selectedOption, 'Availability: ' + this.$store.state.selectedAvailability);
    }
  }
};
</script>

<style scoped>
.add-to-cart {
  display: flex;
  justify-content: flex-end;
  width: 100%;
}

button {
  background: rgb(18, 70, 87);
  color: white;
  border: 0;
  padding: 0.5rem;
  font-size: 1rem;
  align-self: right;
}
</style>
