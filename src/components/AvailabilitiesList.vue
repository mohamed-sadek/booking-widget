<template>
  <div class="availabilities">
	<Availability v-for="(availability, index) in availabilities" v-bind:key="index" v-bind:availability="availability"/>
  </div>
</template>

<script>
import Availability from './Availability'

export default {
	name: 'AvailabilitiesList',
	props: ['availabilities'],
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
