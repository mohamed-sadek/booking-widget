<template>
  <div class="availability">
	<button type="button" @click="onTimeSelect">{{ availability }}</button>
  </div>
</template>

<script>

export default {
	name: 'Availability',
	props: ['availability'],
	data () {
		return {
			selectedTime: null
		}
	},
	methods: {
		onTimeSelect: (value) => {
			console.log(this.$store);
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
