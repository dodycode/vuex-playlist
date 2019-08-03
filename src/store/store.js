import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
	strict: true,
	state: {
		products: [
	    	{name: 'Banana Skin', price: 20},
	        {name: 'Shiny Star', price: 40},
	        {name: 'Green Shells', price: 60},
	        {name: 'Red Shells', price: 80}
	    ]
	},
	getters: {
		editedProducts: state => {
			let products = state.products.map(product => {
				return {
					name: "*" + product.name + "*",
					price: product.price/2
				}
			});

			return products;
		}
	},
	mutations: {
		reducePriceMutation: state => {
			let productPrices = state.products.forEach(product => {
				product.price -= 1;
			});
		}
	},
	actions: {
		reducePriceAction: context => {
			context.commit('reducePriceMutation');
		}
	}
});