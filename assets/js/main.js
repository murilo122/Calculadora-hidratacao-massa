form.addEventListener('submit', function(evento){
	evento.preventDefault()

	const resultado = document.getElementById('result')
	const QuantidadePizza = document.getElementById('QuantidadePizzas')
	const QuantidadeHidratacao = document.getElementById('QuantidadeHidrataçao')
	const sal = 6
	const acucar = 5
	const oleo = 2
	const farinha = 250
	const fermento = 5 

	function ObterQuantidadeAgua (){
		const farinhaMax =  farinha * QuantidadePizza.value
		const porcentagemHidratacao = farinhaMax * (QuantidadeHidratacao.value / 100)
		return porcentagemHidratacao
	}

  const paragrafoFarinha = document.createElement('p')
	paragrafoFarinha.textContent =  `Farinha: ${farinha * QuantidadePizza.value}g`
	resultado.append(paragrafoFarinha)

	const paragrafoAgua = document.createElement('p')
	paragrafoAgua.textContent =  `Água: ${ObterQuantidadeAgua()}ml`
	resultado.append(paragrafoAgua)

	const paragrafoSal = document.createElement('p')
	paragrafoSal.textContent =  `Sal: ${sal * QuantidadePizza.value}g`
	resultado.append(paragrafoSal)

	const paragrafoAcucar = document.createElement('p')
	paragrafoAcucar.textContent =  `Açúcar: ${acucar * QuantidadePizza.value}g`
	resultado.append(paragrafoAcucar)

	const paragrafoFermento = document.createElement('p')
	paragrafoFermento.textContent =  `Fermento: ${fermento * QuantidadePizza.value}g`
	resultado.append(paragrafoFermento)

	const paragrafoOleo = document.createElement('p')
	paragrafoOleo.textContent =  `Óleo: ${oleo * QuantidadePizza.value}ml`
	resultado.append(paragrafoOleo)



});




