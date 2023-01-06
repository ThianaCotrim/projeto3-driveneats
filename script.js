
        
        function selecionarOpcao(opcaoClicada) {
            const opcaoClicadaAnteriormente = document.querySelector('.opcoes .selecionado');
            if (opcaoClicadaAnteriormente !== null) {
            opcaoClicadaAnteriormente.classList.remove('selecionado');
            }
            const botao = document.querySelector(opcaoClicada)
            console.log (botao);
            botao.classList.add('selecionado')
        }


        function selecionarOpcaoRefri(opcaoClicada) {
            const opcaoClicadaAnteriormente = document.querySelector('.opcoes-refri .selecionado');
            if (opcaoClicadaAnteriormente !== null) {
            opcaoClicadaAnteriormente.classList.remove('selecionado');
            }
            const botao = document.querySelector(opcaoClicada)
            console.log (botao);
            botao.classList.add('selecionado')
        }


        function selecionarOpcaoSobre(opcaoClicada) {
            const opcaoClicadaAnteriormente = document.querySelector('.opcoes-sobremesa .selecionado');
            if (opcaoClicadaAnteriormente !== null) {
            opcaoClicadaAnteriormente.classList.remove('selecionado');
            }
            const botao = document.querySelector(opcaoClicada)
            console.log (botao);
            botao.classList.add('selecionado')

            if (document.querySelectorAll('.selecionado').length ===3) {
                          
                const mudar = document.querySelector('.cinza')
                mudar.innerHTML = "Fechar Pedido" 
                mudar.classList.add('verde')
            }  

            
            }  

            function whatsapp() {
                                            
                window.open("https://wa.me/55999999999?text=Olá%20seu%20pedido%20é:");
             
            }
   