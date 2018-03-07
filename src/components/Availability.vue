<template>
  <div class="availability">
	<button type="button" value="1" @click="onTimeSelect($event.target.value)">{{ availability }}</button>
  </div>
</template>

<script>

export default {
	name: 'Availability',
	props: ['availability'],
	store: this.$store,

	methods: {
		onTimeSelect (value) {
			this.$store.commit('selectOption', value);
		}
	}
}
</script>

<style scoped>
  .availability {
	margin: 0 0.3rem;
  }

  .availability:first-child {
	margin: 0;
  }
</style>
