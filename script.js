const email = document.querySelector("#event-email")
const buttonSave = document.querySelector("#buttonSave")
const nome = document.querySelector("#event-name")



buttonSave.addEventListener('click', function(event) {
    
    event.preventDefault()
    
    const inputNameCounter = nome.value.length
    const inputEmailCounter = email.value.length
    
    const day = document.querySelector(".day").value
    const month = document.querySelector(".month").value
    const year = document.querySelector(".year").value
    const civilState = document.querySelector("#solteiro")
    
    if (inputNameCounter <= 15) {
        alert("Digite seu nome completo")
    }else if (inputEmailCounter <= 10) {
        alert("Digite um e-mail válido")
    }else if (day > 31) {
        alert("Escolha um dia válido")
    }else if (month > 12) {
        alert("Digite um mês válido")
    }else if (year > 2008 || year < 1925){
        alert("Digite um ano válido")
    } 
    
    while(civilState) {
        if (year >= 2008) {
            alert("Você precisa ser maior de 15 anos para se cadastrar")
            return
        }else{
            alert(`Parabéns ${nome.value}, você concluiu seu cadastro com sucesso!`)
            return

        }
    }
    
})