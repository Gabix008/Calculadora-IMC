var form = document.getElementById('form');

function limparVisor() {
    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';
}


form.addEventListener('submit', function(event){

    event.preventDefault()
    var peso = (document.getElementById('peso')).value
    var altura = (document.getElementById('altura')).value

    var imc = (peso/(altura*altura)).toFixed(2);
    var value = document.getElementById('value');
    var descricao = '';
    
    value.classList.add('atencao');

    document.getElementById('infos').classList.remove('hidden');
    
    if(imc <18.5){
        descricao="Cuidado! Você está abaixo do peso"
    } else if(imc >= 18.5 && imc <= 25){
        descricao = 'Você está no peso ideal!';
        value.classList.remove('atencao');
        value.classList.add('normal');

    }else if(imc > 25 && imc <=30){
        descricao='Cuidado! você está com sobrepeso';
    } else if(imc > 30 && imc <= 35){
        descricao = 'Cuidado! você está com obesidade moderada!';
    } else if(imc > 35 && imc <= 40){
        descricao = 'Cuidado! você está com obesidade severa!';
    } else{
        descricao = 'Cuidado! você está com obesidade morbida!';
    }
    
    value.textContent = imc.replace('.',',');
    document.getElementById('descricao').textContent = descricao

});





