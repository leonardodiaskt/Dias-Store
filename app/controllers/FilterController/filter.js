const conteudo = document.querySelector("[data-divAdd]");
const searchBar = document.querySelector("#searchProduct");
const searchTitle = document.querySelector("#searchTitle");
const searchSubtitle = document.querySelector("#searchSubtitle");
const searchDescription = document.querySelector("#searchDescription");

const searchProduct = async (filterTitle, filterSubtitle, filterDescription) => {
    const api = "http://192.168.208.58:3000/product";
    try {
        const responseAPI = await fetch(api);
        const products = await responseAPI.json();

        let filteredProducts = products;

        if (filterTitle) {
            filteredProducts = filteredProducts.filter(product => product.titulo.toLowerCase().includes(filterTitle.toLowerCase()));
        }

        if (filterSubtitle) {
            filteredProducts = filteredProducts.filter(product => product.subtitulo.toLowerCase().includes(filterSubtitle.toLowerCase()));
        }

        if (filterDescription) {
            filteredProducts = filteredProducts.filter(product => product.descricao.toLowerCase().includes(filterDescription.toLowerCase()));
        }

        // const filterTitle = products.filter(product => {
        //     product.titulo.toLowerCase().includes(filter.toLowerCase())
        // })

        // const filterProducts = products.filter(product =>
        //     product.titulo.toLowerCase().includes(filter.toLowerCase()) ||
        //     product.subtitulo.toLowerCase().includes(filter.toLowerCase()) ||
        //     product.descricao.toLowerCase().includes(filter.toLowerCase())
        // );

        conteudo.innerHTML = "";

        filteredProducts.forEach(product => {
            const productDiv = document.createElement("tr");
            productDiv.setAttribute("data-id", product.id)
            productDiv.innerHTML = `
                                                         
                            <td">
                                <div class="d-flex align-items-center">
                                    <img
                                        src="${product.img}"
                                        alt="${product.titulo}"
                                        style="width: 45px; height: 45px"
                                        class="rounded-circle"
                                        />
                                    <div class="ms-3">
                                        <p class="fw-bold mb-1">${product.titulo}</p>                                
                                    </div>
                                </div>
                            </td>
                            <td>
                                <p class="fw-normal mb-1">${product.subtitulo}</p>                            
                            </td>
                            <td>
                                <p class="fw-normal mb-1">${product.descricao}</p> 
                            </td>
                            <td>
                                <button type="submit" class="btn btn-primary botao-editar"><i class="fa-solid fa-pen-to-square"></i></button>
                            </td>
                            <td>
                                <button type="button" class="btn btn-primary botao-deletar" data-toggle="modal" data-target="#exampleModal"><i class="fa-solid fa-trash"></i></button>
                            </td>                                                                    

                            
            `

            conteudo.appendChild(productDiv)
        });

    }
    catch (err) {
        console.log(err)
    };

};


searchTitle.addEventListener("input", (e) => {
    const filterTitle = searchTitle.value;
    searchProduct(filterTitle, "", "");
});

searchSubtitle.addEventListener("input", (e) => {
    const filterSubtitle = searchSubtitle.value;
    searchProduct("", filterSubtitle, "");
});

searchDescription.addEventListener("input", (e) => {
    const filterDescription = searchDescription.value;
    searchProduct("", "", filterDescription);
});



document.addEventListener("click", async (e) => {
    const clickedUpdateButton = e.target.closest(".botao-editar");

    if (clickedUpdateButton) {
        console.log("Fui clicado");

        const btnUpdate = clickedUpdateButton.closest("[data-id]").dataset.id;

        if (btnUpdate) {
            try {
                window.location.href = `/atualiza/?id=${btnUpdate}`
            }
            catch (err) {
                console.log(err)
            }
        }

    }
})