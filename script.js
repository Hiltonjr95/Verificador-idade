function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var anoNasc = document.getElementById("txtano")
  var res = document.getElementById("res")
  if (anoNasc.value == 0 || anoNasc.value > ano) {
    window.alert("Verifique os dados e tente novamente")
  }
  else {

  
    var fsex = document.getElementsByName("radsex")
    var idade = ano - Number(anoNasc.value)
    var genero = ''
    var img = document.createElement("img")
    img.setAttribute("id", "foto")
    if(fsex[0].checked) {
        genero = "Homem"
        if(idade >=0 && idade <=10) {
            //criança
            img.setAttribute('src','menino.png')
        }
        else if(idade < 21) {
            //jovem
            img.setAttribute('src','garotojovem.png')
        }
        else if(idade < 60) {
         //adulto
         img.setAttribute('src','adultohomem.png')
        }
        else {
            //idoso
            img.setAttribute("src" , "homemidoso.png")
        }
    }
    else if (fsex[1].checked) {
         genero = "Mulher"
         if(idade >=0 && idade <=10) {
            //criança
            img.setAttribute('src' , 'menina.png')
        }
        else if(idade < 21) {
            //jovem
            img.setAttribute('src' , 'garotajovem.png')
        }
        else if(idade < 60) {
         //adulto
         img.setAttribute('src' , 'adultomulher.png')
        }
        else {
            //idoso
            img.setAttribute('src' , 'mulheridosa.png')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Voce é  ${genero} com ${idade} anos de idade`
    res.appendChild(img)
}
  
} 
