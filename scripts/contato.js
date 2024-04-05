$(document).ready(function () {
  $("#whatsapp").mask("(00) 00000-0000");

  // Evento que detecta quando o campo perde o foco
  $("#whatsapp").on('blur', function () {
    // Seleciona o label associado e aplica as propriedades CSS
    $(this).siblings('label').css({
      'top': '-1.25rem',
      'left': '0',
      'color': '#03e9f4',
      'font-size': '0.75rem'
    });
  });

  // Adiciona um ouvinte de eventos ao link 'Enviar'
  $(".form-box a[href='#']").on('click', function (event) {
    event.preventDefault(); // Impede o comportamento padrão do link

    // Seleciona o formulário mais próximo
    var form = $(this).closest('form');

    // Verifica se o formulário é válido
    if (form[0].checkValidity()) {
      alert("Fomulário enviado com sucesso!"); // Exibe a mensagem "Formulário enviado com sucesso!
      // Recarrega a página
      location.reload();
    } else {
      // Se não for válido, dispara a validação e mostra as mensagens de erro
      $('<input type="submit">').hide().appendTo(form).click().remove();
    }
  });
});

