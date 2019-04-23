new Vue({
	el: '#desafio',
	data: {
		class1: 'destaque',
		
		w100 : true,
		bg_blue: 'bg-blue',
		
		input_class: '',

		input_4_1: '',
		input_4_2: false,

		input_5: '',
		style_5: {
			width: '100px',
			height: '100px'
		},

		width: 0
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.class1 = this.class1 == 'destaque' ? 'encolher' : 'destaque'
			}, 1000)
		},
		iniciarProgresso() {
			let valor = 0
			const timer = setInterval(() => {
				valor += 1
				this.width = valor+'%'
				if (valor == 100) {
					clearInterval(timer)
				}
			}, 50)
		},

		setInput42(event){
			if (event.target.value === 'true') {
				this.input_4_2 = true
			} else if (event.target.value === 'false') {
				this.input_4_2 = false
			}
		}
	},
	computed: {
		desafio4: function () {
			var classStyle = this.input_4_1
			return { [classStyle]: this.input_4_2}
		}
	},
})
