function calcular() {
            const alertId = document.getElementById('alert-container-id')
            const alertX = document.getElementById('alert-x')
            
            let alertInfo = document.getElementById('alert-inform');
            let tamanhoPelícula = document.getElementById('text-pelicula').value;
            let quantidadeProduzida = parseInt(document.getElementById('number-qtdPelicula').value);
            

            //Pegando os dados dos P
            let qtdCaixas = document.getElementById("p-qtdCaixas");
            let qtdBaias = document.getElementById("p-qtdBaias");
            let qtdRolos = document.getElementById('p-qtdRolos');
            let qtdCortes = document.getElementById('p-qtdCorte');
            let qtdSobras = document.getElementById("p-qtdSobras")
            //Variaveis para Execução do Calculo. \\NÃO QUEBRE PORRA!\/
            let baiaMax = 1272;
            let peliculaMax = 4;
            let roloTamanho = 3000;
            
            //Calculos 
            let largura = parseInt(tamanhoPelícula.split('x')[1]);
            let calculoBaia = Math.ceil(quantidadeProduzida / baiaMax);
            let calculoCaixa = Math.ceil(quantidadeProduzida / peliculaMax);
            let calculoRolo = Math.ceil(quantidadeProduzida * largura / roloTamanho);
            
            //Array para Validação dos Tamanhos
            const tamanhosValidos = ["95x55", "160x110", "110x55", "130x70", "85x60", 
                                    "150x90", "180x110", "150x100", "115x65", "125x65", 
                                    "105x55", "140x40", "170x50"]
            
            if (!tamanhoPelícula || !quantidadeProduzida || isNaN(quantidadeProduzida)) {
                alertInfo.innerHTML = 'Por favor, preencha todos os campos corretamente!';
                alertId.style.display = "block";
                
                alertX.addEventListener("click", function(){
                alertId.style.display = "none"

                
               })
               return
            
            }
            
            if(!tamanhosValidos.includes(tamanhoPelícula)){
                alertInfo.innerHTML = "Por favor, Informe um tamanho de Pelicula existente na Planilha!";
                 alertId.style.display = "block";

               alertX.addEventListener("click", function(){
                alertId.style.display = "none"
               })

            }

            if(quantidadeProduzida % 4 !== 0){
                alertInfo.innerHTML = "Por favor, Informe somente multiplos de 4!";
                 alertId.style.display = "block";

                 alertX.addEventListener("click", function(){
                alertId.style.display = "none"
               })

            }

            function calculo(){
                //Manipulando o DOM.
                    let altura = parseInt(tamanhoPelícula.split("x")[1]); // pega a altura
                   
                    qtdBaias.innerHTML = (calculoBaia);
                    qtdCaixas.innerHTML = (calculoCaixa);
                    qtdRolos.innerHTML = (calculoRolo);
                    
                    //Aqui faz o quantidade por Corte de Altura de Tamanho de Forma automatica.
                   if (altura < 110) {
                    qtdCortes.innerHTML = 2;
                        } else {
                     calculoFila = 1;
                    qtdCortes.innerHTML = 1;
                        }
                    //Aqui faz o calculo de Baia de forma automatica.
                    
                    if(quantidadeProduzida >= baiaMax)
                    {
                    calculoBaia + 1    

                    }
               
            }
            if(tamanhosValidos.includes(tamanhoPelícula)){
                calculo();
            }
        }
      
       
        // Adiciona o evento de clique no botão para executar a função
        document.getElementById('send').addEventListener('click', calcular);