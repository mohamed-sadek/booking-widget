<template>
  <div class="availabilities">
	<Availability v-for="(availabilityItem, index) in availability" v-bind:key="index" v-bind:availability="availabilityItem"/>
  </div>
</template>

<script>
import Availability from './Availability'

export default {
	name: 'AvailabilitiesList',
	props: ['availability'],
	store: this.$store,
	components: {
		Availability
	}
}
</script>

<style scoped>
.availabilities {
  display: flex;
}
</style>
