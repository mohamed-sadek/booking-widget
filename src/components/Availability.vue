<template>
  <div class="availability">
		<button type="button" v-bind:class="{ selected: isSelected }" value="1" @click="onTimeSelect($event.target.value)">{{ availability.start_time }}</button>
  </div>
</template>

<script>

export default {
	name: 'Availability',
	props: ['availability'],
	computed: {
		isSelected () {
			return this.$store.state.selectedAvailability === this.availability.start_time;
		}
	},
	methods: {
		onTimeSelect () {
			this.$store.commit('selectAvailability', this.availability.start_time);
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

	.selected {
		background: red;
	}
</style>
