const container = document.querySelector("#container")
let bloco = document.querySelector("#bloco img")
const gameover = document.querySelector("#gameover")
let pontuacao = document.querySelector("#pontuacao")

document.addEventListener("keydown", (e) => {
    const key = e.key
    
    if(key == "q") {
        bloco.classList.add("jump")
        setTimeout(() => {
            bloco.classList.remove("jump")
        }, 400);
    }
    
    if(key == "w") {
        bloco.classList.add("jumpHigher")
        setTimeout(() => {
            bloco.classList.remove("jumpHigher")
        }, 400);
    }

    if(key == "e") {
        bloco.setAttribute('src', 'img/stickmandeslizando.gif')
        bloco.style.height = "26%"
        setTimeout(() => {
            bloco.setAttribute('src', 'img/stickmancorrendo.gif')
            bloco.style.height = "28%"
        }, 550);
    }

    if(key == "r") {
        obstaculo1.style.left = ''
        obstaculo1.style.animation = ''
        obstaculo2.style.left = ''
        obstaculo2.style.animation = ''
        obstaculo3.style.left = ''
        obstaculo3.style.animation = ''
        obstaculo4.style.left = ''
        obstaculo4.style.animation = ''
        buraco.style.left = ''
        buraco.style.animation = ''
        paredeBuraco.style.left = ''
        paredeBuraco.style.animation = ''
        bloco.style.animation = ''
        bloco.style.left = ''
        bloco.style.bottom = ''
        bloco.style.top = ''
        bloco.style.display = "block"
        bloco.classList.remove("cair")
        gameover.innerHTML = ''
        document.querySelector("#restart").style.display = "none"
        obstaculo1.classList.remove("obstaculoMove")
        obstaculo2.classList.remove("obstaculoMove")
        obstaculo3.classList.remove("obstaculo3Move")
        obstaculo4.classList.remove("obstaculo4Move")
        buraco.classList.remove("buracoMove")
        paredeBuraco.classList.remove("paredeBuracoMove")
        zerarTime()
    }
})


function sistema() {


    const loop = setInterval(() => {
        
        const obstaculo1Position = obstaculo1.offsetLeft;
        const obstaculo2Position = obstaculo2.offsetLeft;
        const blocoPosition = +window.getComputedStyle(bloco).bottom.replace('px', '')
        

        const obstaculo3Position = obstaculo3.offsetLeft;
        const blocoPosition1 = +window.getComputedStyle(bloco).top.replace('px', '')

        const obstaculo4Position = obstaculo4.offsetLeft;

        const buracoPosition = buraco.offsetLeft;
        const paredeBuracoPosition = paredeBuraco.offsetLeft;
        console.log(obstaculo1Position)
        

        if(obstaculo1Position <= 94 && obstaculo1Position >= 12 && blocoPosition <= 115) {

            obstaculo1.style.animation = "none"
            obstaculo1.style.left = `${obstaculo1Position}px`
            obstaculo2.style.animation = "none"
            obstaculo2.style.left = `${obstaculo2Position}px`

            obstaculo3.style.animation = "none"
            obstaculo3.style.left = `${obstaculo3Position}px`

            buraco.style.animation = "none"
            buraco.style.left = `${buracoPosition}px`
            paredeBuraco.style.animation = "none"
            paredeBuraco.style.left = `${paredeBuracoPosition}px`

            obstaculo4.style.animation = "none"
            obstaculo4.style.left = `${obstaculo4Position}px`

            
            
         
            bloco.setAttribute('src', "img/stickmancorrendo.gif")
            bloco.style.height = "28%"
            bloco.style.bottom = `${blocoPosition}px`
            bloco.style.animation = "none"
            gameover.innerHTML = "GAME OVER" 
            document.querySelector("#restart").style.display = "block"
        
        }
        
        if(obstaculo2Position <= 94 && obstaculo2Position >= 45 && blocoPosition >= 150) {

            obstaculo1.style.animation = "none"
            obstaculo1.style.left = `${obstaculo1Position}px`
            obstaculo2.style.animation = "none"
            obstaculo2.style.left = `${obstaculo2Position}px`

            obstaculo3.style.animation = "none"
            obstaculo3.style.left = `${obstaculo3Position}px`

            buraco.style.animation = "none"
            buraco.style.left = `${buracoPosition}px`
            paredeBuraco.style.animation = "none"
            paredeBuraco.style.left = `${paredeBuracoPosition}px`

            obstaculo4.style.animation = "none"
            obstaculo4.style.left = `${obstaculo4Position}px`

            bloco.setAttribute('src', "img/stickmancorrendo.gif")
            bloco.style.height = "28%"
            bloco.style.animation = "none"
            bloco.style.bottom = `${blocoPosition}px`
            gameover.innerHTML = "GAME OVER" 
            document.querySelector("#restart").style.display = "block"
            
        }
    
        if(obstaculo3Position <= 95 && obstaculo3Position >= 0 && blocoPosition1 < 170.531) {
        
            obstaculo3.style.animation = "none"
            obstaculo3.style.left = `${obstaculo3Position}px`

            obstaculo1.style.animation = "none"
            obstaculo1.style.left = `${obstaculo1Position}px`
            obstaculo2.style.animation = "none"
            obstaculo2.style.left = `${obstaculo2Position}px`

            buraco.style.animation = "none"
            buraco.style.left = `${buracoPosition}px`
            paredeBuraco.style.animation = "none"
            paredeBuraco.style.left = `${paredeBuracoPosition}px`

            obstaculo4.style.animation = "none"
            obstaculo4.style.left = `${obstaculo4Position}px`

            bloco.setAttribute('src', "img/stickmancorrendo.gif")
            bloco.style.height = "28%"
            bloco.style.animation = "none"
            bloco.style.top = `${blocoPosition1}px`
            gameover.innerHTML = "GAME OVER" 
            document.querySelector("#restart").style.display = "block"
            
        }

        if(obstaculo4Position <= 94 && obstaculo4Position >= 12 && blocoPosition <= 190) {

            obstaculo4.style.animation = "none"
            obstaculo4.style.left = `${obstaculo4Position}px`

            obstaculo1.style.animation = "none"
            obstaculo1.style.left = `${obstaculo1Position}px`
            obstaculo2.style.animation = "none"
            obstaculo2.style.left = `${obstaculo2Position}px`

            obstaculo3.style.animation = "none"
            obstaculo3.style.left = `${obstaculo3Position}px`

            buraco.style.animation = "none"
            buraco.style.left = `${buracoPosition}px`
            paredeBuraco.style.animation = "none"
            paredeBuraco.style.left = `${paredeBuracoPosition}px`

            bloco.setAttribute('src', "img/stickmancorrendo.gif")
            bloco.style.height = "28%"
            bloco.style.bottom = `${blocoPosition}px`
            bloco.style.animation = "none"
            gameover.innerHTML = "GAME OVER" 
            document.querySelector("#restart").style.display = "block"        
        }

        if(buracoPosition <= 45 && buracoPosition >= -210 && blocoPosition <= 55 ) {

            buraco.style.animation = "none"
            buraco.style.left = `${buracoPosition}px`
            paredeBuraco.style.animation = "none"
            paredeBuraco.style.left = `${paredeBuracoPosition}px`

            
            obstaculo3.style.left = `${obstaculo3Position}px`

            obstaculo1.style.animation = "none"
            obstaculo1.style.left = `${obstaculo1Position}px`
            obstaculo2.style.animation = "none"
            obstaculo2.style.left = `${obstaculo2Position}px`

            obstaculo4.style.animation = "none"
            obstaculo4.style.left = `${obstaculo4Position}px`

            bloco.classList.add("cair")
            bloco.style.bottom = '-100px'
            
            gameover.innerHTML = "GAME OVER"  
            document.querySelector("#restart").style.display = "block"
            
        }

        if(paredeBuracoPosition <= 45 && paredeBuracoPosition >= -210 && blocoPosition >= 140) {

            paredeBuraco.style.animation = "none"
            paredeBuraco.style.left = `${paredeBuracoPosition}px`

            obstaculo1.style.animation = "none"
            obstaculo1.style.left = `${obstaculo1Position}px`
            obstaculo2.style.animation = "none"
            obstaculo2.style.left = `${obstaculo2Position}px`

            obstaculo3.style.animation = "none"
            obstaculo3.style.left = `${obstaculo3Position}px`

            buraco.style.animation = "none"
            buraco.style.left = `${buracoPosition}px`

            obstaculo4.style.animation = "none"
            obstaculo4.style.left = `${obstaculo4Position}px`

            bloco.setAttribute('src', "img/stickmancorrendo.gif")
            bloco.style.height = "28%"
            bloco.style.animation = "none"
            bloco.style.bottom = `${blocoPosition}px`
            gameover.innerHTML = "GAME OVER" 
            document.querySelector("#restart").style.display = "block"
            
        }



    }, 10)

    

    const random = setInterval(() => {
        const num = parseInt(Math.random() * 4) +1
    

        if(num === 1) {
            obstaculo1.classList.add("obstaculoMove")
            obstaculo2.classList.add("obstaculoMove")
            setTimeout(() => {
                obstaculo1.classList.remove("obstaculoMove")
                obstaculo2.classList.remove("obstaculoMove")
            },800);
        } 
        else if (num === 2) {
            obstaculo3.classList.add("obstaculo3Move")
            setTimeout(() => {
                obstaculo3.classList.remove("obstaculo3Move")
            },800);
        }
        else if(num == 3) {
            obstaculo4.classList.add("obstaculo4Move")
            setTimeout(() => {
                obstaculo4.classList.remove("obstaculo4Move")
            },800);
        }
        else if(num == 4) {
            buraco.classList.add("buracoMove")
            paredeBuraco.classList.add("paredeBuracoMove")
            setTimeout(() => {
                buraco.classList.remove("buracoMove")
                paredeBuraco.classList.remove("paredeBuracoMove")
            },800);
        }

    }, 810);


    
}

function time () {
    const pontos = setInterval(() => {
        let score = 0; 
        if(gameover.innerHTML == "") {
            
            score++
            pontuacao.innerHTML = +pontuacao.innerHTML + score
            
        } 
    }, 150);
}

function zerarTime () {
    pontuacao.innerHTML = 0;
}




document.querySelector("#start").addEventListener("click", () => {

 
    document.querySelector("#start").style.display = "none"
    sistema()
    time()
})


document.querySelector("#restart").addEventListener("click", () => {
   
    obstaculo1.style.left = ''
    obstaculo1.style.animation = ''
    obstaculo2.style.left = ''
    obstaculo2.style.animation = ''
    obstaculo3.style.left = ''
    obstaculo3.style.animation = ''
    obstaculo4.style.left = ''
    obstaculo4.style.animation = ''
    buraco.style.left = ''
    buraco.style.animation = ''
    paredeBuraco.style.left = ''
    paredeBuraco.style.animation = ''
    bloco.style.animation = ''
    bloco.style.left = ''
    bloco.style.bottom = ''
    bloco.style.top = ''
    bloco.style.display = "block"
    bloco.classList.remove("cair")
    gameover.innerHTML = ''
    document.querySelector("#restart").style.display = "none"
    obstaculo1.classList.remove("obstaculoMove")
    obstaculo2.classList.remove("obstaculoMove")
    obstaculo3.classList.remove("obstaculo3Move")
    obstaculo4.classList.remove("obstaculo4Move")
    buraco.classList.remove("buracoMove")
    paredeBuraco.classList.remove("paredeBuracoMove")
    zerarTime()
})


document.querySelector("#info").addEventListener("click", () => {
        document.querySelector("#infocontainer").classList.toggle("info")
})

