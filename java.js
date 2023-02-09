function imc() {
    let nome = document.querySelector("#nome").value
    let altura = document.querySelector("#altura").value
    let peso = document.querySelector("#peso").value
    let resultado = document.querySelector("#resultado")

    if (nome !== '' && altura !== '' && peso !== '') {
        //peso
        valorimc = peso / (altura * altura).toFixed(1)
        let tipoimc

        if (valorimc = 18.5) {
            tipoimc = 'abaixo do peso'
        } else if (valorimc = 25) {
            tipoimc = 'peso ideal'
        } else if (valorimc < 30) {
            tipoimc = 'Um Pouco Acima Do Peso'
        } else if (valorimc < 35) {
            tipoimc = 'obesidade grau 1'
        } else if (valorimc < 40) {
            tipoimc = 'obesidade grau 2'
        } else {
            tipoimc = 'obesidade grau 3'
        }
        resultado.textContent = `${nome} Seu IMC é ${valorimc} e você esta ${tipoimc}`
    } else {
        resultado.textContent = `Preencha todos os campos`
    }

}

