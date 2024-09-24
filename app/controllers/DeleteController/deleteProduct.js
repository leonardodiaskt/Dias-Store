import { products } from "../../service/product.js";

// Eu estava usando a lógica para pegar o click do botão, selecionando a classe dele através do querySelectorAll e fazendo um forEach para
// cada um desses botões, estava usando o evento de target, mas nada acontecia, pois o querySelectorAll não estava pegando os botões criados
// dinâmicamente, pesquisei e uma solução que obtive foi o uso de escutar o evento de click do body em si, onde o click será registrado no
// lugar no elemento com a classe botao-deletar e a lógica será concluída. 

let productId = null;

document.addEventListener("click", (e) => {
    const closestTarget = e.target.closest(".botao-deletar");

    if(closestTarget){


        console.log("Fui clicado")
        const btnDel = closestTarget.closest('tr');
        console.log("Elemento TR", btnDel)
        const idDel = btnDel.dataset.id;
        console.log("Data id", idDel);

        if(idDel){
            productId = idDel;
            $('#deleteModal').modal('show');
        }


    }

});

document.querySelector(".confirm-delete").addEventListener("click", async() => {
    if (productId) {
        try {    
            // const id = idDel.dataset.id;
            await products.deleteProduct(productId);
            alert("Item excluído com sucesso!");

            const removeLinha = document.querySelector(`tr[data-id="${productId}"]`);
            if(removeLinha){
                removeLinha.remove();
            }
            
            $('#deleteModal').modal('hide');            
        }
        catch (err) {
            console.log(err)
        }
    }
})
