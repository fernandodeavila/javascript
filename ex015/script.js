function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano= document.getElementById (`textano`)
    var res = document.querySelector('div#res')

    if(fano.ariaValueMax.length == 0 || fano.value>ano){
        window.alert( `[ERRO] Verifique os dados e tente novamente!`)
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement('img')
        img.setAttribute('id',  'foto')
        
        if(fsex[0].checked){
            genero="homem"
            if(idade>=0&&idade<10){
                //criança
            }else if(idade<21){
                //jovem

            }else if(    )
        } else if(fsex[1].checked){
            genero = "mulher"
        }
    }
    res.style.textAlign = "center"
    res.innerHTML = `Detectamos ${genero} com ${idade}anos.`
}
