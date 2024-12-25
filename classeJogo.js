

class Jogo{
    constructor(nomeDoHeroi, idadeDoHeroi, tipoDoHeroi, ataqueDoHeroi){
        this.nomeDoHeroi = nomeDoHeroi;
        this.idadeDoHeroi = idadeDoHeroi;
        this.tipoDoHeroi = tipoDoHeroi;
        this.ataqueDoHeroi = ataqueDoHeroi;

        if (tipoDoHeroi == "mago"){
            this.ataqueDoHeroi = "magia";
        } else if (tipoDoHeroi == "guerreiro"){
            this.ataqueDoHeroi = "espada";
        } else if (tipoDoHeroi == "monge"){
            this.ataqueDoHeroi = "artes marciais";
        }else if(tipoDoHeroi == "ninja"){
            this.ataqueDoHeroi = "shuriquen";
        }else{
            this.ataqueDoHeroi = "ataque desconhecido";
        }
    }

    atacar(){
        console.log(`O heroi de nome ${this.nomeDoHeroi} e do tipo ${this.tipoDoHeroi} atacou usando ${this.ataqueDoHeroi}`);
    }
}

let heroi = new Jogo("Carlos", 19, "Sayajin");
heroi.atacar();

