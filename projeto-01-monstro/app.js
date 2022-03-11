new Vue({
    el: "#app",
    data: {
        vidaJogador: 100,
        vidaMonstro: 100,
        jogoAtivo: false,
    },
    computed: {
    },
    methods: {
        verVida() {
            if (this.vidaJogador <= 0) {
                this.vidaJogador = 0
                return ("Você perdeu :(")
            } else if (this.vidaMonstro <= 0) {
                this.vidaMonstro = 0
                return ("Você ganhou :)")
            } else {
                return ("Boa sorte, confiamos em você!")
            }
        },
        desistir() {
            this.vidaJogador = 100
            this.vidaMonstro = 100
            this.jogoAtivo = false
        },
        ataque() {
            let atkJogador = Math.floor(Math.random(0,1) * 20)
            let atkMonstro = Math.floor(Math.random(0,1) * 13)
            this.vidaMonstro -= atkJogador
            this.vidaJogador -= atkMonstro
        }
    },
    watch: {
    }
});