<template>
  <div class="add-to-cart">
   <button type="button">Add to Cart </button>
  </div>
</template>

<script>
export default {
  name: "AddToCart",
  data() {
    return {};
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
