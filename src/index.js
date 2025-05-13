// Collection de produits
let productsCollection = [{
    "_id": "3850104053221",
    "product_name": "Tomatenmark"
  },
  {
    "_id": "0041000120039",
    "product_name": "Pulpe de tomate",
    "image_front_small_url": "https://images.openfoodfacts.org/images/products/004/100/012/0039/front_en.3.200.jpg"
  },
  {
    "_id": "0042010348901",
    "image_front_small_url": "https://images.openfoodfacts.org/images/products/004/201/034/8901/front_en.3.200.jpg"
  },
  {
    "_id": "0044152146346",
    "image_front_small_url": "https://images.openfoodfacts.org/images/products/004/415/214/6346/front_en.3.200.jpg"
  },
  {
    "_id": "8904293703414",
    "product_name": "Tomato Desi Local",
    "image_front_small_url": "https://images.openfoodfacts.org/images/products/890/429/370/3414/front_en.3.200.jpg"
  },
  {
    "_id": "5059697682940",
    "product_name": "Tomato, Mascarpone and Basil Risotto",
    "image_front_small_url": "https://images.openfoodfacts.org/images/products/505/969/768/2940/front_en.3.200.jpg"
  },
  {
    "_id": "03337172",
    "product_name": "Tomatoes",
    "image_front_small_url": "https://images.openfoodfacts.org/images/products/03337172/front_en.3.200.jpg"
  },
  {
    "_id": "8426756050137",
    "product_name": "Bio Pflaumen Tomaten",
    "image_front_small_url": "https://images.openfoodfacts.org/images/products/842/675/605/0137/front_en.3.200.jpg"
  },
  {
    "_id": "5010525179933",
    "product_name": "Tomato, Feta & Caramelized Onion Quice",
    "image_front_small_url": "https://images.openfoodfacts.org/images/products/501/052/517/9933/front_en.3.200.jpg"
  },
  {
    "_id": "7035620048814",
    "product_name": "Hakkede tomater - Spicy chili",
    "image_front_small_url": "https://images.openfoodfacts.org/images/products/703/562/004/8814/front_en.3.200.jpg"
  },
  {
    "_id": "0022314450739",
    "product_name": "Palets de tomate de provence surgelés",
    "image_front_small_url": "https://images.openfoodfacts.org/images/products/002/231/445/0739/front_fr.3.200.jpg"
  },
  {
    "_id": "8008857010038",
    "product_name": "Polpa Pomodoro",
    "image_front_small_url": "https://images.openfoodfacts.org/images/products/800/885/701/0038/front_fr.3.200.jpg"
  },
  {
    "_id": "7340083469619",
    "product_name": "ekologiska Passerade tomater"
  },
  {
    "_id": "4311527008698",
    "product_name": "Bio Rispentomaten",
    "image_front_small_url": "https://images.openfoodfacts.org/images/products/431/152/700/8698/front_en.5.200.jpg"
  },
  {
    "_id": "8850511321055",
    "product_name": ""
  },
  {
    "_id": "8858790900183",
    "product_name": "ปลากระป๋อง ไฮเชฟ",
    "image_front_small_url": "https://images.openfoodfacts.org/images/products/885/879/090/0183/front_th.3.200.jpg"
  },
  {
    "_id": "8857122646959",
    "product_name": "มะเขือเทศเชอร์รี่ พร้อมพริกเกลือ - 110 g",
    "image_front_small_url": "https://images.openfoodfacts.org/images/products/885/712/264/6959/front_th.5.200.jpg"
  },
  {
    "_id": "43084499",
    "product_name": "pasta sauce"
  },
  {
    "_id": "0072940100942",
    "product_name": "Enchilada Sauce",
    "image_front_small_url": "https://images.openfoodfacts.org/images/products/007/294/010/0942/front_en.6.200.jpg"
  },
  {
    "_id": "0057000039844",
    "product_name": "heinz"
  }
];

/*************************************************** */
/*                   VARIABLE                        */
/*************************************************** */

let productsTable = document.querySelector(".js-products-list tbody");
//console.log(productsTable);

/*
 * Affiche la collection products dans le tableau portant la classe "js-products-list"
*/
function displayProducts(products) {
  for (let i = 0; i < products.length; i++) {
    //Pour chaque produit, il faut creer une ligne de tableau 
    // avec 2 colonnes: une pour le nom et une autre pour l'image
    const row = document.createElement("tr");
    const cellName = document.createElement("td");
    const cellImg = document.createElement("td");
    const img = document.createElement("img");
    let cellProductName = "";
    let cellSrcImg = "";
    //recupere le nom du produit si existante
    productsCollection[i].product_name ? cellProductName = productsCollection[i].product_name : "";  
    //console.log(cellName);
    //ajoute le nom du produit a cellName
    cellName.append(cellProductName);
    //ajoute cellName au row
    row.append(cellName);
    //ajoute le row au tbody
    productsTable.append(row);
    //recupere la source de l'image si existante
    productsCollection[i].image_front_small_url ? cellSrcImg = productsCollection[i].image_front_small_url : ""; 
    //ajoute l'attribut source
    if (cellSrcImg != "") {
      cellImg.append(img);
      row.append(cellImg);
      img.setAttribute("src", cellSrcImg);
    }
    console.log(cellImg); 
  };
}

/*
 * Affiche la modale avec formulaire d'ajout d'un produit
 */
function onAddProduct() {

}

/*
 * Ferme la modale
 */
function onCloseModale() {

}

/*
 * Créer un produit dans la liste à partir des données saisies dans le fomulaire
 */
function onCreateProduct(event) {

}

/*
 * Supprime un produit de la collection
 */
function onDeleteProduct(event) {

}

/**
 * Recherche un produit via l'API https://world.openfoodfacts.org/api/v2/search
 */
function onSearchProducts() {

}

/**
 * Affiche la modale avec le formulaire rempli par les données du produit à modifier
 */
function onEditProduct(event) {

}

/**
 * Met à jour le produit dans la collection avec les données saisies dans le fomulaire
 */
function onUpdateProduct(event) {

}

document.addEventListener('DOMContentLoaded', function() {
displayProducts(productsCollection);
});
