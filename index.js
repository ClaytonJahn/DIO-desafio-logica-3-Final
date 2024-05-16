class hero {
    constructor(name, age, vocation){
        this.name = name
        this.age = age
        this.vocation = vocation
    }
    escrever(){
        switch (this.vocation) {
            case "Maga":
                console.log(`A Heroína ${this.name} que é uma ${this.vocation} atacou uma Bola de fogo!`)
                break;
            case "Guerreira":
                console.log(`A Heroína ${this.name} que é uma ${this.vocation} atacou com sua Espada Larga`)
                break;
            case "Arqueira":
                console.log(`A Heroína ${this.name} que é uma ${this.vocation} atacou uma Flecha rápida!`)
                break;
            case "Ladina":
                console.log(`A Heroína ${this.name} que é uma ${this.vocation} atacou Furtivamente!`)
                break;
        }
    }
}

let lynn = new hero ("Lynn Masuzu", 25, "Maga")
let command = new hero ("Commandz", 23, "Guerreira")
let nath = new hero ("Nath", 20, "Ladina")
let lira = new hero ("Lira", 21, "Arqueira")

lynn.escrever()
command.escrever()
nath.escrever()
lira.escrever()
