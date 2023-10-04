// Função para mostrar o menu selecionado
function mostrarMenu() {
 // Seleciona a entrada, o prato principal e a sobremesa escolhidas
  const entradaSelecionada = document.querySelector('input[name="entrada"]:checked');
  const pratoPrincipalSelecionado = document.querySelector('input[name="pratoPrincipal"]:checked');
  const sobremesaSelecionada = document.querySelector('input[name="sobremesa"]:checked');

  // Verifica se todas as seleções foram feitas, caso não, dispara um alerta
  if (!entradaSelecionada || !pratoPrincipalSelecionado || !sobremesaSelecionada) {
    alert('Por favor, selecione uma entrada, um prato principal e uma sobremesa.');
    return;
  }

  // Seleciona a lista onde o menu será exibido
  const menuItens = document.getElementById('menuItens');
  // Limpa qualquer conteúdo existente
  menuItens.innerHTML = '';

  // Cria elementos de imagem e texto para cada parte do menu selecionado. O mesmo acontece na parte do prato principal e sobremesa
  const entradaImagem = document.createElement('img');
  entradaImagem.src = entradaSelecionada.parentElement.querySelector('img').src;
  entradaImagem.alt = 'Entrada Escolhida';
  entradaImagem.width = 150;
  entradaImagem.height = 100;
  menuItens.appendChild(entradaImagem);

  const entradaItem = document.createElement('li');
  entradaItem.textContent = 'Entrada: ' + entradaSelecionada.value;
  menuItens.appendChild(entradaItem);

  const pratoImagem = document.createElement('img');
  pratoImagem.src = pratoPrincipalSelecionado.parentElement.querySelector('img').src;
  pratoImagem.alt = 'Prato Principal Escolhido';
  pratoImagem.width = 150;
  pratoImagem.height = 100;
  menuItens.appendChild(pratoImagem);

  const pratoItem = document.createElement('li');
  pratoItem.textContent = 'Prato Principal: ' + pratoPrincipalSelecionado.value;
  menuItens.appendChild(pratoItem);

  const sobremesaImagem = document.createElement('img');
  sobremesaImagem.src = sobremesaSelecionada.parentElement.querySelector('img').src;
  sobremesaImagem.alt = 'Sobremesa Escolhida';
  sobremesaImagem.width = 150;
  sobremesaImagem.height = 100;
  menuItens.appendChild(sobremesaImagem);

  const sobremesaItem = document.createElement('li');
  sobremesaItem.textContent = 'Sobremesa: ' + sobremesaSelecionada.value;
  menuItens.appendChild(sobremesaItem);

  // Torna a div visível para mostrar o menu selecionado
  const menuSelecionadoDiv = document.getElementById('menuSelecionado');
  menuSelecionadoDiv.style.display = 'block';
}
