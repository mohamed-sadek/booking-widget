import Vuex from 'vuex'

const Store = new Vuex.Store({
	state: {
		selectedOptionId: 0,
		selectedAvailabilityId: 0
	},

	mutations: {
		selectOption (state) {
			state.selectedOptionId = 0
		}
	}
})

export default Store
