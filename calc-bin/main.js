      //efeito dos forms
      document.addEventListener("DOMContentLoaded", function() {
        const forms = document.querySelectorAll('.form-container form');
      
        forms.forEach(form => {
          form.addEventListener('mouseover', () => {
            forms.forEach(otherForm => {
              if (otherForm !== form) {
                otherForm.style.opacity = 0.5;
              }
            });
          });
      
          form.addEventListener('mouseout', () => {
            forms.forEach(otherForm => {
              otherForm.style.opacity = 1;
            });
          });
        });
      });
      
//calculos
      function calcular(operacao) {
        let binario1, binario2, resultado;
    
        if (operacao === 'soma') {
            // Captura os valores dos inputs para a soma
            binario1 = document.getElementById('input-binario1').value;
            binario2 = document.getElementById('input-binario2').value;
    
            // Verifica se os números binários são válidos
            if (!isBinary(binario1) || !isBinary(binario2)) {
                alert('Por favor, insira números binários válidos.');
                return;
            }
    
            // Converte os números binários para inteiros, soma e converte o resultado de volta para binário
            resultado = (parseInt(binario1, 2) + parseInt(binario2, 2)).toString(2);
    
            // Exibe o resultado da soma
            document.getElementById('resultado-soma').value = resultado;
        } else if (operacao === 'multiplicacao') {
            // Captura os valores dos inputs para a multiplicação
            binario1 = document.getElementById('input-binario3').value;
            binario2 = document.getElementById('input-binario4').value;
    
            // Verifica se os números binários são válidos
            if (!isBinary(binario1) || !isBinary(binario2)) {
                alert('Por favor, insira números binários válidos.');
                return;
            }
    
            // Converte os números binários para inteiros, multiplica e converte o resultado de volta para binário
            resultado = (parseInt(binario1, 2) * parseInt(binario2, 2)).toString(2);
    
            // Exibe o resultado da multiplicação
            document.getElementById('resultado-multiplicacao').value = resultado;
        }
    }
    
    function limpar(operacao) {
        if (operacao === 'soma') {
            document.getElementById('input-binario1').value = '';
            document.getElementById('input-binario2').value = '';
            document.getElementById('resultado-soma').value = '';
        } else if (operacao === 'multiplicacao') {
            document.getElementById('input-binario3').value = '';
            document.getElementById('input-binario4').value = '';
            document.getElementById('resultado-multiplicacao').value = '';
        }
    }
    
    // Função para verificar se um número é binário
    function isBinary(num) {
        return /^[01]+$/.test(num);
    }
    