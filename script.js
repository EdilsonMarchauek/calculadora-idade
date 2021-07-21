     data = document.getElementById('data')
     res = document.getElementById('res')

    function calculaIdade(dataNasc){ 
        if(data.value.length == 0 || data.value.length < 8){
            res.innerHTML = "<br>Informe uma data de nascimento!"
        } else {
            var dataAtual = new Date();
            var anoAtual = dataAtual.getFullYear();
            var anoNascParts = dataNasc.split('-');
            var diaNasc =Number(anoNascParts[2]);
            var mesNasc =Number(anoNascParts[1]);
            var anoNasc =Number(anoNascParts[0]);
            var idade = anoAtual - anoNasc;
            var mesAtual = dataAtual.getMonth() + 1; 
            //Se mes atual for menor que o nascimento, nao fez aniversario ainda;  
            if(mesAtual < mesNasc){
            idade--; 
            } else {
            //Se estiver no mes do nascimento, verificar o dia
            if(mesAtual == mesNasc){ 
            if(new Date().getDate() < diaNasc ){ 
            //Se a data atual for menor que o dia de nascimento ele ainda nao fez aniversario
            idade--; 
            }
            }
            } 
        res.innerHTML = (`<br>${diaNasc}/${mesNasc}/${anoNasc}</strong>` + ` Idade: <strong>${idade}</strong>` + ` anos`); 
        data.value = ''  
       }
    }