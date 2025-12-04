form.addEventListener('submit', function(evento){
	evento.preventDefault()

	const resultado = document.getElementById('result')
	const QuantidadePizza = document.getElementById('QuantidadePizzas')
	const QuantidadeHidratacao = document.getElementById('QuantidadeHidrataçao')
	const qtdPizza = QuantidadePizza.value;
	const sal = 6 
	const acucar = 5
	const oleo = 2
	const farinha = 250
	const fermento = 5 
	const farinhaMax =  farinha * qtdPizza
	
	function ObterQuantidadeAgua (){
		const porcentagemHidratacao = farinhaMax * (QuantidadeHidratacao.value / 100)
		return porcentagemHidratacao
	}

  const paragrafoFarinha = document.createElement('p')
	paragrafoFarinha.textContent =  `Farinha: ${farinhaMax}g`
	resultado.append(paragrafoFarinha)

	const paragrafoAgua = document.createElement('p')
	paragrafoAgua.textContent =  `Água: ${ObterQuantidadeAgua()}ml`
	resultado.append(paragrafoAgua)

	const paragrafoSal = document.createElement('p')
	paragrafoSal.textContent =  `Sal: ${sal * qtdPizza}g`
	resultado.append(paragrafoSal)

	const paragrafoAcucar = document.createElement('p')
	paragrafoAcucar.textContent =  `Açúcar: ${acucar * qtdPizza}g`
	resultado.append(paragrafoAcucar)

	const paragrafoFermento = document.createElement('p')
	paragrafoFermento.textContent =  `Fermento: ${fermento * qtdPizza}g`
	resultado.append(paragrafoFermento)

	const paragrafoOleo = document.createElement('p')
	paragrafoOleo.textContent =  `Óleo: ${oleo * qtdPizza}ml`
	resultado.append(paragrafoOleo)



});







