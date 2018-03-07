// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		selectedOptionId: 0,
		selectedAvailabilityId: 0
	},

	mutations: {
		selectOption(state) {
			state.selectedOptionId = 0
		}
	}
})

import BookingAssistant from './BookingAssistant'
//import store from './store'

Vue.config.productionTip = false

new Vue({
	el: '#app',
	store,
	components: { BookingAssistant },
	template: '<BookingAssistant/>'
})
