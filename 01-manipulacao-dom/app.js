var app  = new Vue({
    el: '#desafio',
    data: {
        name: 'Nicolas E. Sonnenfeld',
        age: 26,
        image: 'https://www.edivaldobrito.com.br/wp-content/uploads/2018/06/world-of-warcraft-no-linux.jpg'
    },
    methods: {
        random(){
            return Math.random()
        }
    }
})