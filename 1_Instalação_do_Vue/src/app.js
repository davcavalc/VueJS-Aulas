const myNameApp = {
	data() {
		return {
			name: "Fulano",
			idade: 30,
		};
	},
};

Vue.createApp(myNameApp).mount("#app");
