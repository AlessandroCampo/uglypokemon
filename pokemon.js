class Pokemon {
    constructor({ name, hp, type, attacks, level, image, size, attack, defense, sp_atk, sp_def, speed, experience, evolution_level, evolution, learnable_moves, status, catchrate, damage_taken }) {
        this.hp = hp
        this.type = type
        this.attacks = attacks
        this.level = level
        this.image = image
        this.name = name
        this.size = size
        this.attack = attack
        this.defense = defense
        this.sp_atk = sp_atk
        this.sp_def = sp_def
        this.speed = speed
        this.experience = experience
        this.evolution_level = evolution_level
        this.evolution = evolution
        this.learnable_moves = learnable_moves
        this.status = status
        this.catchrate = catchrate
        this.damage_taken = damage_taken
    }

    placeAlly() {
        console.log(myPoke.classList)
        myPoke.src = this.image[0]

        console.log(this.size)
        myPoke.className = this.size
        if (this.size == "big") {
            myPoke.style.width = "80%"
        }
        else if (this.size == "small") {
            myPoke.style.width = "40%"
        }
        else if (this.size == "medium") {
            myPoke.style.width = "70%"
        }
    }

    placeEnemy() {
        enemyPoke.src = this.image[1]
        enemyPoke.className = this.size
    }

    attack({
        move, target
    }) {
        gsap.to(this.position)
    }

}

// POMKEMON SPRITES





const charizard = new Pokemon({
    name: "charizard",
    level: 1,
    hp: {
        base: 78,
        max: 78,
        current: 78
    },
    attack: {
        base: 84,
        current: 84,
        effective: 84,
        stage: 0
    },
    defense: {
        base: 78,
        current: 78,
        effective: 78,
        stage: 0
    },
    sp_atk: {
        base: 109,
        current: 109,
        effective: 109,
        stage: 0
    },
    sp_def: {
        base: 85,
        current: 85,
        effective: 85,
        stage: 0
    },
    speed: {
        base: 100,
        current: 100,
        effective: 100,
        stage: 0
    },
    experience: {
        base: 267,
        total: 0
    },
    evolution_level: null,
    evolution: null,
    type: ["Fire", "Flying"],
    status: "none",
    attacks: [attacks.Scratch, attacks.Growl],
    learnable_moves: [attacks.Ember, attacks.Meteor],
    //grwol, scratch
    image: ["./assets/img/charizard-back.gif", "./assets/img/charizard-front.gif"],
    size: "free",
    catchrate: 45,
    damage_taken: 0
})

const charmeleon = new Pokemon({
    name: "Charmeleon",
    level: 1,
    hp: {
        base: 58,
        max: 58,
        current: 58
    },
    attack: {
        base: 64,
        current: 64,
        effective: 64,
        stage: 0
    },
    defense: {
        base: 58,
        current: 58,
        effective: 58,
        stage: 0
    },
    sp_atk: {
        base: 80,
        current: 80,
        effective: 80,
        stage: 0
    },
    sp_def: {
        base: 65,
        current: 65,
        effective: 65,
        stage: 0
    },
    speed: {
        base: 80,
        current: 80,
        effective: 80,
        stage: 0
    },
    experience: {
        base: 142,
        total: 0
    },
    evolution_level: 36,
    evolution: charizard,
    type: ["Fire"],
    attacks: [attacks.Scratch, attacks.Growl],
    learnable_moves: [attacks.Ember, attacks.Meteor],
    //grwol, scratch
    image: ["./assets/img/charmeleon-back.gif", "./assets/img/charmeleon-front.gif"],
    size: "medium",
    catchrate: 45,
    damage_taken: 0
})


const charmander = new Pokemon({
    name: "Charmander",
    level: 6,
    hp: {
        base: 39,
        max: 39,
        current: 39
    },
    attack: {
        base: 52,
        current: 52,
        effective: 52,
        stage: 0
    },
    defense: {
        base: 43,
        current: 43,
        effective: 43,
        stage: 0
    },
    sp_atk: {
        base: 60,
        current: 60,
        effective: 60,
        stage: 0
    },
    sp_def: {
        base: 50,
        current: 50,
        effective: 50,
        stage: 0
    },
    speed: {
        base: 65,
        current: 65,
        effective: 65,
        stage: 0
    },
    experience: {
        base: 62,
        total: 0
    },
    evolution_level: 16,
    evolution: charmeleon,
    type: "Fire",
    status: "none",
    attacks: [attacks.Ember, attacks.Tackle],
    learnable_moves: [attacks.Ember, attacks.Meteor],
    //grwol, scratch
    image: ["./assets/img/charmender-back.gif", "./assets/img/charmander-front.gif"],
    size: "small",
    catchrate: 45,
    damage_taken: 0
})

const venusaur = new Pokemon({
    name: "Venusaur",
    hp: {
        base: 80,
        max: 80,
        current: 80
    },
    experience: {
        base: 236,
        total: 0
    },
    attack: {
        base: 82,
        current: 82,
        effective: 82,
        stage: 0
    },
    defense: {
        base: 83,
        current: 83,
        effective: 83,
        stage: 0
    },
    sp_atk: {
        base: 100,
        current: 100,
        effective: 100,
        stage: 0
    },
    sp_def: {
        base: 100,
        current: 100,
        effective: 100,
        stage: 0
    },
    speed: {
        base: 80,
        current: 80,
        effective: 80,
        stage: 0
    },
    evolution_level: null,
    evolution: null,
    type: ["Grass", "Poison"],
    status: "none",
    attacks: [attacks.Growl, attacks.Tackle],
    learnable_moves: [attacks.Razor_Leaf, attacks.Sleep_Powder],
    //growl, vine whip
    level: 1,
    image: ["./assets/img/venusaur-back.gif", "./assets/img/venusaur-front.gif"],
    size: "big",
    catchrate: 45,
    damage_taken: 0
})



const ivysaur = new Pokemon({
    name: "Ivysaur",
    hp: {
        base: 60,
        max: 60,
        current: 60
    },
    experience: {
        base: 142,
        total: 0
    },
    attack: {
        base: 62,
        current: 62,
        effective: 62,
        stage: 0
    },
    defense: {
        base: 63,
        current: 63,
        effective: 63,
        stage: 0
    },
    sp_atk: {
        base: 80,
        current: 80,
        effective: 80,
        stage: 0
    },
    sp_def: {
        base: 80,
        current: 80,
        effective: 80,
        stage: 0
    },
    speed: {
        base: 60,
        current: 60,
        effective: 60,
        stage: 0
    },
    evolution_level: 32,
    evolution: venusaur,
    type: ["Grass", "Poison"],
    status: "none",
    attacks: [attacks.Growl, attacks.Tackle],
    learnable_moves: [attacks.Razor_Leaf, attacks.Sleep_Powder],
    //growl, vine whip
    level: 1,
    image: ["./assets/img/ivysaur-back.gif", "./assets/img/ivysaur-front.gif"],
    size: "medium",
    catchrate: 45,
    damage_taken: 0
})

const bulbasaur = new Pokemon({
    name: "Bulbasaur",
    hp: {
        base: 45,
        max: 45,
        current: 45
    },
    experience: {
        base: 64,
        total: 0
    },
    attack: {
        base: 49,
        current: 49,
        effective: 49,
        stage: 0
    },
    defense: {
        base: 49,
        current: 49,
        effective: 49,
        stage: 0
    },
    sp_atk: {
        base: 65,
        current: 65,
        effective: 65,
        stage: 0
    },
    sp_def: {
        base: 65,
        current: 65,
        effective: 65,
        stage: 0
    },
    speed: {
        base: 45,
        current: 45,
        effective: 45,
        stage: 0
    },
    evolution_level: 16,
    evolution: ivysaur,
    type: ["Grass", "Poison"],
    attacks: [attacks.Tackle],
    learnable_moves: [attacks.Razor_Leaf, attacks.Sleep_Powder],
    //growl, vine whip
    status: "none",
    level: 6,
    image: ["./assets/img/bulbasaur-back.gif", "./assets/img/bulbasaur-front.gif"],
    size: "small",
    catchrate: 45,
    damage_taken: 0
})


const blastoise = new Pokemon({
    name: "Blastoise",
    hp: {
        base: 79,
        max: 79,
        current: 79
    },
    experience: {
        base: 239,
        total: 0
    },
    attack: {
        base: 83,
        current: 83,
        effective: 83,
        stage: 0
    },
    defense: {
        base: 100,
        current: 100,
        effective: 100,
        stage: 0
    },
    sp_atk: {
        base: 85,
        current: 85,
        effective: 85,
        stage: 0
    },
    sp_def: {
        base: 105,
        current: 105,
        effective: 105,
        stage: 0
    },
    speed: {
        base: 78,
        current: 78,
        effective: 78,
        stage: 0
    },
    evolution_level: null,
    evolution: null,
    type: ["Water"],
    status: "none",
    attacks: [attacks.Tail_Whip, attacks.Tackle],
    learnable_moves: [attacks.Water_Gun, attacks.Bite],
    //water gun
    level: 1,
    image: ["./assets/img/blastoise-back.gif", "./assets/img/blastoise-front.gif"],
    size: "big",
    catchrate: 45,
    damage_taken: 0
})


const wartortle = new Pokemon({
    name: "Wartortle",
    hp: {
        base: 59,
        max: 59,
        current: 59
    },
    experience: {
        base: 142,
        total: 0
    },
    attack: {
        base: 63,
        current: 63,
        effective: 63,
        stage: 0
    },
    defense: {
        base: 80,
        current: 80,
        effective: 80,
        stage: 0
    },
    sp_atk: {
        base: 65,
        current: 65,
        effective: 65,
        stage: 0
    },
    sp_def: {
        base: 80,
        current: 80,
        effective: 80,
        stage: 0
    },
    speed: {
        base: 58,
        current: 58,
        effective: 58,
        stage: 0
    },
    evolution_level: 36,
    evolution: blastoise,
    type: ["Water"],
    status: "none",
    attacks: [attacks.Tail_Whip, attacks.Tackle],
    learnable_moves: [attacks.Water_Gun, attacks.Bite],
    //water gun
    level: 1,
    image: ["./assets/img/wartortle-back.gif", "./assets/img/wartortle-front.gif"],
    size: "small",
    catchrate: 45,
    damage_taken: 0
})

const squirtle = new Pokemon({
    name: "Squirtle",
    hp: {
        base: 44,
        max: 44,
        current: 44
    },
    experience: {
        base: 63,
        total: 0
    },
    attack: {
        base: 48,
        current: 48,
        effective: 48,
        stage: 0
    },
    defense: {
        base: 65,
        current: 65,
        effective: 65,
        stage: 0
    },
    sp_atk: {
        base: 50,
        current: 50,
        effective: 50,
        stage: 0
    },
    sp_def: {
        base: 64,
        current: 64,
        effective: 64,
        stage: 0
    },
    speed: {
        base: 43,
        current: 43,
        effective: 43,
        stage: 0
    },
    evolution_level: 16,
    evolution: wartortle,
    type: ["Water"],
    status: "none",
    attacks: [attacks.Tail_Whip, attacks.Tackle],
    learnable_moves: [attacks.Water_Gun, attacks.Bite],
    //water gun
    level: 6,
    image: ["./assets/img/squirtle-back.gif", "./assets/img/squirtle-front.gif"],
    size: "small",
    catchrate: 45,
    damage_taken: 0
})



const raticate = new Pokemon({
    name: "Raticate",
    hp: {
        base: 55,
        max: 55,
        current: 55
    },
    experience: {
        base: 145,
        total: 0
    },
    attack: {
        base: 81,
        current: 81,
        effective: 81,
        stage: 0
    },
    defense: {
        base: 60,
        current: 60,
        effective: 60,
        stage: 0
    },
    sp_atk: {
        base: 50,
        current: 50,
        effective: 50,
        stage: 0
    },
    sp_def: {
        base: 70,
        current: 70,
        effective: 70,
        stage: 0
    },
    speed: {
        base: 97,
        current: 97,
        effective: 97,
        stage: 0
    },
    evolution_level: null,
    evolution: null,
    type: ["Normal"],
    attacks: [attacks.Tail_Whip, attacks.Tackle],
    learnable_moves: [attacks.Quick_Attack, attacks.Bite],
    level: 1,
    image: ["./assets/img/raticate-back.gif", "./assets/img/raticate-front.gif"],
    size: "medium",
    status: "none",
    catchrate: 127,
    damage_taken: 0
})

const rattata = new Pokemon({
    name: "Rattata",
    hp: {
        base: 30,
        max: 30,
        current: 30
    },
    experience: {
        base: 51,
        total: 0
    },
    attack: {
        base: 56,
        current: 56,
        effective: 56,
        stage: 0
    },
    defense: {
        base: 35,
        current: 35,
        effective: 35,
        stage: 0
    },
    sp_atk: {
        base: 25,
        current: 25,
        effective: 25,
        stage: 0
    },
    sp_def: {
        base: 35,
        current: 35,
        effective: 35,
        stage: 0
    },
    speed: {
        base: 72,
        current: 72,
        effective: 72,
        stage: 0
    },
    evolution_level: 20,
    evolution: raticate,
    type: ["Normal"],
    attacks: [attacks.Tackle],
    learnable_moves: [attacks.Quick_Attack, attacks.Bite],
    level: 1,
    image: ["./assets/img/rattata-back.gif", "./assets/img/rattata-front.gif"],
    size: "small",
    status: "none",
    catchrate: 255,
    damage_taken: 0
})



const nidoqueen = new Pokemon({
    name: "Nidoqueen",
    hp: {
        base: 90,
        max: 90,
        current: 90
    },
    experience: {
        base: 227,
        total: 0
    },
    attack: {
        base: 92,
        current: 92,
        effective: 92,
        stage: 0
    },
    defense: {
        base: 87,
        current: 87,
        effective: 87,
        stage: 0
    },
    sp_atk: {
        base: 75,
        current: 75,
        effective: 75,
        stage: 0
    },
    sp_def: {
        base: 85,
        current: 85,
        effective: 85,
        stage: 0
    },
    speed: {
        base: 76,
        current: 76,
        effective: 76,
        stage: 0
    },
    evolution_level: null,
    evolution: null,
    type: ["Poison", "Ground"],
    attacks: [attacks.Growl, attacks.Poison_Sting],
    learnable_moves: [attacks.Scratch, attacks.Tail_Whip],
    //growl, scractch, poison sting
    level: 1,
    image: ["./assets/img/nidoqueen-back.gif", "./assets/img/nidoqueen-front.gif"],
    size: "big",
    status: "none",
    catchrate: 45,
    damage_taken: 0
})




const nidorina = new Pokemon({
    name: "Nidorina",
    hp: {
        base: 70,
        max: 70,
        current: 70
    },
    experience: {
        base: 128,
        total: 0
    },
    attack: {
        base: 62,
        current: 62,
        effective: 62,
        stage: 0
    },
    defense: {
        base: 67,
        current: 67,
        effective: 67,
        stage: 0
    },
    sp_atk: {
        base: 55,
        current: 55,
        effective: 55,
        stage: 0
    },
    sp_def: {
        base: 55,
        current: 55,
        effective: 55,
        stage: 0
    },
    speed: {
        base: 56,
        current: 56,
        effective: 56,
        stage: 0
    },
    evolution_level: 36,
    evolution: nidoqueen,
    type: ["Poison"],
    attacks: [attacks.Growl, attacks.Poison_Sting],
    learnable_moves: [attacks.Scratch, attacks.Tail_Whip],
    //growl, scractch, poison sting
    level: 1,
    image: ["./assets/img/nidorina-back.gif", "./assets/img/nidorina-front.gif"],
    size: "medium",
    status: "none",
    catchrate: 120,
    damage_taken: 0
})

const nidoran = new Pokemon({
    name: "Nidoran",
    hp: {
        base: 55,
        max: 55,
        current: 55
    },
    experience: {
        base: 55,
        total: 0
    },
    attack: {
        base: 47,
        current: 47,
        effective: 47,
        stage: 0
    },
    defense: {
        base: 52,
        current: 52,
        effective: 52,
        stage: 0
    },
    sp_atk: {
        base: 40,
        current: 40,
        effective: 40,
        stage: 0
    },
    sp_def: {
        base: 40,
        current: 40,
        effective: 40,
        stage: 0
    },
    speed: {
        base: 41,
        current: 41,
        effective: 41,
        stage: 0
    },
    evolution_level: 16,
    evolution: nidorina,
    type: ["Poison"],
    attacks: [attacks.Tackle],
    learnable_moves: [attacks.Scratch, attacks.Tail_Whip],
    //growl, scractch, poison sting
    level: 1,
    image: ["./assets/img/nidoran-back.gif", "./assets/img/nidoran-front.gif"],
    size: "small",
    status: "none",
    catchrate: 255,
    damage_taken: 0
})


const pidgeot = new Pokemon({
    name: "Pidgeot",
    hp: {
        base: 83,
        max: 83,
        current: 83
    },
    experience: {
        base: 216,
        total: 0
    },
    attack: {
        base: 80,
        current: 80,
        effective: 80,
        stage: 0
    },
    defense: {
        base: 75,
        current: 75,
        effective: 75,
        stage: 0
    },
    sp_atk: {
        base: 70,
        current: 70,
        effective: 70,
        stage: 0
    },
    sp_def: {
        base: 70,
        current: 70,
        effective: 70,
        stage: 0
    },
    speed: {
        base: 101,
        current: 101,
        effective: 101,
        stage: 0
    },
    evolution_level: null,
    evolution: null,
    type: ["Flying"],
    attacks: [attacks.Tackle],
    learnable_moves: [attacks.Gust, attacks.Quick_Attack],
    // gust
    level: 1,
    image: ["./assets/img/pidgeot-back.gif", "./assets/img/pidgeot-front.gif"],
    size: "medium",
    status: "none",
    catchrate: 45,
    damage_taken: 0
})





const pidgeotto = new Pokemon({
    name: "Pidgeotto",
    hp: {
        base: 63,
        max: 63,
        current: 63
    },
    experience: {
        base: 122,
        total: 0
    },
    attack: {
        base: 60,
        current: 60,
        effective: 60,
        stage: 0
    },
    defense: {
        base: 55,
        current: 55,
        effective: 55,
        stage: 0
    },
    sp_atk: {
        base: 50,
        current: 50,
        effective: 50,
        stage: 0
    },
    sp_def: {
        base: 50,
        current: 50,
        effective: 50,
        stage: 0
    },
    speed: {
        base: 71,
        current: 71,
        effective: 71,
        stage: 0
    },
    evolution_level: 36,
    evolution: pidgeot,
    type: ["Flying"],
    attacks: [attacks.Tackle],
    learnable_moves: [attacks.Gust, attacks.Quick_Attack],
    // gust
    level: 1,
    image: ["./assets/img/pidgeotto-back.gif", "./assets/img/pidgeotto-front.gif"],
    size: "medium",
    status: "none",
    catchrate: 120,
    damage_taken: 0
})

const pidgey = new Pokemon({
    name: "Pidgey",
    hp: {
        base: 40,
        max: 40,
        current: 40
    },
    experience: {
        base: 50,
        total: 0
    },
    attack: {
        base: 45,
        current: 45,
        effective: 45,
        stage: 0
    },
    defense: {
        base: 40,
        current: 40,
        effective: 40,
        stage: 0
    },
    sp_atk: {
        base: 35,
        current: 35,
        effective: 35,
        stage: 0
    },
    sp_def: {
        base: 35,
        current: 35,
        effective: 35,
        stage: 0
    },
    speed: {
        base: 56,
        current: 56,
        effective: 56,
        stage: 0
    },
    evolution_level: 18,
    evolution: pidgeotto,
    type: ["Flying"],
    attacks: [attacks.Tackle],
    learnable_moves: [attacks.Gust, attacks.Quick_Attack],
    // gust
    level: 1,
    image: ["./assets/img/pidgey-back.gif", "./assets/img/pidgey-front.gif"],
    size: "small",
    status: "none",
    catchrate: 255,
    damage_taken: 0
})

const butterfree = new Pokemon({
    name: "Butterfree",
    hp: {
        base: 60,
        max: 60,
        current: 60
    },
    experience: {
        base: 178,
        total: 0
    },
    attack: {
        base: 45,
        current: 45,
        effective: 45,
        stage: 0
    },
    defense: {
        base: 50,
        current: 50,
        effective: 50,
        stage: 0
    },
    sp_atk: {
        base: 90,
        current: 90,
        effective: 90,
        stage: 0
    },
    sp_def: {
        base: 80,
        current: 80,
        effective: 80,
        stage: 0
    },
    speed: {
        base: 70,
        current: 70,
        effective: 70,
        stage: 0
    },
    evolution_level: null,
    evolution: null,
    type: ["Bug", "Flying"],
    attacks: [attacks.Tackle],
    learnable_moves: [attacks.Gust, attacks.Quick_Attack],
    // gust
    level: 1,
    image: ["./assets/img/butterfree-back.gif", "./assets/img/butterfree-front.gif"],
    size: "medium",
    status: "none",
    catchrate: 45,
    damage_taken: 0
})

const metapod = new Pokemon({
    name: "Metapod",
    hp: {
        base: 50,
        max: 50,
        current: 50
    },
    experience: {
        base: 72,
        total: 0
    },
    attack: {
        base: 20,
        current: 20,
        effective: 20,
        stage: 0
    },
    defense: {
        base: 55,
        current: 55,
        effective: 55,
        stage: 0
    },
    sp_atk: {
        base: 25,
        current: 25,
        effective: 25,
        stage: 0
    },
    sp_def: {
        base: 25,
        current: 25,
        effective: 25,
        stage: 0
    },
    speed: {
        base: 30,
        current: 30,
        effective: 30,
        stage: 0
    },
    evolution_level: 10,
    evolution: butterfree,
    type: ["Bug"],
    attacks: [attacks.Tackle],
    learnable_moves: [attacks.Gust, attacks.Quick_Attack],
    // gust
    level: 1,
    image: ["./assets/img/metapod-back.gif", "./assets/img/metapod-front.gif"],
    size: "small",
    status: "none",
    catchrate: 120,
    damage_taken: 0
})

const caterpie = new Pokemon({
    name: "Caterpie",
    hp: {
        base: 45,
        max: 45,
        current: 45
    },
    experience: {
        base: 39,
        total: 0
    },
    attack: {
        base: 30,
        current: 30,
        effective: 30,
        stage: 0
    },
    defense: {
        base: 35,
        current: 35,
        effective: 35,
        stage: 0
    },
    sp_atk: {
        base: 20,
        current: 20,
        effective: 20,
        stage: 0
    },
    sp_def: {
        base: 20,
        current: 20,
        effective: 20,
        stage: 0
    },
    speed: {
        base: 45,
        current: 45,
        effective: 45,
        stage: 0
    },
    evolution_level: 7,
    evolution: metapod,
    type: ["Bug"],
    attacks: [attacks.Tackle],
    learnable_moves: [attacks.Gust, attacks.Quick_Attack],
    // gust
    level: 1,
    image: ["./assets/img/caterpie-back.gif", "./assets/img/caterpie-front.gif"],
    size: "small",
    status: "none",
    catchrate: 255,
    damage_taken: 0
})



let allPokemons = [charmander, charmeleon, charizard, bulbasaur, ivysaur, venusaur, squirtle, wartortle, blastoise, pidgey, pidgeotto, pidgeot, rattata, raticate, nidoran, nidorina, nidoqueen, caterpie, metapod, butterfree]

