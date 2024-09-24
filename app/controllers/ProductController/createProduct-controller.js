import { products } from "../../service/product.js";

const form = document.getElementById("createProduct-form");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    try{
        const titulo = e.target.querySelector("#titleProduct").value;
        const subtitulo = e.target.querySelector("#subtitleProduct").value;
        const descricao = e.target.querySelector("#descriptionProduct").value;
        const urlimg = e.target.querySelector("#imgProduct").value;
        await products.createProduct(titulo, subtitulo, descricao, urlimg);
    }
    catch(err){
        console.log(err)
    }
});