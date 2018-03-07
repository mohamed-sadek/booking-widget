// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		selectedOptionId: 0,
		selectedAvailabilityId: 0,
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
	},

	mutations: {
		selectOption(state, option) {
			state.selectedOptionId = option
		}
	}
})

import BookingAssistant from './BookingAssistant'

Vue.config.productionTip = false

new Vue({
	el: '#app',
	store,
	components: { BookingAssistant },
	template: '<BookingAssistant/>'
})
