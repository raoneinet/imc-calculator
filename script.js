document.querySelector("button").addEventListener("click", ()=>{
    calcImc()
})

function calcImc(){
    let age = document.querySelector(".age")
    let height = document.querySelector(".height")
    let weight = document.querySelector(".weight")

    if(age.value.length == 0 || height.value.length == 0 || weight.value.length == 0){
        alert("É preciso preencher os campos")
        return
    }else{

        let showResult = document.querySelector(".answer")

        let MetricHeight = Number(height.value) / 100

        let imc = (Number(weight.value) / MetricHeight**2).toFixed(1)

        if(imc <= 18.5){
            showResult.innerHTML = `<p>Sua idade é ${Number(age.value)} anos e com IMC <strong>${imc}</strong>. Classificado em <strong>Magreza</strong></p>`
        }else if(imc > 18.5 && imc <= 24.9){
            showResult.innerHTML = `<p>Sua idade é ${Number(age.value)} anos e com IMC <strong>${imc}</strong>. Classificado em <strong>Normal</strong></p>`
        }else if(imc > 25 && imc <= 29.9){
            showResult.innerHTML = `<p>Sua idade é ${Number(age.value)} anos e com IMC <strong>${imc}</strong>. Classificado em <strong>Sobrepeso</strong></p>`
        }else if(imc > 30 && imc <= 34.9){
            showResult.innerHTML = `<p>Sua idade é ${Number(age.value)} anos e com IMC <strong>${imc}</strong>. Classificado em <strong>Obesidade grau I</strong></p>`
        }else if(imc > 35 && imc <= 39.9){
            showResult.innerHTML = `<p>Sua idade é ${Number(age.value)} anos e com IMC <strong>${imc}</strong>. Classificado em <strong>Obesidade grau II</strong></p>`
        }else{
            showResult.innerHTML = `<p>Sua idade é ${Number(age.value)} anos e com IMC <strong>${imc}</strong>. Classificado em <strong>Obesidade grau III</strong></p>`
        }

        return
    }
}