new Vue({
    el: '#desafio',
    data: {
        nome: 'Oda',
        idade: 22,
        imagem: "http://files.cod3r.com.br/curso-vue/vue.jpg"
    },
    methods: {
        numeroRandom() {
            return Math.random();
        }
    }
})