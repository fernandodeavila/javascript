function carregar(){
    var msg = window.document.getElementById(`msg`)
    var img = window.document.getElementById(`imagem`)
    var data = new Date()
    var hora = data.getHours
    msg.innerHTML = `Agora são ${hora} horas!`

    if (hora>=0 && hora<=12){
        //Bom dia
        img.src = 'fotomanha.png'
        document.body.style.backgroundColor = '#9FE7FF'
    } else if( hora<=18 && hora>12){
        //Boa Tarde
        img.src = 'fototarde.png'
        document.body.style.backgroundColor = '#FEDC00'
    } else{
        //Boa Noite
        img.src = 'fotonoite.png'
        document.body.style.backgroundColor = '#88361B'
    }
}