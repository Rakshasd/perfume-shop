function showAlert() {
    alert("Welcome to our Perfume Store!");
}

function searchProducts() {
    let input = document.getElementById("search-bar").value.toLowerCase().trim();
    let products = document.getElementsByClassName("product");

    for (let i = 0; i < products.length; i++) {
        let productName = products[i].getElementsByTagName("h3")[0].innerText.toLowerCase();

        // If search is empty, reset visibility
        if (input === "") {
            products[i].style.display = "";
        } 
        // Show matching products, hide others
        else if (productName.includes(input)) {
            products[i].style.display = "";
        } else {
            products[i].style.display = "none";
        }
    }
}
