let altura = 0
let largura = 0
let vidas = 1
let tempo = 15
let criarMoscaTempo = 1500

let nivel = window.location.search
nivel = nivel.replace('?', '')

if (nivel === 'normal') {
    let criarMoscaTempo = 1000
} else if(nivel === 'dificil'){
    let criarMoscaTempo = 750
} else if (nivel === 'booba') {
    let criarMoscaTempo = 1
}


//Função criada para passar os valores de largura e altura da janela
function ajustarTamanhoBrowser() {
    altura = window.innerHeight //altura recebe o valor da altura da pág
    largura = window.innerWidth; //largura recebe o valor da largura da pág
    console.log(`Altura: ${altura} | Largura ${largura}`) //informa no console a altura e largura
}

ajustarTamanhoBrowser()

let cronometro = setInterval(function () {
    tempo -= 1
    if (tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criarMosca)
        window.location.href = 'vitoria.html'
        console.log('vitoria')
    }else{
    document.getElementById('tempo').innerHTML = tempo
    }
},1000)

//Função para randomizar a posição da imagem mosca
function posicaoRandom() {
    
    //Remover mosca anterior (caso exista)
    if (document.getElementById('mosca')) {//verifica se o elemento com id 'mosca' existe, como ele não existe na primeira execução, o if ira seguir
        document.getElementById('mosca').remove() //Já na segunda verificação, o elemento já foi criado e ira cair na condição do if, assim removendo o elemento
        if (vidas > 5) {
            window.location.href = 'fim_de_jogo.html'
        }else{
        document.getElementById('v'+vidas).src = 'coracao_vazio.png'
        vidas++
        }
    }
    


    let posX = Math.floor(Math.random() * largura) - 90 //variável posX recebe a largura random da pág web
    let posY = Math.floor(Math.random() * altura) - 90 //variável posY recebe a altura random da pág web

    posX = posX < 0 ? 0 : posX //Caso a posX for menor que 0, recebe 0 e caso for false, recebe o seu proprio valor
    posY = posY < 0 ? 0 : posY //Caso a posY for menor que 0, recebe 0 e caso for false, recebe o seu proprio valor

    console.log(posX, posY) //informa a largura e altura no console

    
    let mosca = document.createElement('img') //criar elemento html
    mosca.src = "mosca.png" //manipula o elemento criado, passando o url da imagem mosca.png
    mosca.className = `${tamanhoAleatorio()} ${ladoRandom()}` //insere o nome da classe para os possiveis casos informados nas duas funções
    mosca.style.left = posX + 'px' //manipula o style left, passando a posição da largura
    mosca.style.top = posY + 'px' //manipula o style top, passando a posição da altura
    mosca.style.position = 'absolute' //informa que o estilo da posição é absolute
    mosca.id = 'mosca'
    mosca.onclick = function() {
        console.log("clicou")
        this.remove()
    }

    document.body.appendChild(mosca) //insere uma classe filho para uma elemento html, no caso, mosca
    
}

//Função para variar o tamanho da img mosca
function tamanhoAleatorio() {
    let classe = Math.floor(Math.random() * 3) //randomiza um numero entre 0-1-2
    switch (classe)
    {
        case 0://caso o número seja 0, irá entrar neste caso
            return 'mosca1'//retorna o estilo da img mosca1
        
        case 1://caso o número seja 1, irá entrar neste caso
            return 'mosca2'//retorna o estilo da img mosca2
        
        case 2://caso o número seja 2, irá entrar neste caso
            return 'mosca3'//retorna o estilo da img mosca3
        
    }
    console.log(classe)//retorna no console qual foi o caso selecionado
}

//Função para randomizar para onde a mosca está olhando
function ladoRandom() {
    let classe = Math.floor(Math.random() * 2) //randomiza um numero entre 0-1
    switch (classe)
    {
        case 0: //caso o número seja 0, irá entrar neste caso
            return 'ladoA'//retorna o estilo da img ladoA
        
        case 1:
            return 'ladoB'//retorna o estilo da img ladoB
    }
}



