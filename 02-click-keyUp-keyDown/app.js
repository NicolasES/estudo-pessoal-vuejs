new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alert() {
            alert('Exibindo um alerta!')
        },
        key(event) {
            this.valor = event.target.value
        }
    }
})