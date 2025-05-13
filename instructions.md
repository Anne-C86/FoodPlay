# OBJECTIF
L'objectif de ce projet est de réaliser un CRUD (create / read / update / delete)
d'une collection de produits.

# CONTRAINTES TECHNIQUES
Cette collection sera connectée à une API externe gratuite.
Cependant, l'API limite à 100 le nombre de requêtes.

# IMPORTANT
Ce mini projet est complexe
Pour cela je t'invite fortement à suivre les étapes une à une.

# Etape 1 : Afficher dynamiquement la liste de produits de la collection productsCollection
Ecrire le contenu de la fonction displayProducts qui prend en paramètre une collection de produits.
Son rôle est d'afficher la collection dans le tableau présent dans le HTML.
Une fois écrite, l'appeler au moment du chargement du DOM, en lui passant la collection productsCollection présente dans le JS.

# Etape 2 : Gérer l'affichage de la modale
Ecrire le contenu de la fonction onAddProduct
Une fois écrite, l'appeler lorsque l'utilisateur clique sur le bouton "Ajouter"

Ecrire le contenu de la fonction onCloseModale
Une fois écrite, l'appeler lorsque l'utilisateur clique sur la croix en haut à droite de la modale

# Etape 3 : Ajouter un nouveau produit dans la collection via un formulaire
Ecrire le contenu de la fonction onCreateProduct
Son rôle est d'ajouter un nouveau produit dans la collection de produits à partir des données saisies dans le formulaire
Elle devra :
- Récupérer la saisie de l'utilisateur pour le nom du produit
- Générer un identifiant unique (par exemple, utiliser la taille de la collection)
- Créer le produit (cad un objet avec les mêmes propriétés que ceux de la collection)
NOTE : pour l'image, mettre une chaine vide
- Ajouter le produit à la collection productsCollection
- Masquer la modale
- Mettre à jour l'affichage du tableau en appelant la fonction displayProducts
Puis, une fois écrite, appeler la fonction onCreateProduct lorsque l'utilisateur clique sur le bouton "Enregistrer" du formulaire dans la modale
ASTUCE : Pour empêcher le rafraichissement de la page quand on clique sur le bouton "Enregistrer", ajouter au début de la fonction appelée lors du clic : event.preventDefault();

# Etape 4 : Supprimer un produit de la collection
Ecrire le contenu de la fonction onDeleteProduct
Son rôle est de supprimer un produit de la collection à partir de son identifiant
Elle devra :
- Récupérer le produit à partir de son identifiant
ASTUCE : pour gérer le passage de l'identifiant du produit entre le tableau HTML et le JS,
utiliser les dataset : https://developer.mozilla.org/fr/docs/Web/API/HTMLElement/dataset
- Supprimer le produit de la collection
- Mettre à jour l'affichage en appelant la fonction displayProducts
Puis, une fois écrite la fonction onDeleteProduct :
- Ajouter un bouton "Supprimer" à la fin de chaque ligne du tableau
- Lorsque l'utilisateur clique sur le bouton "Supprimer", appeler la fonction onDeleteProduct

# Etape 5 : Rechercher un produit
Ecrire le contenu de la fonction onSearchProducts
Son rôle est de rechercher des produits, à partir d'une saisie de texte, via une API
Elle devra :
- Récupérer la saisie de l'utilisateur dans le champ de recherche
- Récupérer (avec fetch) les produits via l'url : https://world.openfoodfacts.org/api/v2/search?categories_tags=
     suivi de la valeur saisie dans le champ de recherche

    Exemple : si l'utilisateur saisi toto dans le champ, l'url sera 
    https://world.openfoodfacts.org/api/v2/search?categories_tags=toto

  IMPORTANT : Nombre de requêtes sur cette URL limitée à 100
- Les stocker dans productsCollection (replacer la collection existante par celle récupérée)
- Mettre à jour l'affichage en appelant la fonction displayProducts
Une fois écrite la fonction onSearchProducts, l'appeler lorsque l'utilisateur clique sur le bouton "Rechercher"

# Etape 6 : Editer un produit
Ecrire le contenu de la fonction onEditProduct
Son rôle est d'afficher le formulaire avec les données du produit à modifier
Elle devra :
- Afficher la modale
- Remplir les champs id et nom du produit avec les données du produit
Une fois écrite la fonction onEditProduct :
- Ajouter un bouton "Modifier" à la fin de chaque ligne du tableau
- Appeler la fonction onEditProduct lorsque l'utilisateur clique sur le bouton "Modifier"

# Etape 7 : Modifier un produit
Ecrire le contenu de la fonction onUpdateProduct.
Son rôle est de mettre à jour le produit dans la collection à partir des données saisies dans le formulaire
Elle devra :
- Récupérer les valeurs des champs id et nom du produit
- Modifier le produit dans la collection
- Masquer la modale
- Mettre à jour l'affichage en appelant la fonction displayProducts
Une fois écrite, l'appeler lorsque l'utilisateur clique sur le bouton "Enregistrer" du formulaire dans la modale

# Etape 8 : Résoudre les problème du passage entre l'ajout et la modification du formulaire de la modale

Problématique 1 : un produit que je viens d'ajouter est toujours dans le formulaire lorsque j'en ajoute un autre.
Le problème se reproduit quand lorsque l'utilisateur ferme la modale et ensuite clique sur le bouton "Ajouter".
Pour y remédier :
- Dans la fonction onAddProduct, vider les champs du formulaire

Problématique 2 : lorsque j'édite un produit, il est aussi ajouté et vice-versa.
- Dans la fonction onCreateProduct, supprimer le listener "onCreateProduct" sur le bouton "Enregistrer" du formulaire avant de fermer la modale
- Dans la fonction onAddProduct, ajouter le listener "onCreateProduct" sur le bouton "Enregistrer" du formulaire
- Dans la fonction onUpdateProduct, supprimer le listener "onUpdateProduct" sur le bouton "Enregistrer" du formulaire avant de fermer la modale
- Dans la fonction onEditProduct, ajouter le listener "onUpdateProduct" sur le bouton "Enregistrer" du formulaire
