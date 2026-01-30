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
              
            binario1 = document.getElementById('input-binario1').value;
            binario2 = document.getElementById('input-binario2').value;
    
            if (!isBinary(binario1) || !isBinary(binario2)) {
                alert('Por favor, insira números binários válidos.');
                return;
            }
    
            resultado = (parseInt(binario1, 2) + parseInt(binario2, 2)).toString(2);
    
            document.getElementById('resultado-soma').value = resultado;
        } else if (operacao === 'multiplicacao') {
              
            binario1 = document.getElementById('input-binario3').value;
            binario2 = document.getElementById('input-binario4').value;
    
            if (!isBinary(binario1) || !isBinary(binario2)) {
                alert('Por favor, insira números binários válidos.');
                return;
            }
    
            resultado = (parseInt(binario1, 2) * parseInt(binario2, 2)).toString(2);
              
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
    
    function isBinary(num) {
        return /^[01]+$/.test(num);
    }
    
