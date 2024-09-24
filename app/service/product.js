const listProduct = async (id) => {
    const api = `http://192.168.208.58:3000/product/${id}`
    const responseAPI = await fetch(api);

    if(responseAPI.ok){
        return await responseAPI.json();
    }
    throw new Error("Nao foi possivel a visualizacao");
}

const createProduct = async (titulo, subtitulo, descricao, img) => {
    const api = "http://192.168.208.58:3000/product";
    const responseAPI = await fetch(api, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            subtitulo: subtitulo,
            descricao: descricao,
            img: img
        })
    });

    if(responseAPI.ok){
        alert("Cadastro realizado com sucesso!")
        return await responseAPI.json();
    }

    throw new Error("Nao foi possivel cadastrar o produto")
};

const deleteProduct = async (id) => {
    const api = `http://192.168.208.58:3000/product/${id}`;
    const responseAPI = await fetch(api, {
        method: "DELETE"
    });
    if(!responseAPI.ok){
        throw new Error("Não foi possível excluir o produto");
    }
}

const updateProduct = async(titulo, subtitulo, descricao, img, id) => {
    const api = `http://192.168.208.58:3000/product/${id}`;
    const responseAPI = await fetch(api, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            subtitulo: subtitulo,
            descricao: descricao,
            img: img
        })
    });
    if(responseAPI.ok){
        alert("O item foi atualizado com sucesso");
        return await responseAPI.json();
    };

    throw new Error("Não foi possível atualizar o item");
}

export const products = {
    listProduct,
    createProduct,
    deleteProduct,
    updateProduct
}