function menu() {
    var linksList = document.getElementById("linkList");
    var productsList = document.getElementById("productList");
    if (linksList.style.display === "flex") {
        linksList.style.display = "none";
        productsList.style.display = "block";
    } else {
        linksList.style.display = "flex";
        linksList.style.justifyContent = "center";
        linksList.style.alignItems = "center";
        productsList.style.display = "none";
    }
}