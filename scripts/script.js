var products = [
    {
        id: 1,
        name: "Computador M1-TX",
        description: "Intel i7, 16GB, SSD 256GB, HD 1TB",
        price: 4900,
        category: 1,
        promotion: true,
        new: true,

    },
    {
        id: 2,
        name: "Computador M2-TX",
        description: "Intel i7, 32GB, SSD 512GB, HD 1TB",
        price: 5900,
        category: 2,
        promotion: false,
        new: true,

    },
    {
        id: 3,
        name: "Computador M1-T",
        description: "Intel i5, 16GB, HD 1TB",
        price: 2900,
        category: 3,
        promotion: false,
        new: false,

    },
];

var categories = [
    { id: 1, name: "Produção Própria" },
    { id: 2, name: "Nacional" },
    { id: 3, name: "Importado" },
];

var formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
});

loadProducts();

//Load All Products
function loadProducts() {
    for (let prod of products) {
        addNewRow(prod);
    }
}

//Add New Row
function addNewRow(prod) {
    var table = document.getElementById("productsTable");

    var newRow = table.insertRow();

    //Insert ID Product
    var idNode = document.createTextNode(prod.id);
    newRow.insertCell().appendChild(idNode);

    //Insert name Product
    var nameNode = document.createTextNode(prod.name);
    newRow.insertCell().appendChild(nameNode);

    //Insert Description Product
    var descriptionNode = document.createTextNode(prod.description);
    newRow.insertCell().appendChild(descriptionNode);
    
    //Insert Price Product
    var priceNode = document.createTextNode(formatter.format(prod.price));
    newRow.insertCell().appendChild(priceNode)

    //Insert category Product
    var categoryNode = document.createTextNode(categories[prod.category-1].name);
    newRow.insertCell().appendChild(categoryNode);

        //Insert Options Product

    var options= '';
    if (prod.promotion) {
       options= '<span class="badge text-bg-success me-1">P</span>';
    }

    if (prod.new) {
        options+='<span class="badge text-bg-primary">L</span>';
    }
    newRow.insertCell().innerHTML= options

}