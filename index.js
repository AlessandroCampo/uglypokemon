const canvas = document.querySelector("canvas")
const c = canvas.getContext("2d")



canvas.width = 1920
canvas.height = 1080
const offset = {
    x: -100,
    y: -450
}


// GET HTML ELEMENTS

const r = document.querySelector(':root');
const battleHUD = document.getElementById("battle-HUD")
const textbox = document.getElementById("textbox")
const menu = document.getElementById("menu")
const menu_close_button = document.getElementById("close-button")
const menu_team_button = document.getElementById("team-button")
const menu_backpack_button = document.getElementById("backpack-button")
const textcontaienr = document.getElementById("text-container")
const move1 = document.getElementById("move1")
const move2 = document.getElementById("move2")
const move3 = document.getElementById("move3")
const move4 = document.getElementById("move4")
let bench_slots = document.querySelectorAll("#bench span")
let bench_imgs = document.querySelectorAll("#bench img")
let pokemon1 = document.getElementById("pokemon-1")
let pokemon2 = document.getElementById("pokemon-2")
let pokemon3 = document.getElementById("pokemon-3")
let pokemon4 = document.getElementById("pokemon-4")
const battle_dialogue = document.getElementById("battle-dialogue")
const battle_interface = document.getElementById("battle-interface")
const myBar = document.getElementById("my-bar")
const enemyBar = document.getElementById("enemy-bar")
let attacktype = document.querySelector("#attack-type span")
let attacktype_img = document.querySelector("#attack-type img")
const enemyStatus = document.querySelector("#enemy-bar .progress .status")
const myStatus = document.querySelector("#my-bar .progress .status")
const myAttackPP = document.getElementById("attack-PP")
const enemyHPBar = document.getElementById("enemy-hp")
const myHPBar = document.getElementById("my-hp")
const enemyPoke = document.getElementById("enemyPoke")
const enemyPokeBox = document.getElementById("enemyPokeBox")
const myPokeBox = document.getElementById("myPokeBox")
const myPoke = document.getElementById("myPoke")
const myPokeNameInfo = document.getElementById("my-name")
const myPokeLevelInfo = document.getElementById("my-level")
const myMovePPInfo = document.getElementById("attack-PP")
const myMoveTypeInfo = document.getElementById("attack-type")
const enemyPokeNameInfo = document.getElementById("enemy-name")
const enemyPokeLevelInfo = document.getElementById("enemy-level")
const myHpInfo = document.getElementById("my-hp-num")
const enemyHpInfo = document.getElementById("enemy-hp-num")
const fight_button = document.getElementById("fight-button")
const run_button = document.getElementById("run-button")
const switch_button = document.getElementById("switch-button")
const tool_button = document.getElementById("tool-button")
const battle_options_panel = document.getElementById("battle-options")
const squad_container = document.getElementById("squad-container")
const bench_slot_0 = document.getElementById("bench-slot-0")
const bench_slot_1 = document.getElementById("bench-slot-1")
const bench_slot_2 = document.getElementById("bench-slot-2")
const bench_slot_3 = document.getElementById("bench-slot-3")
const active_slot = document.getElementById("active-slot")
let all_slots = [bench_slot_0, bench_slot_1, bench_slot_2, bench_slot_3]
let myPokeballs = 0


let mySquad = []
let activePokemon
let oppoPokemon = rattata
let lead_pokemon = activePokemon

textbox.style.display = "block"
textcontaienr.style.display = "flex"
textbox.innerText = "Welcome to the game! Make sure to find a Pokèmon before heading into battle. Professor Oak may be able to hep you..."



const myBench = document.getElementById("bench")
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// BACKGROUND IMAGES
const mapImage = new Image()
mapImage.src = "./assets/img/start_town.png"
mapImage.id = "start_town"
const batImage = new Image()
batImage.src = "./assets/img/battlebackground.png"
batImage.width = canvas.width
batImage.height = canvas.height

// ACTIVE AND OPPO POKEMON VARS
let wildPokemons = [pidgey, nidoran, rattata, caterpie]




//CHARACTER IMAGES
const playerDownImage = new Image()
playerDownImage.src = "./assets/img/main-walkdown.png"
playerDownImage.id = "player_down_image"
const playerUpImage = new Image()
playerUpImage.src = "./assets/img/main-walkup.png"
playerUpImage.id = "player_up_image"
const playerRightImage = new Image()
playerRightImage.src = "./assets/img/main-walkright.png"
playerRightImage.id = "player_right_image"
const playerLeftImage = new Image()
playerLeftImage.src = "./assets/img/main-walkleft.png"
playerLeftImage.id = "player_left_image"
const female_npc_down = new Image()
female_npc_down.src = "./assets/img/female-walkdown.png"
const professor_npc_down = new Image()
professor_npc_down.src = "./assets/img/professor_walkdown.png"
const female2_npc_down = new Image()
female2_npc_down.src = "./assets/img/female2-walkdown.png"
const portrait = document.getElementById("portrait")
const nurse_npc_down = new Image()
nurse_npc_down.src = "./assets/img/nurse-walkdown.png"
const merchant_npc_down = new Image()
merchant_npc_down.src = "./assets/img/merchant-walkdown.png"


// POKEMON IMAGES 

const charmenderBackImage = new Image()
charmenderBackImage.src = "./assets/img/charmender-back.gif"
const dragonite = new Image()
dragonite.src = "./assets/img/dragonite.png"





let velocity = 20
let charmender = true




// SPRITE CLASSES

class Sprite {
    constructor({ position, image, frames, sprites, quote, portrait, question, name, event, scale, moving }) {
        this.position = position
        this.image = image
        this.frames = frames
        this.image.onload = () => {
            this.width = this.image.width / this.frames.max
            this.height = this.image.height
        }
        this.moving = moving
        this.sprites = sprites
        this.quote = quote
        this.portrait = portrait
        this.question = question
        this.name = name
        this.event = event
        this.scale = scale

    }

    draw() {
        // c.drawImage(this.image, this.position.x, this.position.y)
        c.drawImage(this.image,
            this.frames.val * this.width,
            0,
            this.image.width / this.frames.max,
            this.image.height,
            this.position.x,
            this.position.y,
            this.image.width / this.frames.max * this.scale,
            this.image.height * this.scale)



        if (this.moving) {
            if (this.frames.max > 1) {
                this.frames.elapsed++

            }



            if (this.frames.elapsed % 10 === 0) {
                if (this.frames.val < this.frames.max - 1) {
                    this.frames.val++
                }
                else {
                    this.frames.val = 0
                }
            }
        }

    }

}


// BACKGROUND CLASS

const background = new Sprite({
    position: {
        x: offset.x,
        y: offset.y
    },

    image: mapImage,

    frames: {
        max: 1,
        val: 0,
        elapsed: 0
    },

    scale: 1


})





function drawBattleBG() {
    c.drawImage(batImage, 0, -180, canvas.width, canvas.height)
}

// CHARACTER SPRITES

const player = new Sprite({
    position: {
        x: 780,
        y: 680
    },

    image: playerDownImage,


    frames: {
        max: 4,
        val: 0,
        elapsed: 0
    },

    scale: 1
})



const female_npc = new Sprite({
    position: {
        x: 450,
        y: 630
    },

    image: female_npc_down,
    moving: false,


    frames: {
        max: 4,
        val: 0,
        elapsed: 0
    },

    scale: 1,
    quote: "Sofy: Hi!",
    portrait: "./assets/img/female_npc.png",
    question: false,
    name: "sofy"
})

const nurse_npc = new Sprite({
    position: {
        x: 600,
        y: 1100
    },

    image: nurse_npc_down,
    moving: false,


    frames: {
        max: 1,
        val: 0,
        elapsed: 0
    },

    scale: 1,
    quote: "Nurse Joy: Hi! Do you want me to heal your Pokèmons? [Y = Yes, N = No]",
    portrait: "./assets/img/nurse_npc.png",
    question: true,
    name: "Joy",
    event: () => {
        textbox.innerText = "I healed all of your Pokèmons!"
        activePokemon.damage_taken = 0
        mySquad.forEach((pokemom) => {
            pokemon.damage_taken = 0
        })
        calcStats()
    }
})

const merchant_npc = new Sprite({
    position: {
        x: 900,
        y: 1100
    },

    image: merchant_npc_down,
    moving: false,


    frames: {
        max: 1,
        val: 0,
        elapsed: 0
    },

    scale: 1,
    quote: "Merchant Frank: Hi! Do you want to buy a Pokèball for 20$? [Y = Yes, N = No]",
    portrait: "./assets/img/merchant-walkdown.png",
    question: true,
    name: "Frank",
    event: () => {
        textbox.innerText = "Thank you, come again if you need more!"
        myPokeballs++
    }
})


const professor_npc = new Sprite({
    position: {
        x: 2000,
        y: 1220
    },

    image: professor_npc_down,
    moving: false,


    frames: {
        max: 4,
        val: 0,
        elapsed: 0
    },

    scale: 1,

    quote: "Yo, do you want a Pokèmon? [Y = Yes, N = No]",
    portrait: "./assets/img/professor_npc.png",
    question: true,
    name: "prof",
    event: () => {
        if (activePokemon == undefined) {
            textbox.innerText = "What Pokèmon do you want?"
            let charmIMG = new Image()
            charmIMG.src = "./assets/img/charmander-front.gif"
            let bulbasaurIMG = new Image()
            bulbasaurIMG.src = "./assets/img/bulbasaur-front.gif"
            let squirtleIMG = new Image()
            squirtleIMG.src = "./assets/img/squirtle-front.gif"
            let div = document.createElement("div")
            div.appendChild(charmIMG)
            div.appendChild(bulbasaurIMG)
            div.appendChild(squirtleIMG)
            textbox.appendChild(div)
            charmIMG.addEventListener("click", () => {
                lead_pokemon = charmander
                activePokemon = charmander
                textbox.innerText = "So you chose Charmander, great choice!"
            })
            bulbasaurIMG.addEventListener("click", () => {
                activePokemon = bulbasaur
                lead_pokemon = bulbasaur
                textbox.innerText = "So you chose Bulbasaur, great choice!"
            })

            squirtleIMG.addEventListener("click", () => {
                activePokemon = squirtle
                lead_pokemon = squirtle
                textbox.innerText = "So you chose Squirtle, great choice!"
            })


        }

    }

})






let characters = [female_npc, professor_npc, nurse_npc, merchant_npc]

// COLLISIONS

const collisionMap = []
const battleZonesMap = []

for (let i = 0; i < collisions.length; i += 38) {
    collisionMap.push(collisions.slice(i, i + 38))
}

for (let i = 0; i < battleZonesData.length; i += 38) {
    battleZonesMap.push(battleZonesData.slice(i, i + 38))
}



class Boundary {
    static width = 80
    static height = 80
    constructor({ position }) {
        this.position = position
        this.width = 80
        this.height = 80
    }

    draw() {
        c.fillStyle = "rgba(0, 255, 0, 0.0)";
        c.fillRect(this.position.x, this.position.y, this.width, this.height)

    }
}



const boundaries = []
const battleZones = []

collisionMap.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol == 55) {
            boundaries.push(new Boundary({
                position: {
                    x: j * Boundary.width + offset.x,
                    y: i * Boundary.height + offset.y
                }
            }))


        }

    })
})

battleZonesMap.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol == 146) {
            battleZones.push(new Boundary({
                position: {
                    x: j * Boundary.width + offset.x,
                    y: i * Boundary.height + offset.y
                }
            }))


        }


    })
})






// KEY HANDLER

let lastKey = ""
const keys = {
    ArrowUp: {
        pressed: false
    },

    ArrowDown: {
        pressed: false
    },

    ArrowLeft: {
        pressed: false
    },

    ArrowRight: {
        pressed: false
    },

    k: {
        pressed: false
    },
    m: {
        pressed: false
    }


}
window.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "ArrowUp":
            keys.ArrowUp.pressed = true
            lastKey = "ArrowUp"
            break

        case "ArrowDown":
            keys.ArrowDown.pressed = true
            lastKey = "ArrowDown"
            break

        case "ArrowLeft":
            keys.ArrowLeft.pressed = true
            lastKey = "ArrowLeft"
            break

        case "ArrowRight":
            keys.ArrowRight.pressed = true
            lastKey = "ArrowRight"
            break

        case "k":
            keys.k.pressed = true
            lastKey = "k"
            break
        case "m":
            keys.m.pressed = true
            lastKey = "m"
            break


    }
})

window.addEventListener("keyup", (e) => {
    switch (e.key) {
        case "ArrowUp":
            keys.ArrowUp.pressed = false
            break

        case "ArrowDown":
            keys.ArrowDown.pressed = false
            break

        case "ArrowLeft":
            keys.ArrowLeft.pressed = false
            break

        case "ArrowRight":
            keys.ArrowRight.pressed = false
            break

        case "k":
            keys.k.pressed = false
            break
        case "m":
            keys.m.pressed = false
            break

    }
})

// COLLISIONS FUCNTION

function rectangularCollision({ rectangle1, rectangle2 }) {
    return (
        (rectangle1.position.x) + (rectangle1.width) >= rectangle2.position.x
        && (rectangle1.position.x) <= rectangle2.position.x + rectangle2.width
        && (rectangle1.position.y) <= rectangle2.position.y + rectangle2.height
        && (rectangle1.position.y) + rectangle1.height >= rectangle2.position.y
    )

}

//TEXTBOX CLEAR


function clearTextbox() {
    console.log("cancelling")
    squad_container.style.display = "none"
    menu.style.display = "none"
    textbox.innerText = ""
    textcontaienr.style.display = "none"
    portrait.src = ""
}

// TEAM MENU 

function updateActiveSlot() {
    let pkmnimg = new Image()
    let description = document.createElement("p")
    let hpbar = document.createElement("progress")
    pkmnimg.src = `./assets/img/${activePokemon.name}-front.gif`
    pkmnimg.className = "active-slot-img"
    description.innerText = `${activePokemon.name} LV.${activePokemon.level}`
    description.className = "active-description"
    hpbar.setAttribute("max", activePokemon.hp.max)
    hpbar.setAttribute("min", 0)
    hpbar.setAttribute("value", activePokemon.hp.current)
    hpbar.id = "progress-active"
    active_slot.prepend(description)
    active_slot.prepend(pkmnimg)
    active_slot.appendChild(hpbar)
    if (hpbar.value <= ((activePokemon.hp.max * 60) / 100) && hpbar.value > ((activePokemon.hp.max * 25) / 100)) {
        r.style.setProperty('--progress-color-active-slot', 'yellow');
    }

    else if (hpbar.value <= ((activePokemon.hp.max * 25) / 100)) {
        r.style.setProperty('--progress-color-active-slot', 'red');
    }

    else if (hpbar.value > ((activePokemon.hp.max * 60) / 100)) {
        r.style.setProperty('--progress-color-active-slot', 'green');
    }

    if (hpbar.value == 0) {
        pkmnimg.style.filter = "brightness(30%)"
    }
}

function updateSquadSlots() {
    console.log("prepping battle")
    let lead_pokemon_index = mySquad.indexOf(lead_pokemon)
    let switched_out_pokemon = activePokemon
    activePokemon = lead_pokemon
    if (lead_pokemon_index !== -1) {
        mySquad.splice(lead_pokemon_index)
        mySquad.push(switched_out_pokemon)
    }

    clearBenchSlots()
    updateBenchSlots()
    clearActiveSlot()
    updateActiveSlot()
}


function updateBenchSlots() {
    if (mySquad.lenght == 0) {
        return
    }
    for (let i = 0; i < mySquad.length; i++) {
        let pkmnimg = new Image()
        let description = document.createElement("p")
        let hpbar = document.createElement("progress")
        hpbar.className = "bench-hp"
        description.innerText = `${mySquad[i].name} LV.${mySquad[i].level}`
        description.className = "bench-description"
        pkmnimg.src = `./assets/img/${mySquad[i].name}-front.gif`
        pkmnimg.className = "bench-img"
        hpbar.setAttribute("max", mySquad[i].hp.max)
        hpbar.setAttribute("min", 0)
        hpbar.setAttribute("value", mySquad[i].hp.current)
        hpbar.className = `progress-${i}`
        hpbar.classList.add("bench-progress")
        all_slots[i].prepend(description)
        all_slots[i].prepend(pkmnimg)
        all_slots[i].appendChild(hpbar)
        textbox.innerText = "Do you want to swap your active Pokèmon?"
        pkmnimg.addEventListener("click", () => {
            mySquad.push(activePokemon)
            activePokemon = mySquad[i]
            lead_pokemon = activePokemon
            mySquad.splice(i, 1)
            console.log(activePokemon)
            updateSquadSlots()
        })
        if (hpbar.value <= ((mySquad[i].hp.max * 60) / 100) && hpbar.value > ((mySquad[i].hp.max * 25) / 100)) {
            r.style.setProperty('--progress-color-bench-slot-' + i, 'yellow');
        }

        else if (hpbar.value <= ((mySquad[i].hp.max * 25) / 100)) {
            r.style.setProperty('--progress-color-bench-slot-' + i, 'red');
        }

        else if (hpbar.value > ((mySquad[i].hp.max * 60) / 100)) {
            r.style.setProperty('--progress-color-bench-slot-' + i, 'green');
        }

        if (hpbar.value == 0) {
            pkmnimg.style.filter = "brightness(30%)"
        }
    }
}

function clearActiveSlot() {
    let deleted_img = document.querySelector(".active-slot-img")
    let hpbar = document.getElementById("progress-active")
    let description = document.querySelector(".active-description")
    if (deleted_img !== null) {
        active_slot.removeChild(deleted_img)
    }
    if (hpbar !== null) {
        active_slot.removeChild(hpbar)
    }
    if (description !== null) {
        active_slot.removeChild(description)
    }


    console.log(deleted_img)
}

function clearBenchSlots() {
    let deleted_imgs = document.querySelectorAll(".bench-img")
    let hpbars = document.querySelectorAll(".bench-progress")
    let descriptions = document.querySelectorAll(".bench-description")
    deleted_imgs.forEach((img) => {
        if (img !== null) {
            img.remove()
        }

    })
    hpbars.forEach((bar) => {
        if (bar !== null) {
            bar.remove()
        }

    })
    descriptions.forEach((text) => {
        if (text !== null) {
            text.remove()
        }

    })
}













//* ANIMATION LOOP //*
let movables = [background, ...boundaries, ...characters, ...battleZones]

const battle = {
    initiated: false
}

let animationID
function animate() {
    // window.requestAnimationFrame(animate)
    animationID = requestAnimationFrame(animate)

    background.draw()
    boundaries.forEach((block) => {
        block.draw()
    })
    battleZones.forEach((zone) => {
        zone.draw()
    })

    player.draw()
    characters.forEach((pg => {
        pg.draw()
    }))

    //Menu handler

    function showBench() {
        if (activePokemon == null) {
            textbox.innerText = "Looks like you don't have any Pokèmons yet, you should head to the lab and talk to the Professor"
            return
        }
        menu_team_button.removeEventListener("click", showBench)
        clearActiveSlot()
        clearBenchSlots()
        updateActiveSlot()
        updateBenchSlots()
        squad_container.style.display = "flex"
    }


    if (keys.m.pressed && lastKey == "m") {
        if (menu.style.display == "none") {
            menu.style.display = "block"
            textcontaienr.style.display = "flex"
            textbox.innerText = "Che azione vuoi eseguire nel menu?"
            menu_close_button.addEventListener("click", () => {
                menu.style.display = "none"
                squad_container.style.display = "none"
                clearTextbox()
            })
            menu_backpack_button.addEventListener("click", () => {
                textbox.innerText = "I didn't code the backpack quite yet sorry!"
            })
            menu_team_button.addEventListener("click", showBench)
        }

    }










    // Directions Handler

    if (battle.initiated) {
        player.moving = false
        window.cancelAnimationFrame(animationID)
        return
    }


    //BATTLEZONE CHECK 



    if (keys.ArrowUp.pressed || keys.ArrowDown.pressed || keys.ArrowLeft.pressed || keys.ArrowRight.pressed) {
        // check battlezones collisions 
        for (let i = 0; i < battleZones.length; i++) {
            const zone = battleZones[i]
            let fightingChance = 0.01
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: zone
                })) {

            }


            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: zone
                }) &&

                Math.random() < fightingChance
            ) {
                battle.initiated = true


                let randomWildPokemon = wildPokemons[Math.floor(Math.random() * wildPokemons.length)]
                oppoPokemon = randomWildPokemon
                if (activePokemon !== undefined) {
                    prepBattle()
                }

                else {
                    textcontaienr.style.display = "flex"
                    textbox.innerText = "Don't tell me I didn't warn you... an active Pokèmon assaulted you while you had no Pokèmons to defend you, see you at the start!"
                    setTimeout(() => {
                        location.reload()
                    }, 2000)
                    return
                }

                gsap.to("#htmlcanvas", {
                    opacity: 0,
                    repeat: 4,
                    yoyo: true,
                    duration: 0.4,
                    onComplete() {
                        gsap.to("#htmlcanvas", {
                            opacity: 0,
                            onComplete() {
                                gsap.to("#htmlcanvas", {
                                    opacity: 1
                                })
                                animateBattle()
                                battle_options_panel.style.display = "none"
                                battleHUD.style.display = "block"
                                battle_dialogue.style.display = "flex"
                                battle_dialogue.innerText = `Wild ${oppoPokemon.name} appears!`
                                setTimeout(() => {
                                    resetBattleOptions()
                                }, 1200)


                            }
                        })
                        // new animation LOOP



                    }
                })
                break

            }
        }
    }

    player.moving = false
    let moving = true

    if (keys.ArrowUp.pressed && lastKey == "ArrowUp") {
        player.moving = true;
        player.image = playerUpImage
        clearTextbox()


        //check solid collisions

        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {
                        ...boundary,
                        position: {
                            x: boundary.position.x,
                            y: boundary.position.y + velocity
                        }
                    }
                })
            ) {
                moving = false
                player.moving = false
                break
            }
        }




        if (moving) {
            movables.forEach((movable) => {
                movable.position.y += velocity
            })

        }

    }






    if (keys.ArrowDown.pressed && lastKey == "ArrowDown") {
        player.moving = true;
        player.image = playerDownImage
        clearTextbox()


        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {
                        ...boundary,
                        position: {
                            x: boundary.position.x,
                            y: boundary.position.y - velocity
                        }
                    }
                })
            ) {
                moving = false
                player.moving = false
                break
            }
        }


        if (moving) {
            movables.forEach((movable) => {
                movable.position.y -= velocity
            })
        }



    }

    if (keys.ArrowRight.pressed && lastKey == "ArrowRight") {
        player.moving = true;
        player.image = playerRightImage
        clearTextbox()


        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {
                        ...boundary,
                        position: {
                            x: boundary.position.x - velocity,
                            y: boundary.position.y
                        }
                    }
                })
            ) {
                moving = false
                player.moving = false
                break
            }
        }


        if (moving) {
            movables.forEach((movable) => {
                movable.position.x -= velocity
            })
        }


    }

    if (keys.ArrowLeft.pressed && lastKey == "ArrowLeft") {
        player.moving = true;
        player.image = playerLeftImage
        clearTextbox()
        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {
                        ...boundary,
                        position: {
                            x: boundary.position.x + velocity,
                            y: boundary.position.y
                        }
                    }
                })
            ) {
                moving = false
                player.moving = false
                break
            }
        }







        if (moving) {
            movables.forEach((movable) => {
                movable.position.x += velocity
            })
        }


    }

    // NPC Interaction



    for (let i = 0; i < characters.length; i++) {
        const npc = characters[i]
        if (
            rectangularCollision({
                rectangle1: player,
                rectangle2: npc
            })
        ) {


            if (keys.k.pressed && lastKey == "k") {
                checkNPC()
                textbox.innerText = npc.quote
                portrait.style.display = "block"
                portrait.src = npc.portrait
                window.addEventListener("keydown", (e) => {
                    if (npc.question) {
                        if (e.key == "y") {
                            npc.event()
                        }
                        else if (e.key == "n") {
                            textbox.innerText = "As you wish, come back later if you change ur mind!"
                        }
                    }
                })
            }






            else if (lastKey !== "k") {
                textcontaienr.style.display = "flex"
                textbox.innerText = "press k to talk"


            }



        }



        function checkNPC() {
            if (npc.name == "prof" && activePokemon !== undefined) {
                professor_npc.quote = "I already gave u the pokemon, you dickhead"
                professor_npc.question = false
            }
        }

    }
}



const buttons = document.querySelectorAll("#attacks button")
function updateHUD() {
    buttons.forEach((button) => {
        button.removeEventListener("click", moveInfoUpdate)
    })
    for (i = 0; i < buttons.length; i++) {
        const button = buttons[i]
        button.innerText = "-"
        button.removeEventListener("click", attack)
    }
    for (i = 0; i < activePokemon.attacks.length; i++) {
        const button = buttons[i]
        button.innerText = "-"
        button.removeEventListener("click", attack)
        button.addEventListener("click", attack)
        button.innerText = activePokemon.attacks[i].name
        button.removeEventListener("mouseover", moveInfoUpdate)
        button.addEventListener("mouseover", moveInfoUpdate)

        function moveInfoUpdate() {
            let selected_move = attacks[event.target.innerText]
            attacktype.innerText = selected_move.type
            attacktype_img.src = `./assets/img/${selected_move.type}.png`
            myAttackPP.innerText = `PP:${selected_move.pp.current}/${selected_move.pp.max}`
        }
    }

    myAttackPP.innerText = `PP:${activePokemon.attacks[0].pp.current}/${activePokemon.attacks[0].pp.max}`
    attacktype.innerText = activePokemon.attacks[0].type
    attacktype_img.src = `./assets/img/${activePokemon.attacks[0].type}.png`
    myPokeLevelInfo.innerText = `LV.${activePokemon.level}`
    myPokeNameInfo.innerText = activePokemon.name
    enemyPokeLevelInfo.innerText = `LV.${oppoPokemon.level}`
    enemyPokeNameInfo.innerText = oppoPokemon.name
    myHpInfo.innerText = `${activePokemon.hp.current}/${activePokemon.hp.max}`
    enemyHpInfo.innerText = `${oppoPokemon.hp.current}/${oppoPokemon.hp.max}`
    myHPBar.setAttribute("max", activePokemon.hp.max)
    myHPBar.setAttribute("value", activePokemon.hp.current)
    enemyHPBar.setAttribute("max", oppoPokemon.hp.max)

}






battleHUD.style.display = "none"
let animateBattleID
function animateBattle() {
    animateBattleID = window.requestAnimationFrame(animateBattle)
    drawBattleBG()
}

let selected_move
let ally_already_attacked = false
let enemy_already_attacked = false
let enemy_flinch = false
let ally_flinch = false
let attack_name
function attack() {
    attack_name = event.target.innerText
    ally_already_attacked = false
    enemy_already_attacked = false

    if (activePokemon.status == "paralyzed") {
        activePokemon.speed.effective = activePokemon.speed.current / 2
    }

    if (oppoPokemon.status == "paralyzed") {
        oppoPokemon.speed.effective = oppoPokemon.speed.current / 2
    }


    if (activePokemon.speed.effective > oppoPokemon.speed.effective) {
        allyAttack()
    }

    else {
        enemyAttack()
    }
}

let mySleepCounter = 0
let myTurnsTillWakeup = Math.floor(Math.random() * 3) + 1
let enemySleepCounter = 0
let enemyTurnsTillWakeup = Math.floor(Math.random() * 3) + 1

let myConfusion = false
let myConfusionCounter = 0
let myTurnsTillConfusion = randomIntFromInterval(2, 4) + 1
let enemyConfusion = false
let enemyConfusionCounter = 0
let enemyTurnsTillConfusion = randomIntFromInterval(2, 4) + 1

function allyAttack() {
    let randomProbability = Math.floor(Math.random() * 100)
    selected_move = attacks[attack_name]
    ally_already_attacked = true
    if (myConfusion == true) {
        myConfusionCounter++
    }

    if (activePokemon.status == "paralyzed" && randomProbability <= 25) {
        myParalysis()
        battle_dialogue.style.display = "flex"
        battle_dialogue.innerText = `${activePokemon.name} is paralyzed and cannot attack!`
        if (enemy_already_attacked == false) {
            setTimeout(() => {
                enemyAttack()
            }, 1500)
            return
        }

        else {
            setTimeout(() => {
                endTurn()
            }, 1500)
            return
        }
    }

    if (ally_flinch == true) {
        ally_flinch = false
        battle_dialogue.style.display = "flex"
        battle_dialogue.innerText = `${activePokemon.name} flinched and won't attack!`
        if (enemy_already_attacked == false) {
            setTimeout(() => {
                enemyAttack()
            }, 1500)
            return
        }

        else {
            setTimeout(() => {
                endTurn()
            }, 1500)
            return
        }
    }

    if (activePokemon.status !== "asleep" && activePokemon.status !== "frozen") {
        battle_dialogue.style.display = "flex"
        battle_dialogue.innerText = `${activePokemon.name} uses ${selected_move.name}!`


        if (myConfusion == false) {
            selected_move.myAnimation()
        }
        else if (myConfusion == true && randomProbability > 66.5 && myConfusionCounter < myTurnsTillConfusion) {
            battle_dialogue.style.display = "flex"
            battle_dialogue.innerText = `${activePokemon.name} uses ${selected_move.name}, but he's so confused that he hits himself!`
            setTimeout(() => {
                selected_move.myConfusedAnimation()
                applyMyConfusionDamage()
            }, 500)

            if (enemy_already_attacked == false) {
                setTimeout(() => {
                    enemyAttack()
                }, 3000)
                return
            }

            else {
                setTimeout(() => {
                    endTurn()
                }, 1500)
                return
            }
        }

        else if (myConfusion == true && randomProbability < 66.5 && myConfusionCounter < myTurnsTillConfusion) {
            battle_dialogue.innerText = `${activePokemon.name} is still confused, but ${selected_move.name} hits the enemy regardless!`
            selected_move.myAnimation()
        }

        else if (myConfusion == true && myTurnsTillConfusion == myTurnsTillConfusion) {
            myConfusion = false
            battle_dialogue.innerText = `${activePokemon.name} is no longer confused and uses ${selected_move.name}`
            selected_move.myAnimation()
        }
    }
    if (activePokemon.status == "asleep" && mySleepCounter < myTurnsTillWakeup) {
        battle_dialogue.style.display = "flex"
        mySleep()
        mySleepCounter++
        battle_dialogue.innerText = `${activePokemon.name} is still asleep!`
        setTimeout(() => {
            enemyAttack()
        }, 1500)
        return
    }


    if (activePokemon.status == "frozen" && randomProbability < 80) {
        battle_dialogue.style.display = "flex"
        battle_dialogue.innerText = `${activePokemon.name} is frozen and cannot attack!`
        myFreeze()
        if (enemy_already_attacked == false) {
            setTimeout(() => {
                enemyAttack()
            }, 1500)
            return
        }

        else {
            setTimeout(() => {
                endTurn()
            }, 1500)
            return
        }

    }

    else if (activePokemon.status == "frozen" && randomProbability >= 80) {
        activePokemon.status = "none"
        battle_dialogue.style.display = "flex"
        battle_dialogue.innerText = `${activePokemon.name} thawed out and is ready to attack!`
        setTimeout(() => {
            battle_dialogue.innerText = `${activePokemon.name} uses ${selected_move.name}!`
            selected_move.myAnimation()
        }, 900)
    }


    selected_move.pp.current--
    myMovePPInfo.innerText = `PP:${selected_move.pp.current}/${selected_move.pp.max}`
    battle_dialogue.style.display = "flex"


    if (activePokemon.status == "asleep" && mySleepCounter == myTurnsTillWakeup) {
        activePokemon.status = "none"
        battle_dialogue.innerText = `${activePokemon.name} has waken up!`
        setTimeout(() => {
            battle_dialogue.innerText = `${activePokemon.name} uses ${selected_move.name}!`
            selected_move.myAnimation()
        }, 900)
    }

    if (randomProbability > selected_move.accuracy) {
        battle_dialogue.innerText = `${activePokemon.name} tried to use ${selected_move.name} but failed!`
        setTimeout(() => {
            enemyAttack()
        }, 1500)
        return
    }

}

let randomIndex
let enemyMove
let enemy_burn_nerf = false


function enemyAttack() {
    let randomProbability = Math.floor(Math.random() * 100)
    randomIndex = Math.floor(Math.random() * oppoPokemon.attacks.length)
    enemyMove = oppoPokemon.attacks[randomIndex]
    if (enemy_already_attacked == true) {
        return
    }
    enemy_already_attacked = true
    if (oppoPokemon.status == "paralyzed" && randomProbability <= 25) {
        enemyParalysis()
        battle_dialogue.style.display = "flex"
        battle_dialogue.innerText = `${oppoPokemon.name} is paralyzed and cannot attack!`
        if (allyAttack == false) {
            setTimeout(() => {
                allyAttack()
            }, 1500)
            return
        }

        else {
            setTimeout(() => {
                endTurn()
            }, 1500)
            return
        }

    }

    if (enemy_flinch == true) {
        enemy_flinch = false
        battle_dialogue.style.display = "flex"
        battle_dialogue.innerText = `${oppoPokemon.name} flinched and won't attack!`
        if (allyAttack == false) {
            setTimeout(() => {
                allyAttack()
            }, 1500)
            return
        }

        else {
            setTimeout(() => {
                endTurn()
            }, 1500)
            return
        }

    }

    if (oppoPokemon.status !== "asleep" && oppoPokemon.status !== "frozen") {
        battle_dialogue.innerText = `${oppoPokemon.name} uses ${enemyMove.name}!`

        if (enemyConfusion == false) {
            enemyMove.enemyAnimation()
        }

        else if (enemyConfusion == true && randomProbability > 66.5 && enemyConfusionCounter < enemyTurnsTillConfusion) {
            battle_dialogue.style.display = "flex"
            battle_dialogue.innerText = `${oppoPokemon.name} uses ${enemyMove.name}, but he's so confused that he hits himself!`
            setTimeout(() => {
                enemyMove.enemyConfusedAnimation()
                applyEnemyConfusionDamage()
            }, 500)

            if (ally_already_attacked == false) {
                setTimeout(() => {
                    myAttack()
                }, 3000)
                return
            }

            else {
                setTimeout(() => {
                    endTurn()
                }, 1500)
                return
            }
        }

        else if (enemyConfusion == true && randomProbability < 66.5 && enemyConfusionCounter < enemyTurnsTillConfusion) {
            battle_dialogue.innerText = `${oppoPokemon.name} is still confused, but ${enemyMove.name} hits the enemy regardless!`
            enemyMove.enemyAnimation()
        }

        else if (enemyConfusion == true && enemyTurnsTillConfusion == enemyTurnsTillConfusion) {
            enemyConfusion = false
            battle_dialogue.innerText = `${oppoPokemon.name} is no longer confused and uses ${enemyMove.name}`
            enemyMove.enemyAnimation()
        }


    }

    if (oppoPokemon.status == "asleep" && enemySleepCounter < enemyTurnsTillWakeup) {
        battle_dialogue.style.display = "flex"
        enemySleepCounter++
        enemySleep()
        battle_dialogue.innerText = `${oppoPokemon.name} is still asleep!`
        setTimeout(() => {
            if (ally_already_attacked == true) {
                setTimeout(() => {
                    endTurn()
                }, 1500)
            }

            else {
                setTimeout(allyAttack, 1800)
            }
        })
        return
    }


    if (oppoPokemon.status == "frozen" && randomProbability < 80) {
        enemyFreeze()

        battle_dialogue.style.display = "flex"
        battle_dialogue.innerText = `${oppoPokemon.name} is frozen and cannot attack!`
        if (ally_already_attacked == false) {
            setTimeout(() => {
                allyAttack()
            }, 1500)
            return
        }

        else {
            setTimeout(() => {
                endTurn()
            }, 2500)
            return
        }

    }

    else if (oppoPokemon.status == "frozen" && randomProbability >= 80) {

        oppoPokemon.status = "none"
        battle_dialogue.style.display = "flex"
        battle_dialogue.innerText = `${oppoPokemon.name} thawed out and is ready to attack!`
        setTimeout(() => {
            battle_dialogue.innerText = `${oppoPokemon.name} uses ${enemyMove.name}!`
            enemyMove.enemyAnimation()
        }, 900)
    }




    battle_dialogue.style.display = "flex"


    if (oppoPokemon.status == "asleep" && enemySleepCounter == enemyTurnsTillWakeup) {
        oppoPokemon.status = "none"
        battle_dialogue.innerText = `${oppoPokemon.name} has waken up!`
        setTimeout(() => {
            battle_dialogue.innerText = `${oppoPokemon.name} uses ${enemyMove.name}!`
            enemyMove.enemyAnimation()
        }, 900)
    }


    if (randomProbability > enemyMove.accuracy) {

        battle_dialogue.innerText = `${oppoPokemon.name} tried to use ${enemyMove.name} but failed!`
        //NOTE - removed timeout
        setTimeout(() => {
            resetBattleOptions()
        }, 1500)
        return
    }

    function applyDamageEnemy() {
        let pb = 1
        if (oppoPokemon.type.includes(enemyMove.type)) {
            pb = 1.5
        }
        let effectiveness = checkEffectiveness({
            move_type: enemyMove.type,
            target_type: activePokemon.type
        })


        let offensive_stat = oppoPokemon.attack.effective
        let defensive_stat = activePokemon.defense.effective

        if (enemyMove.category == "special") {
            offensive_stat = oppoPokemon.sp_atk.effective
            defensive_stat = activePokemon.sp_def.effective
        }

        if (oppoPokemon.status == "burned" && enemy_burn_nerf == false) {
            enemy_burn_nerf = true

            oppoPokemon.attack.effective = oppoPokemon.attack.effective / 2
        }

        let damage_equation = Math.floor
            ((((oppoPokemon.level * 2 / 5) + 2) * enemyMove.damage * (offensive_stat / defensive_stat) / 50) * pb * effectiveness + 2)

        activePokemon.hp.current = activePokemon.hp.current - damage_equation
        activePokemon.damage_taken = activePokemon.damage_taken + damage_equation

        if (enemyMove.category == "status") {
            damage_equation = 0
            let infleunced_stat
            let stage_multiplier
            if (enemyMove.target_stat == "attack") {
                if (enemyMove.effect == "decrease") {
                    infleunced_stat = activePokemon.attack
                }
                else if (enemyMove.effect == "increase") {
                    infleunced_stat = oppoPokemon.attack
                }


            }
            else if (enemyMove.target_stat == "defense") {
                if (enemyMove.effect == "decrease") {
                    infleunced_stat = activePokemon.defense
                }
                else if (enemyMove.effect == "increase") {
                    infleunced_stat = oppoPokemon.defense
                }
            }
            if (enemyMove.effect == "decrease") {
                infleunced_stat.stage = infleunced_stat.stage - enemyMove.stage_change
                if (infleunced_stat.stage < -6) {
                    infleunced_stat.stage = -6
                    battle_dialogue.innerText = `${activePokemon.name
                        }'s ${enemyMove.target_stat
                        } can't be decrease any further`
                }
                else if (enemyMove.stage_change == 1) {
                    battle_dialogue.innerText = `${activePokemon.name
                        }'s ${enemyMove.target_stat
                        } fell!`

                }

                else if (enemyMove.stage_change == 2) {
                    battle_dialogue.innerText = `${activePokemon.name
                        }'s ${enemyMove.target_stat
                        } harshly fell!`
                }

                else if (enemyMove.stage_change >= 3) {
                    battle_dialogue.innerText = `${activePokemon.name
                        }'s ${enemyMove.target_stat
                        } severely fell!`
                }

                stage_multiplier = (Math.abs(infleunced_stat.stage)) + 2

                infleunced_stat.effective = Math.floor((infleunced_stat.current * 2) / stage_multiplier)

            }

            else if (enemyMove.effect == "increase") {
                infleunced_stat.stage = infleunced_stat.stage + enemyMove.stage_change
                if (infleunced_stat.stage > 6) {
                    infleunced_stat.stage = 6
                    battle_dialogue.innerText = `${oppoPokemon.name
                        }'s ${enemyMove.target_stat
                        } can't be increased any further`
                }
                else if (enemyMove.stage_change == 1) {
                    battle_dialogue.innerText = `${oppoPokemon.name
                        }'s ${enemyMove.target_stat
                        } rose!`
                }

                else if (enemyMove.stage_change == 2) {
                    battle_dialogue.innerText = `${oppoPokemon.name
                        }'s ${enemyMove.target_stat
                        } sharply rose!`
                }

                else if (enemyMove.stage_change >= 3) {
                    battle_dialogue.innerText = `${oppoPokemon.name
                        }'s ${enemyMove.target_stat
                        } rose drastically!`
                }


                stage_multiplier = (Math.abs(infleunced_stat.stage)) + 2
                infleunced_stat.effective = Math.floor((infleunced_stat.current * 2) / stage_multiplier)

            }

        }


        gsap.to(myHPBar, {
            value: myHPBar.value - damage_equation,
            duration: 0.8,
            onComplete() {
                if (effectiveness == 2 && enemyMove.category !== "status") {
                    battle_dialogue.innerText = `${enemyMove.name} is super-effective!`
                }

                else if (effectiveness == 0.5 && enemyMove.category !== "status") {
                    battle_dialogue.innerText = `${enemyMove.name} is not very effective...`
                }

                else if (effectiveness == 0 && enemyMove.category !== "status") {
                    battle_dialogue.innerText = `${enemyMove.name} has no effect at all...`
                }

                else if (enemyMove.category !== "status") {
                    battle_dialogue.innerText = `The attack was succesful`
                }
                myHpInfo.innerText = `${myHPBar.value}/${activePokemon.hp.max}`
                //NOTE - TIMEOUT CANCELLED


                // if (ally_already_attacked == false) {
                //     setTimeout(() => {
                //         endEnemyTurn()
                //     }, 5200)
                // }

                updateMyHPbar()

                if (!myHPBar.value == 0 && ally_already_attacked == false) {
                    setTimeout(allyAttack, 1400)
                }

            }

        })
    }
    setTimeout(applyDamageEnemy, 2000)
}






function prepBattle() {
    console.log("prepping battle")
    let lead_pokemon_index = mySquad.indexOf(lead_pokemon)
    let switched_out_pokemon = activePokemon
    activePokemon = lead_pokemon
    if (lead_pokemon_index !== -1) {
        mySquad.splice(lead_pokemon_index)
        mySquad.push(switched_out_pokemon)
    }

    battle_dialogue.style.display = "none"
    enemyPokeBox.classList.remove("tailwhipAnimation")
    enemyPoke.style.display = "block"
    myPokeBox.style.opacity = "1"
    enemyPokeBox.style.opacity = "1"
    myPokeBox.style.bottom = "25%"
    enemyPokeBox.style.top = "22%"
    activePokemon.placeAlly()
    oppoPokemon.placeEnemy()

    console.log(lead_pokemon)
    if (activePokemon.level > 1) {
        oppoPokemon.level = activePokemon.level - Math.floor(Math.random() * 2)
        calcStats()
    }
    activePokemon.hp.current = activePokemon.hp.current - activePokemon.damage_taken
    console.log(activePokemon.hp.current)
    mySquad.forEach((pokemon) => {
        pokemon.hp.current = pokemon.hp.current - pokemon.damage_taken
        console.log(pokemon.hp.current)
    })

    enemyHPBar.value = oppoPokemon.hp.max
    myHPBar.value = activePokemon.hp.current

    updateHUD()

    r.style.setProperty('--progress-color-enemy', 'green');
    r.style.setProperty('--progress-color-my', 'green');
    updateMyHPbar()
}





function calcStats() {
    allPokemons.forEach((pokemon) => {
        pokemon.defense.current = Math.floor(((pokemon.defense.base * 2) * pokemon.level) / 100) + 5

        pokemon.attack.current = Math.floor(((pokemon.attack.base * 2) * pokemon.level) / 100) + 5


        pokemon.sp_def.current = Math.floor(((pokemon.sp_def.base * 2) * pokemon.level) / 100) + 5

        pokemon.speed.current = Math.floor(((pokemon.speed.base * 2) * pokemon.level) / 100) + 5

        pokemon.sp_atk.current = Math.floor(((pokemon.sp_atk.base * 2) * pokemon.level) / 100) + 5

        pokemon.hp.max = Math.floor(((pokemon.hp.base * 2) * pokemon.level) / 100) + pokemon.level + 10


        pokemon.hp.current = pokemon.hp.max
        pokemon.attack.effective = pokemon.attack.current
        pokemon.defense.effective = pokemon.defense.current
        pokemon.sp_atk.effective = pokemon.sp_atk.current
        pokemon.sp_def.effective = pokemon.sp_def.current
        pokemon.speed.effective = pokemon.speed.current
    })
}



// window.onload(animate())


// battleHUD.style.display = "block"
// battle_dialogue.style.display = "flex"
// battle_dialogue.innerText = `Wild ${oppoPokemon.name} appears!`
// prepBattle()
// animateBattle()
animate()


function evolve() {
    window.removeEventListener("click", evolve)
    window.addEventListener("click", endBattle)
    myPoke.setAttribute("src", `${activePokemon.image[1]}`)
    canvas.style.opacity = 0
    battle_dialogue.style.flex = "none"
    battle_dialogue.innerText = `${activePokemon.name} is evolving!`
    myBar.style.display = "none"
    enemyBar.style.display = "none"
    enemyPokeBox.style.display = "none"

    myPokeBox.style.bottom = "30%"
    myPokeBox.style.left = "50%"
    myPokeBox.style.transform = "translate(-50%, -50%)"
    gsap.to(myPoke, {
        filter: "brightness(500%)",
        repeat: 9,
        duration: 0.3,
        scale: 1.5,
        yoyo: true,
        onComplete() {
            myPoke.style.filter = "brightness(100%)"
            activePokemon = activePokemon.evolution
            myPoke.setAttribute("src", `${activePokemon.image[1]}`)
            battle_dialogue.innerText = `Congraulations! Your Pokèmon evolved into ${activePokemon.name}`

        }
    })
}



function checkEffectiveness({ move_type, target_type }) {
    if ((move_type == "Fire" && target_type.includes("Ice")) || (move_type == "Fire" && target_type.includes("Grass")) || (move_type == "Fire" && target_type.includes("Bug")) || (move_type == "Fire" && target_type.includes("Steel")))
        return (
            2
        )
    else if ((move_type == "Fire" && target_type.includes("Fire")) || (move_type == "Fire" && target_type.includes("Water")) || (move_type == "Fire" && target_type.includes("Rock")) || (move_type == "Fire" && target_type.includes("Dragon")))
        return (
            0.5
        )
    else if ((move_type == "Water" && target_type.includes("Fire")) || (move_type == "Water" && target_type.includes("Ground")) || (move_type == "Water" && target_type.includes("Rock")))
        return (
            2
        )

    else if ((move_type == "Water" && target_type.includes("Water")) || (move_type == "Water" && target_type.includes("Grass")) || (move_type == "Water" && target_type.includes("Dragon")))
        return (
            0.5
        )

    else if ((move_type == "Grass" && target_type.includes("Water")) || (move_type == "Grass" && target_type.includes("Ground")) || (move_type == "Grass" && target_type.includes("Rock")))
        return (
            2
        )

    else if ((move_type == "Grass" && target_type.includes("Fire")) || (move_type == "Grass" && target_type.includes("Grass")) || (move_type == "Grass" && target_type.includes("Poison")) || (move_type == "Grass" && target_type.includes("Flying")) || (move_type == "Grass" && target_type.includes("Bug")) || (move_type == "Grass" && target_type.includes("Dragon")) || (move_type == "Grass" && target_type.includes("Steel")))
        return (
            0.5
        )

    else if ((move_type == "Electric" && target_type.includes("Water")) || (move_type == "Electric" && target_type.includes("Flying")))
        return (
            2
        )

    else if ((move_type == "Electric" && target_type.includes("Electric")) || (move_type == "Electric" && target_type.includes("Grass")) || (move_type == "Electric" && target_type.includes("Dragon")))
        return (
            0.5
        )

    else if ((move_type == "Normal" && target_type.includes("Rock")) || (move_type == "Normal" && target_type.includes("Steel")))
        return (
            0.5
        )

    else if ((move_type == "Ice" && target_type.includes("Grass")) || (move_type == "Ice" && target_type.includes("Ground")) || (move_type == "Ice" && target_type.includes("Flying")) || (move_type == "Ice" && target_type.includes("Dragon")))
        return (
            2
        )

    else if ((move_type == "Ice" && target_type.includes("Fire")) || (move_type == "Ice" && target_type.includes("Water")) || (move_type == "Ice" && target_type.includes("Ice")) || (move_type == "Ice" && target_type.includes("Steel")))
        return (
            0.5
        )

    else if ((move_type == "Fighting" && target_type.includes("Normal")) || (move_type == "Fighting" && target_type.includes("Ice")) || (move_type == "Fighting" && target_type.includes("Dark")) || (move_type == "Fighting" && target_type.includes("Steel")) || (move_type == "Fighting" && target_type.includes("Rock")))
        return (
            2
        )

    else if ((move_type == "Fighting" && target_type.includes("Poison")) || (move_type == "Fighting" && target_type.includes("Flying")) || (move_type == "Fighting" && target_type.includes("Psychic")) || (move_type == "Fighting" && target_type.includes("Bug")) || (move_type == "Fighting" && target_type.includes("Fairy")))
        return (
            0.5
        )

    else if ((move_type == "Poison" && target_type.includes("Grass")) || (move_type == "Poison" && target_type.includes("Fairy")))
        return (
            2
        )

    else if ((move_type == "Poison" && target_type.includes("Poison")) || (move_type == "Poison" && target_type.includes("Bug")) || (move_type == "Poison" && target_type.includes("Rock")) || (move_type == "Poison" && target_type.includes("Ground")))
        return (
            0.5
        )

    else if ((move_type == "Ground" && target_type.includes("Fire")) || (move_type == "Ground" && target_type.includes("Electric")) || (move_type == "Ground" && target_type.includes("Poison")) || (move_type == "Ground" && target_type.includes("Rock")) || (move_type == "Ground" && target_type.includes("Steel")))
        return (
            2
        )


    else if ((move_type == "Ground" && target_type.includes("Grass")) || (move_type == "Ground" && target_type.includes("Bug")))
        return (
            0.5
        )

    else if ((move_type == "Flying" && target_type.includes("Grass")) || (move_type == "Flying" && target_type.includes("Fighting")) || (move_type == "Flying" && target_type.includes("Bug")))
        return (
            2
        )

    else if ((move_type == "Flying" && target_type.includes("Electric")) || (move_type == "Flying" && target_type.includes("Rock")) || (move_type == "Flying" && target_type.includes("Steel")))
        return (
            0.5
        )

    else if ((move_type == "Psychic" && target_type.includes("Poison")) || (move_type == "Psychic" && target_type.includes("Fighting")))
        return (
            2
        )

    else if ((move_type == "Psychic" && target_type.includes("Psychic")) || (move_type == "Psychic" && target_type.includes("Steel")))
        return (
            0.5
        )

    else if ((move_type == "Bug" && target_type.includes("Grass")) || (move_type == "Bug".includes("Psychic")) || (move_type == "Bug".includes("Dark")))
        return (
            2
        )

    else if ((move_type == "Bug" && target_type.includes("Fire")) || (move_type == "Bug" && target_type.includes("Fighting")) || (move_type == "Bug" && target_type.includes("Poison")) || (move_type == "Bug" && target_type.includes("Flying")) || (move_type == "Bug" && target_type.includes("Ghost")) || (move_type == "Bug" && target_type.includes("Steel")) || (move_type == "Bug" && target_type.includes("Fairy")))
        return (
            0.5
        )

    else if ((move_type == "Rock" && target_type.includes("Fire")) || (move_type == "Rock" && target_type.includes("Ice")) || (move_type == "Rock" && target_type.includes("Flying")) || (move_type == "Rock" && target_type.includes("Bug")))
        return (
            2
        )

    else if ((move_type == "Rock" && target_type.includes("Fighting")) || (move_type == "Rock" && target_type.includes("Ground")) || (move_type == "Rock" && target_type.includes("Steel")))
        return (
            0.5
        )

    else if ((move_type == "Ghost" && target_type.includes("Psychic")) || (move_type == "Ghost" && target_type.includes("Ghost")))
        return (
            2
        )
    else if ((move_type == "Ghost" && target_type.includes("Dark")))
        return (
            0.5
        )
    else if ((move_type == "Dragon" && target_type.includes("Dragon")))
        return (
            2
        )

    else if ((move_type == "Dragon" && target_type.includes("Steel")))
        return (
            0.5
        )
    else if ((move_type == "Dark" && target_type.includes("Psychic")) || (move_type == "Dark" && target_type.includes("Ghost")))
        return (
            2
        )

    else if ((move_type == "Dark" && target_type.includes("Dark")) || (move_type == "Dark" && target_type.includes("Poison")) || (move_type == "Dark" && target_type.includes("Fairy")))
        return (
            0.5
        )

    else if ((move_type == "Steel" && target_type.includes("Ice")) || (move_type == "Steel" && target_type.includes("Rock")) || (move_type == "Steel" && target_type.includes("Fairy")))
        return (
            2
        )

    else if ((move_type == "Steel" && target_type.includes("Fire")) || (move_type == "Steel" && target_type.includes("Water")) || (move_type == "Steel" && target_type.includes("Electric")) || (move_type == "Steel" && target_type.includes("Steel")))
        return (
            0.5
        )

    else if ((move_type == "Fairy" && target_type.includes("Fighting")) || (move_type == "Fairy" && target_type.includes("Ghost")) || (move_type == "Fairy" && target_type.includes("Dragon")))
        return (
            2
        )

    else if ((move_type == "Fairy" && target_type.includes("Fire")) || (move_type == "Fairy" && target_type.includes("Poison")) || (move_type == "Fairy" && target_type.includes("Steel")))
        return (
            0.5
        )

    else if ((move_type == "Ghost" && target_type.includes("Normal")) || (move_type == "Electric" && target_type.includes("Ground")) || (move_type == "Fighting" && target_type.includes("Ghost")) || (move_type == "Poison" && target_type.includes("Steel")) || (move_type == "Ground" && target_type.includes("Flying")) || (move_type == "Psychic" && target_type.includes("Dark")) || (move_type == "Normal" && target_type.includes("Ghost")) || (move_type == "Psychic" && target_type.includes("Dark")) || (move_type == "Dragon" && target_type.includes("Fairy")))
        return (
            0
        )
    else {
        return (1)
    }



}


function endTurn() {
    let enemy_burn_dmg = Math.floor((oppoPokemon.hp.max / 8))
    let my_burn_dmg = Math.floor((activePokemon.hp.max / 8))

    if (myHPBar.value == 0 && mySquad.length == 0 || enemyHPBar.value == 0) {
        return
    }


    if (activePokemon.status == "burned" && oppoPokemon.status == "none" || activePokemon.status == "burned" && oppoPokemon.status == "asleep" || activePokemon.status == "burned" && oppoPokemon.status == "paralyzed" || activePokemon.status == "burned" && oppoPokemon.status == "frozen") {
        battle_dialogue.innerText = `${activePokemon.name} suffers from burn!`
        myBurn()
        activePokemon.hp.current = activePokemon.hp.current - my_burn_dmg
        activePokemon.damage_taken = activePokemon.damage_taken + my_burn_dmg
        gsap.to(myHPBar, {
            value: myHPBar.value - my_burn_dmg,
            duration: 1,
            onComplete() {
                updateMyHPbar()
                if (myHPBar.value > 0) {
                    setTimeout(() => {
                        resetBattleOptions()
                    }, 1500)
                }
            }
        })
    }

    else if (activePokemon.status == "none" && oppoPokemon.status == "burned" || activePokemon.status == "asleep" && oppoPokemon.status == "burned" || activePokemon.status == "paralyzed" && oppoPokemon.status == "burned" || activePokemon.status == "frozen" && oppoPokemon.status == "burned") {
        battle_dialogue.innerText = `${oppoPokemon.name} suffers from burn!`
        enemyBurn()
        oppoPokemon.hp.current = oppoPokemon.hp.current - enemy_burn_dmg
        gsap.to(enemyHPBar, {
            value: enemyHPBar.value - enemy_burn_dmg,
            duration: 1,
            onComplete() {
                updateEnemyHPbar()
                if (enemyHPBar.value > 0 && myHPBar.value > 0) {
                    setTimeout(() => {
                        resetBattleOptions()
                    }, 1500)
                }
            }
        })
    }

    else if (activePokemon.status == "burned" && oppoPokemon.status == "burned") {

        battle_dialogue.innerText = `both ${oppoPokemon.name} and ${activePokemon.name} suffer from burn!`
        oppoPokemon.hp.current = oppoPokemon.hp.current - enemy_burn_dmg
        activePokemon.hp.current = activePokemon.hp.current - my_burn_dmg
        activePokemon.damage_taken = activePokemon.damage_taken + my_burn_dmg
        myBurn()
        enemyBurn()
        gsap.to(enemyHPBar, {
            value: enemyHPBar.value - enemy_burn_dmg,
            duration: 1
        })
        gsap.to(myHPBar, {
            value: myHPBar.value - my_burn_dmg,
            duration: 1,
            onComplete() {
                updateEnemyHPbar()
                updateMyHPbar()
                if (myHPBar.value > 0 && enemyHPBar.value > 0) {
                    setTimeout(() => {
                        resetBattleOptions()
                    }, 2400)
                }
            }
        })
    }

    else if (activePokemon.status == "poisoned" && oppoPokemon.status == "none" || activePokemon.status == "poisoned" && oppoPokemon.status == "asleep" || activePokemon.status == "poisoned" && oppoPokemon.status == "paralyzed" || activePokemon.status == "poisoned" && oppoPokemon.status == "frozen") {

        battle_dialogue.innerText = `${activePokemon.name} suffers from poison!`
        myPoison()
        activePokemon.hp.current = activePokemon.hp.current - my_burn_dmg
        activePokemon.damage_taken = activePokemon.damage_taken + my_burn_dmg
        gsap.to(myHPBar, {
            value: myHPBar.value - my_burn_dmg,
            duration: 1,
            onComplete() {
                updateMyHPbar()
                if (myHPBar.value > 0) {
                    setTimeout(() => {
                        resetBattleOptions()
                    }, 1500)
                }
            }
        })
    }

    else if (activePokemon.status == "none" && oppoPokemon.status == "poisoned" || activePokemon.status == "asleep" && oppoPokemon.status == "poisoned" || activePokemon.status == "paralyzed" && oppoPokemon.status == "poisoned" || activePokemon.status == "frozen" && oppoPokemon.status == "poisoned") {

        battle_dialogue.innerText = `${oppoPokemon.name} suffers from poison!`
        enemyPoison()
        oppoPokemon.hp.current = oppoPokemon.hp.current - enemy_burn_dmg
        gsap.to(enemyHPBar, {
            value: enemyHPBar.value - enemy_burn_dmg,
            duration: 1,
            onComplete() {
                updateEnemyHPbar()
                if (enemyHPBar.value > 0 && myHPBar.value > 0) {
                    setTimeout(() => {
                        resetBattleOptions()
                    }, 1500)
                }
            }
        })
    }

    else if (activePokemon.status == "poisoned" && oppoPokemon.status == "poisoned") {
        battle_dialogue.innerText = `both ${oppoPokemon.name} and ${activePokemon.name} suffer from posion!`
        oppoPokemon.hp.current = oppoPokemon.hp.current - enemy_burn_dmg
        activePokemon.hp.current = activePokemon.hp.current - my_burn_dmg
        activePokemon.damage_taken = activePokemon.damage_taken + my_burn_dmg
        myPoison()
        enemyPoison()
        gsap.to(enemyHPBar, {
            value: enemyHPBar.value - enemy_burn_dmg,
            duration: 1
        })
        gsap.to(myHPBar, {
            value: myHPBar.value - my_burn_dmg,
            duration: 1,
            onComplete() {
                updateEnemyHPbar()
                updateMyHPbar()
                if (myHPBar.value > 0 && enemyHPBar.value > 0) {
                    setTimeout(() => {

                        resetBattleOptions()
                    }, 2400)
                }
            }
        })
    }

    else if (activePokemon.status == "poisoned" && oppoPokemon.status == "burned") {
        battle_dialogue.innerText = `${oppoPokemon.name} suffers from burn while ${activePokemon.name} from posion!`
        oppoPokemon.hp.current = oppoPokemon.hp.current - enemy_burn_dmg
        activePokemon.hp.current = activePokemon.hp.current - my_burn_dmg
        activePokemon.damage_taken = activePokemon.damage_taken + my_burn_dmg
        myPoison()
        enemyBurn()
        gsap.to(enemyHPBar, {
            value: enemyHPBar.value - enemy_burn_dmg,
            duration: 1
        })
        gsap.to(myHPBar, {
            value: myHPBar.value - my_burn_dmg,
            duration: 1,
            onComplete() {
                updateEnemyHPbar()
                updateMyHPbar()
                if (myHPBar.value > 0 && enemyHPBar.value > 0) {
                    setTimeout(() => {

                        resetBattleOptions()
                    }, 2400)
                }
            }
        })
    }

    else if (activePokemon.status == "burned" && oppoPokemon.status == "poisoned") {
        battle_dialogue.innerText = `${oppoPokemon.name} suffers from poison while ${activePokemon.name} from burn!`
        oppoPokemon.hp.current = oppoPokemon.hp.current - enemy_burn_dmg
        activePokemon.hp.current = activePokemon.hp.current - my_burn_dmg
        activePokemon.damage_taken = activePokemon.damage_taken + my_burn_dmg
        enemyPoison()
        myBurn()
        gsap.to(enemyHPBar, {
            value: enemyHPBar.value - enemy_burn_dmg,
            duration: 1
        })
        gsap.to(myHPBar, {
            value: myHPBar.value - my_burn_dmg,
            duration: 1,
            onComplete() {
                updateEnemyHPbar()
                updateMyHPbar()
                if (myHPBar.value > 0 && enemyHPBar.value > 0) {
                    setTimeout(() => {
                        resetBattleOptions()
                    }, 2400)
                }
            }
        })
    }

    else {

        if (myHPBar.value > 0) {
            resetBattleOptions()
        }


    }

}

function updateMyHPbar() {
    myHpInfo.innerText = `${myHPBar.value}/${activePokemon.hp.max}`
    if (myHPBar.value <= ((activePokemon.hp.max * 60) / 100) && myHPBar.value > ((activePokemon.hp.max * 25) / 100)) {
        r.style.setProperty('--progress-color-my', 'yellow');
    }

    else if (myHPBar.value <= ((activePokemon.hp.max * 25) / 100)) {
        r.style.setProperty('--progress-color-my', 'red');
    }

    else if (myHPBar.value > ((activePokemon.hp.max * 60) / 100)) {
        r.style.setProperty('--progress-color-my', 'green');
    }

    if (myHPBar.value == 0) {
        allyKO()
        battle_dialogue.style.display = "flex"
        battle_dialogue.innerText = `${activePokemon.name} has been KO'D
        `
    }
}

function updateEnemyHPbar() {
    enemyHpInfo.innerText = `${enemyHPBar.value}/${oppoPokemon.hp.max}`
    if (enemyHPBar.value <= ((oppoPokemon.hp.max * 60) / 100) && enemyHPBar.value > ((oppoPokemon.hp.max * 25) / 100)) {
        r.style.setProperty('--progress-color-enemy', 'yellow');
    }

    else if (enemyHPBar.value <= ((oppoPokemon.hp.max * 25) / 100)) {
        r.style.setProperty('--progress-color-enemy', 'red');
    }

    else if (enemyHPBar.value > ((oppoPokemon.hp.max * 60) / 100)) {
        r.style.setProperty('--progress-color-enemy', 'green');
    }

    if (enemyHPBar.value == 0) {
        enemyKO()
        let xpForLevel = ((activePokemon.level + 1) * (activePokemon.level + 1) * (activePokemon.level + 1))
        let experienceGain = Math.floor((oppoPokemon.experience.base * oppoPokemon.level) / 7)
        activePokemon.experience.total += experienceGain
        battle_dialogue.style.display = "flex"
        battle_dialogue.innerText = `${oppoPokemon.name} has been KO'D
        and ${activePokemon.name} has gained ${experienceGain} xp points`
        if (activePokemon.experience.total > xpForLevel && activePokemon.level < 51) {
            activePokemon.level++
            battle_dialogue.innerText = `${oppoPokemon.name} has been KO'D
        and ${activePokemon.name} has reached level ${activePokemon.level} `

            if (activePokemon.level == 5) {
                activePokemon.attacks.push()
                battle_dialogue.innerText = `${oppoPokemon.name} has been KO'D
        and ${activePokemon.name} has reached level ${activePokemon.level}. ${activePokemon.name} has learned ${activePokemon.learnable_moves[1].name} `
            }

            else if (activePokemon.level == 15) {
                activePokemon.attacks.push(activePokemon.learnable_moves[2])
                battle_dialogue.innerText = `${oppoPokemon.name} has been KO'D
        and ${activePokemon.name} has reached level ${activePokemon.level}. ${activePokemon.name} has learned ${activePokemon.learnable_moves[2].name} `
            }


            calcStats()

        }
    }
}

function applyMyConfusionDamage() {
    let damage_equation = Math.floor
        ((((activePokemon.level * 2 / 5) + 2) * 40 * (activePokemon.attack.current / activePokemon.defense.current) / 50) + 2)
    activePokemon.hp.current = activePokemon.hp.current - damage_equation
    activePokemon.damage_taken = activePokemon.damage_taken + damage_equation
    gsap.to(myHPBar, {
        value: myHPBar.value - damage_equation,
        duration: 1,
        onComplete() {
            updateMyHPbar()
        }
    })
}

function applyEnemyConfusionDamage() {
    let damage_equation = Math.floor
        ((((oppoPokemon.level * 2 / 5) + 2) * 40 * (oppoPokemon.attack.current / oppoPokemon.defense.current) / 50) + 2)
    oppoPokemon.hp.current = oppoPokemon.hp.current - damage_equation
    gsap.to(enemyHPBar, {
        value: enemyHPBar.value - damage_equation,
        duration: 1,
        onComplete() {
            updateEnemyHPbar()
        }
    })
}


let kodPokemons = []

function switchPokemon() {
    activePokemon = mySquad[1]
    activePokemon.placeAlly()
    updateHUD()
    window.removeEventListener("click", switchPokemon)
}
// window.addEventListener("click", switchPokemon)


function setBattleOptions() {
    fight_button.addEventListener("click", chooseMove)
    run_button.addEventListener("click", run)
    switch_button.addEventListener("click", swap)
    tool_button.addEventListener("click", useTool)

}


function run() {
    run_button.removeEventListener("click", run)
    battle_options_panel.style.display = "none"
    battle_dialogue.style.display = "flex"
    battle_dialogue.innerText = "Better safe than sorry, you're trying to run away!"
    setTimeout(endBattle, 1000)
}

function chooseMove() {
    fight_button.removeEventListener("click", chooseMove)
    battle_options_panel.style.display = "none"

}

function swap() {
    let allPokemonKod = true
    for (i = 0; i < mySquad.length; i++) {
        if (mySquad[i].hp.current > 0) {
            allPokemonKod = false
        }
    }
    if (mySquad.length == 0 || allPokemonKod == true) {
        battle_options_panel.style.display = "none"
        battle_dialogue.style.display = "flex"
        battle_dialogue.innerText = `${activePokemon.name} is your only available Pokèmon...`
        setTimeout(resetBattleOptions, 900)
        return
    }
    ally_already_attacked = true
    enemy_already_attacked = false
    switch_button.removeEventListener("click", swap)

    updateBench()
}

function sendPokemon1() {
    let swapped_out_pokemon = activePokemon
    activePokemon = mySquad[0]
    swapAnimation()
    resetActivePokemon()
    mySquad.splice(0, 1)
    if (swapped_out_pokemon.hp.current > 0) {
        mySquad.splice(0, 0, swapped_out_pokemon)
    }
    else {
        kodPokemons.push(swapped_out_pokemon)
    }


}
function sendPokemon2() {
    let swapped_out_pokemon = activePokemon
    activePokemon = mySquad[1]
    swapAnimation()
    resetActivePokemon()
    mySquad.splice(1, 1)
    if (swapped_out_pokemon.hp.current > 0) {
        mySquad.splice(1, 0, swapped_out_pokemon)
    }
    else {
        kodPokemons.push(swapped_out_pokemon)
    }

}

function sendPokemon3() {
    let swapped_out_pokemon = activePokemon
    activePokemon = mySquad[2]
    swapAnimation()
    resetActivePokemon()
    mySquad.splice(2, 1)
    if (swapped_out_pokemon.hp.current > 0) {
        mySquad.splice(2, 0, swapped_out_pokemon)
    }
    else {
        kodPokemons.push(swapped_out_pokemon)
    }

}

function sendPokemon4() {
    let swapped_out_pokemon = activePokemon
    activePokemon = mySquad[3]
    swapAnimation()
    resetActivePokemon()
    mySquad.splice(3, 1)
    if (swapped_out_pokemon.hp.current > 0) {
        mySquad.splice(3, 0, swapped_out_pokemon)
    }
    else {
        kodPokemons.push(swapped_out_pokemon)
    }
}

function useTool() {
    tool_button.removeEventListener("click", useTool)
    battle_dialogue.style.display = "flex"
    battle_options_panel.style.display = "none"
    if (myPokeballs == 0) {
        battle_dialogue.innerText = `You have no pokeballs left... maybe you should buy some at the shop!`
        setTimeout(resetBattleOptions, 1000)
        return
    }

    if (mySquad.length < 4) {
        battle_dialogue.innerText = `Trying to catch ${oppoPokemon.name}`
        catchEnemy()
    }

    else {
        battle_dialogue.innerText = `Your team is full, you have no room to carry another pokèmon...`
        setTimeout(resetBattleOptions, 1000)
    }

}

function resetBattleOptions() {
    fight_button.removeEventListener("click", chooseMove)
    run_button.removeEventListener("click", run)
    switch_button.removeEventListener("click", swap)
    tool_button.removeEventListener("click", useTool)
    battle_dialogue.style.display = "none"
    battle_options_panel.style.display = "flex"
    setBattleOptions()
}

function resetActivePokemon() {
    myPokeBox.style.opacity = 1
    myPokeBox.style.bottom = "25%"
}

function updateBench() {
    bench_imgs.forEach((img) => {
        img.setAttribute("src", "")
    })
    bench_slots.forEach((slot) => {
        slot.innerText = "-"
    })

    for (i = 0; i < mySquad.length; i++) {
        bench_slots[i].innerText = mySquad[i].name
        bench_imgs[i].setAttribute("src", `./assets/img/${mySquad[i].name}-front.gif`)
        if (mySquad[i].hp.current <= 0) {
            console.log("pokemon-dead")
            bench_imgs[i].style.filter = "brightness(30%)"
        }
    }
    myBench.style.display = "flex"
    if (mySquad.length >= 1) {
        pokemon1.addEventListener("click", sendPokemon1)
    }
    if (mySquad.length >= 2) {
        pokemon2.addEventListener("click", sendPokemon2)
    }
    if (mySquad.length >= 3) {
        pokemon3.addEventListener("click", sendPokemon3)
    }
    if (mySquad.length >= 4) {
        pokemon4.addEventListener("click", sendPokemon4)
    }

}

setBattleOptions()


function swapAnimation(
) {
    let new_pokemon_size
    let animation_duration = 1.5
    let ball_img = new Image()
    ball_img.src = "./assets/img/ball.gif"
    ball_img.id = "ball"
    ball_img.className = "moveEffect"
    if (swapKO == true) {
        myPoke.style.opacity = "0"
        animation_duration = 0.2
    }
    setTimeout(() => {
        myPokeBox.appendChild(ball_img)
    }, (animation_duration * 1000))
    gsap.to(myPoke, {
        filter: "brightness(550%)",
        width: 0,
        duration: animation_duration,
        onComplete() {
            activePokemon.placeAlly()
            if (activePokemon.size == "small") {
                new_pokemon_size = "40%"
            }
            else if (activePokemon.size == "medium") {
                new_pokemon_size = "70%"
            }

            else if (activePokemon.size == "big") {
                new_pokemon_size = "80%"
            }
            myPoke.style.opacity = "1"
            gsap.to(myPoke, {
                filter: "brightness(100%)",
                width: new_pokemon_size,
                duration: 1
            })
            updateBench()
            updateHUD()
            updateMyHPbar()
            battle_options_panel.style.display = "none"
            myBench.style.display = "none"
            battle_dialogue.style.display = "flex"
            battle_dialogue.innerText = `${activePokemon.name} has been sent into the battle`
            setTimeout(() => {
                pokemon1.removeEventListener("click", sendPokemon1)
                pokemon2.removeEventListener("click", sendPokemon2)
                pokemon3.removeEventListener("click", sendPokemon3)
                pokemon4.removeEventListener("click", sendPokemon4)
                if (swapKO == false) {
                    ball_img.remove()
                    setTimeout(enemyAttack, 1000)

                }
                else {
                    ball_img.remove()
                    battle_dialogue.style.display = "none"
                }

            }, 1000)
        }
    })
}



function catchEnemy() {
    const pokeballImg = new Image()
    pokeballImg.src = "./assets/img/pokeball.png"
    pokeballImg.id = "pokeball"
    pokeballImg.className = "moveEffect"
    ally_already_attacked = true
    enemyPokeBox.appendChild(pokeballImg)
    let oppoOriginalSize = enemyPoke.width
    let enemyMaxHpx3 = oppoPokemon.hp.max * 3
    let enemyCurrentHPx2 = oppoPokemon.hp.current * 2
    let status_bonus = 0
    let shakeProbability = randomIntFromInterval(0, 255)
    if (oppoPokemon.status == "asleep" || oppoPokemon.status == "frozen") {
        status_bonus = 10
    }
    if (oppoPokemon.status == "burned" || oppoPokemon.status == "poisoned" || oppoPokemon.status == "paralyzed") {
        status_bonus = 5
    }
    if (enemyMaxHpx3 > 255) {
        enemyMaxHpx3 = Math.floor(enemyMaxHpx3 / 2)
        enemyMaxHpx3 = Math.floor(enemyMaxHpx3 / 2)
        enemyCurrentHPx2 = Math.floor(enemyCurrentHPx2 / 2)
        enemyCurrentHPx2 = Math.floor(enemyCurrentHPx2 / 2)
        if (enemyCurrentHPx2 == 0) {
            enemyCurrentHPx2 = 1
        }

        if (enemyMaxHpx3 == 0) {
            enemyMaxHpx3 = 1
        }
    }
    let modified_catch_rate = Math.floor((((enemyMaxHpx3 - enemyCurrentHPx2) * oppoPokemon.catchrate) / enemyMaxHpx3))
    if (modified_catch_rate < 1) {
        modified_catch_rate = 1
    }
    modified_catch_rate = modified_catch_rate + status_bonus


    if (shakeProbability <= modified_catch_rate) {
        console.log("pokemon caught")
    }
    gsap.to(pokeballImg, {
        duration: 0.08,
        repeat: 8,
        transform: "rotate(179deg)",
    })
    gsap.to(pokeballImg, {
        left: 160,
        bottom: 0,
        duration: 0.9,
        onComplete() {
            gsap.to(enemyPoke, {
                filter: "brightness(550%)",
                width: "0"
            })
            gsap.to(pokeballImg, {
                transform: "rotate(120deg)",
                repeat: 5,
                duration: 0.5,
                yoyo: true,
                onComplete() {
                    if (shakeProbability <= modified_catch_rate) {
                        enemyPoke.style.display = "none"
                        enemyPoke.style.width = oppoOriginalSize + "px"
                        battle_dialogue.innerText = `Congratulations, you caught wild ${oppoPokemon.name}`
                        let wildPkmnIndex = wildPokemons.indexOf(oppoPokemon)
                        wildPokemons.splice(wildPkmnIndex, 1)
                        mySquad.push(oppoPokemon)
                        window.addEventListener("click", endBattle)
                    }

                    else {
                        gsap.to(pokeballImg, {
                            width: 0,
                            opacity: 0,
                            onComplete() {
                                gsap.to(enemyPoke, {
                                    filter: "brightness(100%)",
                                    width: oppoOriginalSize + "px"
                                })
                                pokeballImg.remove()
                                battle_dialogue.innerText = ` Wild ${oppoPokemon.name} won't get caught so easily!`
                                enemy_already_attacked = false
                                setTimeout(enemyAttack, 1000)
                            }
                        })

                    }
                }
            })
        }
    })

}

function resetBall() {
    pokeballImg.style.transform = "rotate(0deg)"
    pokeballImg.style.opacity = 1
    pokeballImg.style.width = "90px"
    pokeballImg.style.left = "-150px"
    pokeballImg.style.bottom = "-200px"
    pokeballImg.remove()
}

//


