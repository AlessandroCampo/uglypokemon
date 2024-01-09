let attacks = {
    Ember: {
        name: "Ember",
        damage: 40,
        type: "Fire",
        pp: {
            max: 25,
            current: 25
        },
        accuracy: 100,
        category: "special",
        myAnimation: allyEmber,
        enemyAnimation: enemyEmber,
        myConfusedAnimation: allyConfusedEmber,
        enemyConfusedAnimation: enemyConfusedEmber
    },

    Fire_Fang: {
        name: "Fire_Fang",
        damage: 65,
        type: "Fire",
        pp: {
            max: 15,
            current: 15
        },
        accuracy: 95,
        category: "physical",
        myAnimation: allyTackle,
        enemyAnimation: enemyTackle,
        myConfusedAnimation: allyHitVanilla,
        enemyConfusedAnimation: enemyHitVanilla
    },
    Poison_Sting: {
        name: "Poison_Sting",
        damage: 15,
        type: "Poison",
        pp: {
            max: 35,
            current: 35
        },
        accuracy: 100,
        category: "special",
        myAnimation: allyTackle,
        enemyAnimation: enemyTackle,
        myConfusedAnimation: allyHitVanilla,
        enemyConfusedAnimation: enemyHitVanilla
        //30% enemy poison
    },

    Scratch: {
        name: "Scratch",
        damage: 40,
        type: "Normal",
        pp: {
            max: 35,
            current: 35
        },
        accuracy: 100,
        category: "physical",
        myAnimation: allyTackle,
        enemyAnimation: enemyTackle,
        myConfusedAnimation: allyHitVanilla,
        enemyConfusedAnimation: enemyHitVanilla
    },

    Bite: {
        name: "Bite",
        damage: 60,
        type: "Dark",
        pp: {
            max: 25,
            current: 25
        },
        accuracy: 100,
        category: "physical",
        myAnimation: allyBite,
        enemyAnimation: enemyBite,
        myConfusedAnimation: allyHitVanilla,
        enemyConfusedAnimation: enemyHitVanilla
    },

    Tackle: {
        name: "Tackle",
        damage: 40,
        type: "Normal",
        pp: {
            max: 35,
            current: 35
        },
        accuracy: 100,
        category: "physical",
        myAnimation: allyTackle,
        enemyAnimation: enemyTackle,
        myConfusedAnimation: allyHitVanilla,
        enemyConfusedAnimation: enemyHitVanilla
    },

    Meteor: {
        name: "Meteor",
        damage: 70,
        type: "Fire",
        pp: {
            max: 10,
            current: 10
        },
        accuracy: 75,
        category: "special",
        myAnimation: allyMeteor,
        enemyAnimation: enemyMeteor,
        myConfusedAnimation: allyHitVanilla,
        enemyConfusedAnimation: enemyHitVanilla
    },
    Gust: {
        name: "Gust",
        damage: 40,
        type: "Flying",
        pp: {
            max: 40,
            current: 40
        },
        accuracy: 100,
        category: "special",
        myAnimation: allyTackle,
        enemyAnimation: enemyTackle,
        myConfusedAnimation: allyHitVanilla,
        enemyConfusedAnimation: enemyHitVanilla
    },

    Quick_Attack: {
        name: "Quick_Attack",
        damage: 40,
        type: "Normal",
        pp: {
            max: 30,
            current: 30
        },
        accuracy: 100,
        category: "physical",
        myAnimation: allyQuickAttack,
        enemyAnimation: enemyQuickAttack,
        myConfusedAnimation: allyHitVanilla,
        enemyConfusedAnimation: enemyHitVanilla
    },
    Takedown: {
        name: "Takedown",
        damage: 90,
        type: "Normal",
        pp: {
            max: 20,
            current: 20
        },
        accuracy: 85,
        category: "physical",
        myAnimation: allyQuickAttack,
        enemyAnimation: enemyQuickAttack,
        myConfusedAnimation: allyHitVanilla,
        enemyConfusedAnimation: enemyHitVanilla
        //retailate damage
    },


    Vine_Whip: {
        name: "Vine_Whip",
        damage: 45,
        type: "Grass",
        pp: {
            max: 25,
            current: 25
        },
        accuracy: 100,
        category: "physical",
        myAnimation: allyQuickAttack,
        enemyAnimation: enemyQuickAttack,
        myConfusedAnimation: allyHitVanilla,
        enemyConfusedAnimation: enemyHitVanilla
    },
    Razor_Leaf: {
        name: "Razor_Leaf",
        damage: 55,
        type: "Grass",
        pp: {
            max: 25,
            current: 25
        },
        accuracy: 95,
        category: "physical",
        myAnimation: allyQuickAttack,
        enemyAnimation: enemyQuickAttack,
        myConfusedAnimation: allyHitVanilla,
        enemyConfusedAnimation: enemyHitVanilla
    },
    Water_Gun: {
        name: "Water_Gun",
        damage: 40,
        type: "Water",
        pp: {
            max: 25,
            current: 25
        },
        accuracy: 100,
        category: "special",
        myAnimation: allyQuickAttack,
        enemyAnimation: enemyQuickAttack,
        myConfusedAnimation: allyHitVanilla,
        enemyConfusedAnimation: enemyHitVanilla
    },
    Water_Pulse: {
        name: "Water_Gun",
        damage: 60,
        type: "Water",
        pp: {
            max: 20,
            current: 20
        },
        accuracy: 100,
        category: "special",
        myAnimation: allyQuickAttack,
        enemyAnimation: enemyQuickAttack,
        myConfusedAnimation: allyHitVanilla,
        enemyConfusedAnimation: enemyHitVanilla
        //can confuse
    },

    Tail_Whip: {
        name: "Tail_Whip",
        damage: 0,
        type: "Normal",
        pp: {
            max: 30,
            current: 30
        },
        category: "status",
        accuracy: 100,
        effect: "decrease",
        stage_change: 1,
        target_stat: "defense",
        myAnimation: allyTailWhip,
        enemyAnimation: enemyTailWhip,
        myConfusedAnimation: allyHitVanilla,
        enemyConfusedAnimation: enemyHitVanilla
    },


    Growl: {
        name: "Growl",
        damage: 0,
        type: "Normal",
        pp: {
            max: 30,
            current: 30
        },
        category: "status",
        accuracy: 100,
        effect: "decrease",
        stage_change: 1,
        target_stat: "attack",
        myAnimation: allyGrowl,
        enemyAnimation: enemyGrowl,
        myConfusedAnimation: allyHitVanilla,
        enemyConfusedAnimation: enemyHitVanilla
    },

    Growth: {
        name: "Growth",
        damage: 0,
        type: "Normal",
        pp: {
            max: 20,
            current: 20
        },
        category: "status",
        accuracy: 100,
        myAnimation: allyGrowl,
        enemyAnimation: enemyGrowl,
        myConfusedAnimation: allyHitVanilla,
        enemyConfusedAnimation: enemyHitVanilla
    },
    Poison_Powder: {
        name: "Poison_Powder",
        damage: 0,
        type: "Poison",
        pp: {
            max: 35,
            current: 35
        },
        category: "status",
        accuracy: 75,
        myAnimation: allyGrowl,
        enemyAnimation: enemyGrowl,
        myConfusedAnimation: allyHitVanilla,
        enemyConfusedAnimation: enemyHitVanilla
    },
    Sleep_Powder: {
        name: "Sleep_Powder",
        damage: 0,
        type: "Grass",
        pp: {
            max: 15,
            current: 15
        },
        category: "status",
        accuracy: 75,
        myAnimation: allyGrowl,
        enemyAnimation: enemyGrowl,
        myConfusedAnimation: allyHitVanilla,
        enemyConfusedAnimation: enemyHitVanilla
    },
}

const tl = gsap.timeline()




function allyTackle() {
    const tl = gsap.timeline()
    tl.to(myPokeBox, {
        left: "0%",
        bottom: "20%"
    }).to(myPokeBox, {
        left: "20%",
        bottom: "30%",
        duration: 0.2,
        onComplete() {
            enemyHit()
        }
    }).to(myPokeBox, {
        left: "10%",
        bottom: "25%"
    })
}

function enemyTackle() {
    const tl = gsap.timeline()
    tl.to(enemyPokeBox, {
        left: "72%",
        top: "17%"
    }).to(enemyPokeBox, {
        left: "52%",
        top: "29%",
        duration: 0.2,
        onComplete() {
            allyHit()
        }
    }).to(enemyPokeBox, {
        left: "62%",
        top: "22%"
    })
}


function allyQuickAttack() {
    const tl = gsap.timeline()
    tl.to(myPokeBox, {
        left: "20%",
        bottom: "33%",
        duration: 0.07,
        onComplete() {
            enemyHit()
        }
    }).to(myPokeBox, {
        left: "10%",
        bottom: "25%"
    })
}

function enemyQuickAttack() {
    tl.to(enemyPokeBox, {
        left: "52%",
        top: "32%",
        duration: 0.05,
        onComplete() {
            allyHit()
        }
    }).to(enemyPokeBox, {
        left: "62%",
        top: "22%"
    })
}



function allyBite() {
    const fangimg = new Image()
    fangimg.src = "./assets/img/topfang.png"
    fangimg.className = "moveEffect"
    fangimg.id = "topfang"
    const fangimg2 = new Image()
    fangimg2.src = "./assets/img/botfang.png"
    fangimg2.className = "moveEffect"
    fangimg2.id = "botfang"
    enemyPokeBox.appendChild(fangimg)
    enemyPokeBox.appendChild(fangimg2)
    if (enemyPoke.className == "big" || enemyPoke.className == "medium") {
        fangimg.style.top = "0px"
        fangimg2.style.top = "220px"
        gsap.to(fangimg, {
            top: "100px",
            duration: 0.4,
            onComplete() {
                let anims = document.querySelectorAll(".moveEffect")
                anims.forEach((anim) => {
                    anim.remove()
                })
                enemyHit()
            }
        })

        gsap.to(fangimg2, {
            top: "120px",
            duration: 0.4,
        })
    }

    else if (enemyPoke.className == "small") {
        fangimg.style.top = "50px"
        fangimg2.style.top = "270px"
        gsap.to(fangimg, {
            top: "150px",
            duration: 0.4,
            onComplete() {
                let anims = document.querySelectorAll(".moveEffect")
                anims.forEach((anim) => {
                    anim.remove()
                })
                enemyHit()
            }
        })

        gsap.to(fangimg2, {
            top: "170px",
            duration: 0.4,
        })
    }


}


function enemyBite() {
    const fangimg = new Image()
    fangimg.src = "./assets/img/topfang.png"
    fangimg.className = "moveEffect"
    fangimg.id = "topfang"
    const fangimg2 = new Image()
    fangimg2.src = "./assets/img/botfang.png"
    fangimg2.className = "moveEffect"
    fangimg2.id = "botfang"
    myPokeBox.appendChild(fangimg)
    myPokeBox.appendChild(fangimg2)
    fangimg.style.top = "20px"
    fangimg2.style.top = "220px"
    fangimg.style.left = "270px"
    fangimg2.style.left = "270px"
    gsap.to(fangimg, {
        top: "100px",
        duration: 0.3,
        onComplete() {
            let anims = document.querySelectorAll(".moveEffect")
            anims.forEach((anim) => {
                anim.remove()
            })
            allyHit()
        }
    })

    gsap.to(fangimg2, {
        top: "150px",
        duration: 0.3,
    })

}


function allyMeteor() {
    const meteorImg = new Image()
    meteorImg.src = "./assets/img/meteor.gif"
    meteorImg.className = "moveEffect"
    meteorImg.id = "meteor"
    enemyPokeBox.appendChild(meteorImg)
    setTimeout(() => {
        enemyPokeBox.removeChild(meteorImg)
        enemyHit()
    }, 1600)
}

function enemyMeteor() {
    const meteorImg = new Image()
    meteorImg.src = "./assets/img/meteor.gif"
    meteorImg.className = "moveEffect"
    meteorImg.id = "meteor"
    myPokeBox.appendChild(meteorImg)
    setTimeout(() => {
        myPokeBox.removeChild(meteorImg)
        allyHit()
    }, 1600)
}



function allyEmber() {
    const emberImg = new Image()
    emberImg.src = "./assets/img/ember.gif"
    emberImg.className = "moveEffect"
    emberImg.id = "ember"
    let randomProbability = Math.floor(Math.random() * 100) + 1
    if (randomProbability <= 100 && oppoPokemon.status == "none" && oppoPokemon.type !== "Fire") {
        oppoPokemon.status = "burned"
        enemyStatus.innerText = "BRN"
        enemyStatus.style.backgroundColor = "red"
        setTimeout(() => {
            enemyStatus.style.display = "inline"
            battle_dialogue.innerText = `${oppoPokemon.name} has been burned!`
        }, 1500)

    }
    enemyPokeBox.appendChild(emberImg)
    gsap.to(enemyPoke, {
        filter: "invert(24%) sepia(90%) saturate(7353%) hue-rotate(1deg) brightness(97%) contrast(124%)",
        duration: 0.1,
        onComplete() {
            setTimeout(() => {
                enemyPoke.style.filter = "none"
            }, 1500)

        }
    })
    setTimeout(() => {
        enemyPokeBox.removeChild(emberImg)
        enemyHit()
    }, 1600)
}

function enemyEmber() {
    const emberImg = new Image()
    emberImg.src = "./assets/img/ember.gif"
    emberImg.className = "moveEffect"
    emberImg.id = "ember"
    let randomProbability = Math.floor(Math.random() * 100) + 1
    if (randomProbability <= 10 && activePokemon.status == "none" && activePokemon.type !== "Fire") {
        activePokemon.status = "burned"
        myStatus.innerText = "BRN"
        myStatus.style.backgroundColor = "red"
        setTimeout(() => {
            myStatus.style.display = "inline"
            battle_dialogue.innerText = `${activePokemon.name} has been burned!`
        }, 1500)

    }
    myPokeBox.appendChild(emberImg)
    gsap.to(myPoke, {
        filter: "invert(24%) sepia(90%) saturate(7353%) hue-rotate(1deg) brightness(97%) contrast(124%)",
        duration: 0.1,
        onComplete() {
            setTimeout(() => {
                myPoke.style.filter = "none"
            }, 1500)

        }
    })

    setTimeout(() => {
        myPokeBox.removeChild(emberImg)
        allyHit()
    }, 1600)
}

function enemyConfusedEmber() {
    const emberImg = new Image()
    emberImg.src = "./assets/img/ember.gif"
    emberImg.className = "moveEffect"
    emberImg.id = "ember"
    enemyPokeBox.appendChild(emberImg)
    gsap.to(enemyPoke, {
        filter: "invert(24%) sepia(90%) saturate(7353%) hue-rotate(1deg) brightness(97%) contrast(124%)",
        duration: 0.1,
        onComplete() {
            setTimeout(() => {
                enemyPoke.style.filter = "none"
            }, 1500)

        }
    })
    setTimeout(() => {
        enemyPokeBox.removeChild(emberImg)
        enemyHitVanilla()
    }, 1600)
}

function allyConfusedEmber() {
    const emberImg = new Image()
    emberImg.src = "./assets/img/ember.gif"
    emberImg.className = "moveEffect"
    emberImg.id = "ember"
    myPokeBox.appendChild(emberImg)
    gsap.to(myPoke, {
        filter: "invert(24%) sepia(90%) saturate(7353%) hue-rotate(1deg) brightness(97%) contrast(124%)",
        duration: 0.1,
        onComplete() {
            setTimeout(() => {
                myPoke.style.filter = "none"
            }, 1500)

        }
    })

    setTimeout(() => {
        myPokeBox.removeChild(emberImg)
        allyHitVanilla()
    }, 1600)
}

function enemyBurn() {
    const emberImg = new Image()
    emberImg.src = "./assets/img/ember.gif"
    emberImg.className = "moveEffect"
    emberImg.id = "ember"
    if (enemyPoke.className == "big") {
        emberImg.style.width = "350px"
    }
    enemyPokeBox.appendChild(emberImg)
    gsap.to(enemyPoke, {
        filter: "invert(24%) sepia(90%) saturate(7353%) hue-rotate(1deg) brightness(97%) contrast(124%)",
        duration: 0.1,
        onComplete() {
            setTimeout(() => {
                enemyPoke.style.filter = "none"
            }, 1500)

        }
    })

    setTimeout(() => {
        enemyPokeBox.removeChild(emberImg)
    }, 1600)
}

function myBurn() {
    const emberImg = new Image()
    emberImg.src = "./assets/img/ember.gif"
    emberImg.className = "moveEffect"
    emberImg.id = "ember"
    myPokeBox.appendChild(emberImg)
    gsap.to(myPoke, {
        filter: "invert(24%) sepia(90%) saturate(7353%) hue-rotate(1deg) brightness(97%) contrast(124%)",
        duration: 0.1,
        onComplete() {
            setTimeout(() => {
                myPoke.style.filter = "none"
            }, 1500)

        }
    })
    setTimeout(() => {
        myPokeBox.removeChild(emberImg)
    }, 1600)
}

function myPoison() {
    const poisonImg = new Image()
    poisonImg.src = "./assets/img/poison.gif"
    poisonImg.className = "moveEffect"
    poisonImg.id = "poison"
    myPokeBox.appendChild(poisonImg)
    gsap.to(myPoke, {
        filter: "invert(16%) sepia(80%) saturate(7158%) hue-rotate(277deg) brightness(100%) contrast(93%)",
        duration: 0.1,
        onComplete() {
            gsap.to(myPokeBox, {
                left: "8%",
                yoyo: true,
                duration: 0.07,
                repeat: 4,
                // opacity: 0.2
                onComplete() {
                    gsap.to(myPokeBox, {
                        left: "10%",
                    })
                }
            })
            setTimeout(() => {
                myPoke.style.filter = "none"
            }, 1500)

        }
    })
    setTimeout(() => {
        myPokeBox.removeChild(poisonImg)
    }, 1600)
}

function enemyPoison() {
    const poisonImg = new Image()
    poisonImg.src = "./assets/img/poison.gif"
    poisonImg.className = "moveEffect"
    poisonImg.id = "poison"
    enemyPokeBox.appendChild(poisonImg)
    gsap.to(enemyPoke, {
        filter: "invert(16%) sepia(80%) saturate(7158%) hue-rotate(277deg) brightness(100%) contrast(93%)",
        duration: 0.1,
        onComplete() {
            gsap.to(enemyPokeBox, {
                left: "64%",
                yoyo: true,
                duration: 0.07,
                repeat: 4,
                // opacity: 0.2
                onComplete() {
                    gsap.to(enemyPokeBox, {
                        left: "62%"
                    })
                }
            })
            setTimeout(() => {
                enemyPoke.style.filter = "none"
            }, 1500)

        }
    })
    setTimeout(() => {
        enemyPokeBox.removeChild(poisonImg)
    }, 1600)
}

function mySleep() {
    const sleepImg = new Image()
    sleepImg.src = "./assets/img/sleep.gif"
    sleepImg.className = "moveEffect"
    sleepImg.id = "sleep"
    if (myPoke.className == "big") {
        sleepImg.style.top = "-180px"
    }
    gsap.to(myPoke, {
        filter: "brightness(15%)",
        duration: 0.2,
        onComplete() {
            setTimeout(() => {
                myPoke.style.filter = "none"
            }, 1500)
        }
    })
    myPokeBox.appendChild(sleepImg)
    setTimeout(() => {
        myPokeBox.removeChild(sleepImg)
    }, 1200)
}

function enemySleep() {
    const sleepImg = new Image()
    sleepImg.src = "./assets/img/sleep.gif"
    sleepImg.className = "moveEffect"
    sleepImg.id = "sleep"
    enemyPokeBox.appendChild(sleepImg)
    gsap.to(enemyPoke, {
        filter: "brightness(15%)",
        duration: 0.2,
        onComplete() {
            setTimeout(() => {
                enemyPoke.style.filter = "none"
            }, 1200)
        }
    })
    setTimeout(() => {
        enemyPokeBox.removeChild(sleepImg)
    }, 1200)
}

function myFreeze() {
    const freezeImg = new Image()
    freezeImg.src = "./assets/img/freeze.gif"
    freezeImg.className = "moveEffect"
    freezeImg.id = "freeze"
    if (myPoke.className == "big") {
        freezeImg.style.width = "400px"
        freezeImg.style.top = "-100px"
        freezeImg.style.left = "240px"
    }
    myPokeBox.appendChild(freezeImg)
    setTimeout(() => {
        myPokeBox.removeChild(freezeImg)
    }, 1600)
}

function enemyFreeze() {
    const freezeImg = new Image()
    freezeImg.src = "./assets/img/freeze.gif"
    freezeImg.className = "moveEffect"
    freezeImg.id = "freeze"
    if (enemyPoke.className == "big") {
        freezeImg.style.width = "400px"
        freezeImg.style.top = "-80px"
    }
    enemyPokeBox.appendChild(freezeImg)
    setTimeout(() => {
        enemyPokeBox.removeChild(freezeImg)
    }, 1600)
}


function enemyParalysis() {
    const paralysisImg = new Image()
    paralysisImg.src = "./assets/img/paralysis.gif"
    paralysisImg.className = "moveEffect"
    paralysisImg.id = "paralysis"
    paralysisImg.style.filter = "invert(76%) sepia(100%) saturate(534%) hue-rotate(355deg) brightness(251%) contrast(108%)"
    if (enemyPoke.className == "big") {
        paralysisImg.style.width = "400px"
    }
    enemyPokeBox.appendChild(paralysisImg)
    gsap.to(enemyPoke, {
        filter: "brightness(15%)",
        duration: 0.2,
        onComplete() {
            setTimeout(() => {
                enemyPoke.style.filter = "none"
            }, 1500)
        }
    })
    setTimeout(() => {
        enemyPokeBox.removeChild(paralysisImg)
    }, 1600)
}

function myParalysis() {
    const paralysisImg = new Image()
    paralysisImg.src = "./assets/img/paralysis.gif"
    paralysisImg.className = "moveEffect"
    paralysisImg.id = "paralysis"
    paralysisImg.style.filter = "invert(76%) sepia(100%) saturate(534%) hue-rotate(355deg) brightness(251%) contrast(108%)"
    if (myPoke.className == "big") {
        paralysisImg.style.width = "400px"
        paralysisImg.style.left = "250px"
    }
    myPokeBox.appendChild(paralysisImg)
    gsap.to(myPoke, {
        filter: "brightness(15%)",
        duration: 0.2,
        onComplete() {
            setTimeout(() => {
                myPoke.style.filter = "none"
            }, 1500)
        }
    })
    setTimeout(() => {
        myPokeBox.removeChild(paralysisImg)
    }, 1600)
}


function enemyTailWhip() {
    enemyPokeBox.classList.remove("tailwhipAnimation")
    enemyPokeBox.offsetWidth
    enemyPokeBox.classList.add("tailwhipAnimation")
    myStatChange()

}

function allyTailWhip() {
    myPokeBox.classList.remove("tailwhipAnimation")
    myPokeBox.offsetWidth
    myPokeBox.classList.add("tailwhipAnimation")
    enemyStatChange()


}

function allyGrowl() {
    const growlImg = new Image()
    growlImg.src = "./assets/img/growl.gif"
    growlImg.className = "moveEffect"
    growlImg.id = "growl"
    myPokeBox.appendChild(growlImg)
    setTimeout(() => {
        myPokeBox.removeChild(growlImg)
        enemyStatChange()
    }, 1000)
}



function enemyGrowl() {
    const growlImg = new Image()
    growlImg.src = "./assets/img/growl.gif"
    growlImg.className = "moveEffect"
    growlImg.id = "growl"

    enemyPokeBox.appendChild(growlImg)
    setTimeout(() => {
        enemyPokeBox.removeChild(growlImg)
        myStatChange()
    }, 1000)
}


function allyHit() {
    console.log(ally_already_attacked)
    gsap.to(myPokeBox, {
        left: "8%",
        yoyo: true,
        duration: 0.07,
        repeat: 4,
        opacity: 0,
        // opacity: 0.2
        onComplete() {
            gsap.to(myPokeBox, {
                left: "10%",
                opacity: 1,
                onComplete() {
                    if (ally_already_attacked == true && activePokemon.hp.current > 0) {
                        console.log("ending turn")
                        setTimeout(() => {
                            endTurn()
                        }, 2000)

                    }
                }
            })
        }
    })

}

function enemyHit() {
    console.log(enemy_already_attacked)
    gsap.to(enemyPokeBox, {
        left: "63%",
        yoyo: true,
        duration: 0.07,
        repeat: 4,
        opacity: 0,
        onComplete() {
            gsap.to(enemyPokeBox, {
                left: "62%",
                opacity: 1,
                onComplete() {
                    applyDamage()
                    if (enemy_already_attacked == true && oppoPokemon.hp.current > 0) {
                        setTimeout(() => {
                            endTurn()
                        }, 2000)
                    }
                }
            })


        }
    })
}

function allyHitVanilla() {
    gsap.to(myPokeBox, {
        left: "8%",
        yoyo: true,
        duration: 0.07,
        repeat: 4,
        opacity: 0,
        // opacity: 0.2
        onComplete() {
            gsap.to(myPokeBox, {
                left: "10%",
                opacity: 1,
            })
        }
    })

}

function enemyHitVanilla() {
    gsap.to(enemyPokeBox, {
        left: "63%",
        yoyo: true,
        duration: 0.07,
        repeat: 4,
        opacity: 0,
        onComplete() {
            gsap.to(enemyPokeBox, {
                left: "62%",
                opacity: 1,
            })


        }
    })
}


function enemyKO() {
    gsap.to(enemyPokeBox, {
        top: "28%",
        opacity: 0,
        duration: 0.8,
        onComplete() {
            if (activePokemon.level >= activePokemon.evolution_level) {
                activePokemon.evolution.level = activePokemon.level
                activePokemon.evolution.attacks = activePokemon.attacks
                window.addEventListener("click", evolve)
            }

            else {
                window.addEventListener("click", endBattle)
            }

        }
    })
}

let swapKO = false

function allyKO() {
    swapKO = false
    gsap.to(myPokeBox, {
        bottom: "15%",
        opacity: 0,
        duration: 0.8,
        onComplete() {
            if (activePokemon.level == activePokemon.evolution_level) {
                activePokemon.evolution.level = activePokemon.level
                activePokemon.evolution.attacks = activePokemon.attacks
                window.addEventListener("click", evolve)

            }

            else if (mySquad.length == 0) {
                battle_dialogue.innerText = "All of your Pokèmons are KO, you lost the battle!"
                window.addEventListener("click", endBattle)
            }

            else if (mySquad.length > 0) {
                console.log(activePokemon)
                swapKO = true
                endTurn()
                setTimeout(swap, 1200)



            }

        }
    })
}



let ally_burn_nerf = false

function applyDamage() {
    let pb = 1
    if (activePokemon.type.includes(selected_move.type)) {
        pb = 1.5
    }

    // if (activePokemon.status == "asleep") {
    //     battle_dialogue.innerText = `${activePokemon.name} is still asleep!`
    //     return
    // }


    let effectiveness = checkEffectiveness({
        move_type: selected_move.type,
        target_type: oppoPokemon.type
    })


    let offensive_stat = activePokemon.attack.effective
    let defensive_stat = oppoPokemon.defense.effective
    if (selected_move.category == "special") {
        offensive_stat = activePokemon.sp_atk.effective
        defensive_stat = oppoPokemon.sp_def.effective
    }

    if (activePokemon.status == "burned" && ally_burn_nerf == false) {
        ally_burn_nerf = true
        activePokemon.attack.effective = activePokemon.attack.effective / 2

    }
    let damage_equation = Math.floor
        ((((activePokemon.level * 2 / 5) + 2) * selected_move.damage * (offensive_stat / defensive_stat) / 50) * pb * effectiveness + 2)

    oppoPokemon.hp.current = oppoPokemon.hp.current - damage_equation



    if (selected_move.category == "status") {
        damage_equation = 0
        let infleunced_stat
        let stage_multiplier
        if (selected_move.target_stat == "attack") {
            if (selected_move.effect == "decrease") {
                infleunced_stat = oppoPokemon.attack
            }
            else if (selected_move.effect == "increase") {
                infleunced_stat = activePokemon.attack
            }


        }
        else if (selected_move.target_stat == "defense") {
            if (selected_move.effect == "decrease") {
                infleunced_stat = oppoPokemon.defense
            }
            else if (selected_move.effect == "increase") {
                infleunced_stat = activePokemon.defense
            }
        }

        if (selected_move.effect == "decrease") {
            infleunced_stat.stage = infleunced_stat.stage - selected_move.stage_change
            if (infleunced_stat.stage < -6) {
                infleunced_stat.stage = -6
                battle_dialogue.innerText = `${oppoPokemon.name
                    }'s ${selected_move.target_stat
                    } can't be decrease any further`
            }

            else if (selected_move.stage_change == 1) {
                battle_dialogue.innerText = `${oppoPokemon.name
                    }'s ${selected_move.target_stat
                    } fell!`
            }

            else if (selected_move.stage_change == 2) {
                battle_dialogue.innerText = `${oppoPokemon.name
                    }'s ${selected_move.target_stat
                    } harshly fell!`
            }

            else if (selected_move.stage_change >= 3) {
                battle_dialogue.innerText = `${oppoPokemon.name
                    }'s ${selected_move.target_stat
                    } severely fell!`
            }


            stage_multiplier = (Math.abs(infleunced_stat.stage)) + 2

            infleunced_stat.effective = Math.floor((infleunced_stat.current * 2) / stage_multiplier)

        }

        else if (selected_move.effect == "increase") {
            infleunced_stat.stage = infleunced_stat.stage + selected_move.stage_change
            if (infleunced_stat.stage > 6) {
                infleunced_stat.stage = 6
                battle_dialogue.innerText = `${activePokemon.name
                    }'s ${selected_move.target_stat
                    } can't be increased any further`
            }

            else if (selected_move.stage_change == 1) {
                battle_dialogue.innerText = `${activePokemon.name
                    }'s ${selected_move.target_stat
                    } rose!`
            }

            else if (selected_move.stage_change == 2) {
                battle_dialogue.innerText = `${activePokemon.name
                    }'s ${selected_move.target_stat
                    } sharply rose!`
            }

            else if (selected_move.stage_change >= 3) {
                battle_dialogue.innerText = `${activePokemon.name
                    }'s ${selected_move.target_stat
                    } rose drastically!`
            }

            stage_multiplier = (Math.abs(infleunced_stat.stage)) + 2
            infleunced_stat.effective = Math.floor((infleunced_stat.current * 2) / stage_multiplier)

        }




    }
    gsap.to(enemyHPBar, {
        value: enemyHPBar.value - damage_equation,
        duration: 1,
        onComplete() {
            if (effectiveness == 2 && selected_move.category !== "status") {
                battle_dialogue.innerText = `${selected_move.name} is super-effective!`
            }

            else if (effectiveness == 0.5 && selected_move.category !== "status") {
                battle_dialogue.innerText = `${selected_move.name} is not very effective...`
            }

            else if (effectiveness == 0 && selected_move.category !== "status") {
                battle_dialogue.innerText = `${selected_move.name} has no effect at all...`
            }

            else if (selected_move.category !== "status") {
                {
                    battle_dialogue.innerText = `The attack was succesful`
                }

            }

            if (enemy_already_attacked == true) {
                //NOTE - TIMEOUT CANCELLED
                // setTimeout(() => {
                //     battle_dialogue.style.display = "none"
                // }, 1200)

            }

            updateEnemyHPbar()

            if (enemyHPBar.value > 0) {
                setTimeout(enemyAttack, 1500)
            }




        }

    })
}

function enemyStatChange() {
    setTimeout(() => {
        tl.to(enemyPoke, {
            filter: "invert(100%) blur(5px)",
            duration: 1,
            onComplete() {
                applyDamage()
                if (enemy_already_attacked == true) {
                    setTimeout(endTurn, 2500)
                }

            }
        }).to(enemyPoke, {
            filter: "invert(0%)"
        })
    }, 500)
}

function myStatChange() {
    swapKO = false
    setTimeout(() => {
        tl.to(myPoke, {
            filter: "invert(100%) blur(5px)",
            duration: 1,
            onComplete() {
                if (ally_already_attacked == true) {
                    setTimeout(endTurn, 2500)
                }
            }
        }).to(myPoke, {
            filter: "invert(0%)"

        })
    }, 500)
}

function endBattle() {
    const pokeballImg = document.getElementById("pokeball")
    enemyPokeBox.classList.remove("tailwhipAnimation")
    myPokeBox.classList.remove("tailwhipAnimation")
    let lead_pokemon_index = mySquad.indexOf(lead_pokemon)
    let switched_out_pokemon = activePokemon
    activePokemon = lead_pokemon
    if (lead_pokemon_index !== -1) {
        mySquad.splice(lead_pokemon_index)
        mySquad.push(switched_out_pokemon)
    }
    // if (activePokemon.size == "small") {
    //     myPoke.width = "40%"
    //     console.log("changed size")
    // }
    // else if (activePokemon.size == "medium") {
    //     myPoke.width = "70%"
    // }

    // else if (activePokemon.size == "big") {
    //     myPoke.width = "80%"
    // }
    battle.initiated = false
    enemyPokeBox.style.top = "22%"
    enemyPoke.style.filter = "none"
    enemy_burn_nerf = false
    ally_burn_nerf = false
    kodPokemons.forEach((ko) => {
        mySquad.push(ko)
    })
    if (pokeballImg !== null) {
        pokeballImg.remove()
    }




    window.removeEventListener("click", endBattle)
    gsap.to("body", {
        opacity: 0,
        onComplete() {
            cancelAnimationFrame(animateBattleID)
            animate()
            canvas.style.opacity = 1
            battle_dialogue.style.display = "none"
            enemyStatus.style.display = "none"
            battle_options_panel.style.display = "none"
            battleHUD.style.display = "none"
            myBar.style.display = "initial"
            enemyBar.style.display = "initial"
            enemyPokeBox.style.display = "initial"
            myPokeBox.style.bottom = "25%"
            myPokeBox.style.left = "10%"
            myPokeBox.style.transform = "translate(-0%, -0%)"
            oppoPokemon.hp.current = oppoPokemon.hp.max
            oppoPokemon.status = "none"

            gsap.to("body", {
                opacity: 1,

            })

        }
    })
}


