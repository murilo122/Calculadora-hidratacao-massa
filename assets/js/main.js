form.addEventListener('submit', function(evento){
   evento.preventDefault()

   const resultado = document.getElementById('result')
   const QuantidadePizza = document.getElementById('QuantidadePizzas')
   const QuantidadeHidratacao = document.getElementById('QuantidadeHidrataçao')
   const sal = 6
   const acucar = 5
   const oleo = 10
   const farinha = 250
   const fermento = 5 

   function ObterQuantidadeAgua (){
      const farinhaMax =  farinha * QuantidadePizza.value
      const porcentagemHidratacao = farinhaMax * (QuantidadeHidratacao.value / 100)
      return porcentagemHidratacao
   }

   resultado.innerHTML= `Água: ${ObterQuantidadeAgua()}ml`

});




