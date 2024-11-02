$(document).ready(function() {
    // Evento para adicionar uma nova tarefa
    $('#task-form').submit(function(event) {
        event.preventDefault(); // Impede o envio do formulário

        // Obtém o valor da nova tarefa
        const taskText = $('#task-input').val();

        if (taskText) {
            // Adiciona a nova tarefa à lista
            $('#task-list').append('<li>' + taskText + '</li>');

            // Limpa o campo de entrada
            $('#task-input').val('');
        }
    });

    // Evento para cancelar a entrada de tarefa
    $('#cancel-task').click(function() {
        $('#task-input').val(''); // Limpa o campo de entrada
    });

    // Evento para marcar uma tarefa como concluída ao clicar
    $('#task-list').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });

    // Evento para limpar todas as tarefas
    $('#clear-tasks').click(function() {
        $('#task-list').empty();
    });
});
