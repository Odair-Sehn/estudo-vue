new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta() {
            alert("Alerta no methods com evento v-on:click")
        },
        guardarValor(event) {
            this.valor = event.target.value
        }
    }
})