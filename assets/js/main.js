form.addEventListener('submit', function(evento){
	evento.preventDefault()

	const resultado = document.getElementById('result')
	const QuantidadePizza = document.getElementById('QuantidadePizzas')
	const QuantidadeHidratacao = document.getElementById('QuantidadeHidrataçao')
	const qtdPizza = parseInt(QuantidadePizza.value);
	const ingredientes = {
 		sal : {nome: "Sal", valor: 6},
 		acucar : {nome : "Açúcar", valor: 5},
 		oleo : {nome : "Óleo", valor: 2},
 		farinha : {nome : "Farinha", valor: 250},
 		fermento : {nome : "Fermento", valor: 5},
		agua: {nome : "Água", valor : null},
	};
	const farinhaMax =  ingredientes.farinha.valor * qtdPizza
	ingredientes.agua.valor = parseInt(farinhaMax * (QuantidadeHidratacao.value / 100))
	resultado.innerHTML = ""

   
  for (const ingrediente of Object.values(ingredientes)) {
    const paragrafo = document.createElement('p');
    const unidade = (ingrediente.nome === "Água" || ingrediente.nome === "Óleo") ? "ml" : "g";
	
    const quantidade = (ingrediente.nome === "Farinha") ? farinhaMax : (ingrediente.nome === "Água" ? ingrediente.valor : ingrediente.valor * qtdPizza);

    paragrafo.textContent = `${ingrediente.nome}: ${quantidade}${unidade}`;
    resultado.append(paragrafo);
  }


});






