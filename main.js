// Adicionamos nosso código dentro de uma função anônima para evitar
// variáveis globais.
(function() {
  // Elemento principal do formulário
  const contactForm = document.getElementById('contact');

  // Campos do formulário
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  // "addEventListener" instrui o navegador a executar uma função sempre
  // que um evento específico acontece. Nesse caso, a função abaixo será
  // executada toda vez que o botão de envio for pressionado.
  contactForm.addEventListener('submit', function() {
    // Obtendo as entradas dos inputs
    const nameValue = nameInput.value;
    const emailValue = emailInput.value;
    const messageValue = messageInput.value;

    // Obtendo o tamanho das strings
    const nameLength = nameValue.length;
    const emailLength = emailValue.length;
    const messageLength = messageValue.length;

    // Adicionando condições para preenchimento dos campos
    if (nameLength != 0 && emailLength != 0 && messageLength !=0 && emailValue.includes('@')) {
      window.alert(`Olá! ${nameValue}\nAgradecemos a sua mensagem!!!`);
    } else {
      var unfilleds = ''; //String vazia para receber os campos não preenchidos
      if (nameLength == 0){
        unfilleds += '\n Nome: ' + nameValue;
      } 
      if (emailLength == 0 || !emailValue.includes('@')){
        unfilleds += '\n Email: ' + emailValue;
      }
      if (messageLength == 0) {
        unfilleds += '\n Mensagem: ' + messageValue;
      }
      window.alert(`Você não preencheu os seguintes campos corretamente:${unfilleds} `)
    }
  });
})();
