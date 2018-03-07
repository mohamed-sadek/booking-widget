import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import data from './data';

const store = new Vuex.Store({
	state: {
		selectedOption: 0,
		selectedAvailability: 0,
		options: data
	},

	mutations: {
		selectOption(state, option) {
			state.selectedOption = option;
		},
		
		selectAvailability(state, availability) {
			state.selectedAvailability = availability;
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
