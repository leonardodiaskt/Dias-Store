import { products } from "../../service/product.js";

(async() => {
    const url = new URL(window.location);

    const id = url.searchParams.get('id');

    console.log(id)

    const inputTitle = document.querySelector("#titleProduct");
    const inputSubtitle = document.querySelector("#subtitleProduct");
    const inputDescription = document.querySelector("#descriptionProduct");
    const inputURLimg = document.querySelector("#imgProduct");
    

    try{
        const dados = await products.listProduct(id);
        inputTitle.value = dados.titulo;
        inputSubtitle.value = dados.subtitulo;
        inputDescription.value = dados.descricao;
        inputURLimg.value = dados.img;
    }
    catch(err){
        console.log(err)
    };

    const form = document.getElementById("updateProduct-form");
    
    form.addEventListener("submit", async(event) => {
        event.preventDefault();
        
        // console.log("Fui clicado")
        // alert("Fui clicado")
        try{
            await products.updateProduct(inputTitle.value, inputSubtitle.value, inputDescription.value, inputURLimg.value, id);
            alert("Item atualizado com sucesso");
            
        }
        catch(err){
            console.log(err);
        }
    })
})()

