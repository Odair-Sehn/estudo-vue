new Vue({
    el: "#app",
    data: {
        vidaJogador: 100,
        vidaMonstro: 100,
        jogoAtivo: false,
        width: "100"
    },
    computed: {
    },
    methods: {
        verVida() {
            if (this.vidaJogador == 0) {
                return ("Você perdeu :(")
            } else if (this.vidaMonstro == 0) {
                return ("Você ganhou :)")
            }
        },
        ataque() {
            let dano = 10
            this.width += `${dano}%`
        }
    },
    watch: {
    }
});