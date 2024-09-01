// Este código vai rodar quando o HTML estiver completamente carregado
document.addEventListener("DOMContentLoaded", function () {
    // Seleciona o formulário, a lista de itens, o rodapé e o botão de fechar do rodapé
    const form = document.querySelector("form");
    const items = document.querySelector("ul");
    const footer = document.querySelector("footer");
    const closeFooterButton = document.querySelector("#close-footer");

    // Função para mostrar o rodapé
    function showFooter() {
        footer.classList.add("visible");
    }

    // Função para ocultar o rodapé
    function hideFooter() {
        footer.classList.remove("visible");
    }

    // Adiciona um evento de clique ao botão da lixeira no item inicial
    const initialTrashButton = document.querySelector("#trash");
    initialTrashButton.addEventListener("click", function () {
        // Remove o item da lista quando o botão da lixeira é clicado
        initialTrashButton.closest("li").remove();
        // Mostra o rodapé
        showFooter();
    });

    // Adiciona um evento quando o formulário é enviado
    form.addEventListener("submit", function (event) {
        // Previne o comportamento padrão do formulário (não recarregar a página)
        event.preventDefault();

        // Obtém o valor do campo de texto do formulário
        const itemNameValue = document.querySelector("#item").value;

        // Cria um novo elemento de lista
        const newItem = document.createElement("li");
        // Adiciona a classe para estilizar o novo item
        newItem.classList.add("list-container");

        // Cria uma nova caixa de seleção
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("checkbox");

        // Cria um novo parágrafo para o nome do item
        const itemName = document.createElement("p");
        // Define o texto do item com o valor obtido do formulário
        itemName.textContent = itemNameValue;

        // Cria um novo botão para a lixeira
        const trashButton = document.createElement("button");
        trashButton.id = "trash";

        // Cria um novo ícone para o botão da lixeira
        const trashIcon = document.createElement("img");
        trashIcon.src = "./images/Frame.svg";
        trashIcon.alt = "trash";

        // Adiciona o ícone de lixeira ao botão
        trashButton.appendChild(trashIcon);

        // Adiciona um evento de clique ao botão da lixeira
        trashButton.addEventListener("click", function () {
            // Remove o item da lista quando o botão da lixeira é clicado
            newItem.remove();
            // Mostra o rodapé
            showFooter();
        });

        // Adiciona a caixa de seleção, o nome do item e o botão da lixeira ao novo item
        newItem.appendChild(checkbox);
        newItem.appendChild(itemName);
        newItem.appendChild(trashButton);

        // Adiciona o novo item à lista
        items.appendChild(newItem);

        // Limpa o campo de texto do formulário após adicionar o item
        document.querySelector("#item").value = "";
    });

    // Adiciona um evento de clique ao botão de fechar no rodapé
    closeFooterButton.addEventListener("click", function () {
        // Oculta o rodapé quando o botão de fechar é clicado
        hideFooter();
    });
});
