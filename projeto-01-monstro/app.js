new Vue({
    el: "#app",
    data: {
        vidaJogador: 100,
        vidaMonstro: 100,
        jogoAtivo: false,
        logs: []
    },
    computed: {
    },
    methods: {
        verVida() {
            if (this.vidaJogador <= 0) {
                this.vidaJogador = 0
                this.jogoAtivo = false
                return ("Você perdeu :(")
            } else if (this.vidaMonstro <= 0) {
                this.vidaMonstro = 0
                this.jogoAtivo = false
                return ("Você ganhou :)")
            } else {
                return ("Boa sorte, confiamos em você!")
            }
        },
        numeroRandom(min, max) {
            const valor = Math.random() * (max - min) + min
            return Math.round(valor)
        },
        novoJogo() {
            this.vidaJogador = 100
            this.vidaMonstro = 100
            this.jogoAtivo = true
            this.logs = []
        },
        desistir() {
            this.vidaJogador = 100
            this.vidaMonstro = 100
            this.jogoAtivo = false
            this.logs = []
        },
        ataque(especial) {
            this.dano("vidaMonstro", 5, 10, especial, "Jogador", "Monstro", "logJogador")
            if (this.vidaMonstro > 0) {
                this.dano("vidaJogador", 7, 12, false, "Monstro", "Jogador", "logMonstro")
            }
        },
        dano(prop, min, max, especial, origem, alvo, classe) {
            const plus = especial ? 5 : 0
            const dano = this.numeroRandom(min + plus, max + plus)
            this[prop] = Math.max(this[prop] - dano, 0)
            this.registraLog(`${origem} atingiu o ${alvo} com ${dano} de dano.`, classe)
        },
        
        curar(min, max) {
            const curar = this.numeroRandom(min, max)
            this.vidaJogador = Math.min(this.vidaJogador + curar, 100)
            this.registraLog(`Jogador se curou em ${curar} de vida`, "logCurar")
        },
        curarAtacar() {
            this.curar(10, 14)
            this.dano("vidaJogador", 7, 12, false, "Monstro", "Jogador", "logMonstro")
        },
        registraLog(texto, classe) {
            this.logs.unshift({ texto, classe })
        }
    },
    watch: {
    }
});