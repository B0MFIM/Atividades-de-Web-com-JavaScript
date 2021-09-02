function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.getElementById("res")
    if (fano.value == 0 || Number(fano.value) > ano){
        window.alert("[ERRO] Verifique os dados e tente novamente [ERRO]")
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        if (fsex[0].checked){
            genero = "Homem"
            if (idade >= 0 && idade < 14){
                img.setAttribute("src", "imagens/menino00.jpeg")
            } else if (idade >= 14 && idade <= 24) {
                img.setAttribute("src", "imagens/HomemJovem00.jpeg")
            } else if (idade > 24 && idade <= 60){
                img.setAttribute("src", "imagens/HomemAdulto00.jpeg")
            } else {
                img.setAttribute("src", "imagens/idoso00.jpeg")
            }
        } else if (fsex[1].checked){
            genero = "Mulher"
            if (idade >= 0 && idade < 14){
                img.setAttribute("src", "imagens/menina00.jpeg")
            } else if (idade >= 14 && idade <= 24) {
                img.setAttribute("src", "imagens/MulherJovem00.jpeg")
            } else if (idade > 24 && idade <= 60){
                img.setAttribute("src", "imagens/MulherAdulta00.jpeg")
            } else {
                img.setAttribute("src", "imagens/idosa00.jpeg")
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${genero} com idade de ${idade} anos.`
        res.appendChild(img)
    }
}