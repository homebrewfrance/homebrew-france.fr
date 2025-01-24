function createItemShop(modifConsoles, consolesPucees) {
    var pucageConsoles = document.getElementById('pucageconsoles');
	var consolesPuceesID = document.getElementById('consolespucees');
    var chargementBoutique1 = document.getElementsByClassName('chargementBoutique')[0];
    var chargementBoutique2 = document.getElementsByClassName('chargementBoutique')[1];
    pucageConsoles.removeChild(chargementBoutique1);
    for (var itemIndex = 0; itemIndex < modifConsoles.length; itemIndex++) {
        var itemGrid = document.createElement('div');
        itemGrid.className = 'grid-shop';

        var itemImg = document.createElement('img');
        itemImg.src = modifConsoles[itemIndex].image;
		itemImg.style.width = '24%'; 
		itemImg.style.height = 'auto';
        itemGrid.appendChild(itemImg);

        var itemTitle = document.createElement('h3');
        itemTitle.innerHTML = modifConsoles[itemIndex].name;
        itemGrid.appendChild(itemTitle);

        var itemDescription = document.createElement('small');
        itemDescription.innerHTML = "<i>"+ modifConsoles[itemIndex].description + "</i>";
        itemGrid.appendChild(itemDescription);

        var itemPriceContainer = document.createElement('h3');
        var prixActuel = document.createElement('span');
        prixActuel.className = 'prix-actuel';
        prixActuel.innerHTML = modifConsoles[itemIndex].prixActuel;

        var prixOriginal = document.createElement('span');
        prixOriginal.className = 'prix-original';
        prixOriginal.innerHTML = modifConsoles[itemIndex].prixOriginal;

		itemPriceContainer.style.margin = '6px';
		itemPriceContainer.style.display = 'flex';
		itemPriceContainer.style.flexDirection = 'column';
		itemPriceContainer.style.alignItems = 'center';
		itemPriceContainer.style.justifyContent = 'center';
        itemPriceContainer.appendChild(prixActuel);
        itemPriceContainer.appendChild(prixOriginal);
        itemGrid.appendChild(itemPriceContainer);

		var itemBuyLink = document.createElement('a');
		itemBuyLink.href = modifConsoles[itemIndex].lienArticle;
        var itemBuyButton = document.createElement('button');
        itemBuyButton.className = 'shop-button';
        itemBuyButton.innerHTML = '<i class="fas fa-shopping-cart"></i>&nbsp;Acheter';
		itemBuyLink.appendChild(itemBuyButton);
        itemGrid.appendChild(itemBuyLink);

        var itemPromo = document.createElement('div');
        itemPromo.className = 'reductions';
        itemPromo.innerHTML = calculReduc(modifConsoles[itemIndex]); 
        itemGrid.appendChild(itemPromo);

        function calculReduc(console) {
            var reduction = (((console.prixActuel * 100) / console.prixOriginal) - 100).toFixed(0);
            return reduction + "% RÉDUCTION";
        }
        pucageConsoles.appendChild(itemGrid);
    }
    consolesPuceesID.removeChild(chargementBoutique2);
	for (var itemIndex2 = 0; itemIndex2 < consolesPucees.length; itemIndex2++) {
        var itemGrid = document.createElement('div');
        itemGrid.className = 'grid-shop';

        var itemImg = document.createElement('img');
        itemImg.src = consolesPucees[itemIndex2].image;
		itemImg.style.width = '35%'; 
		itemImg.style.height = 'auto';
        itemImg.style.paddingTop = '22px';
        itemImg.style.paddingBottom = '11px';
        itemGrid.appendChild(itemImg);

        var itemTitle = document.createElement('h3');
        itemTitle.innerHTML = consolesPucees[itemIndex2].name;
        itemGrid.appendChild(itemTitle);

        var itemDescription = document.createElement('small');
        itemDescription.innerHTML = "<i>"+ consolesPucees[itemIndex2].description + "</i>";
        itemGrid.appendChild(itemDescription);

        var itemPriceContainer = document.createElement('h3');
        var prixActuel = document.createElement('span');
        prixActuel.className = 'prix-actuel';
        prixActuel.innerHTML = consolesPucees[itemIndex2].prixActuel;

        var prixOriginal = document.createElement('span');
        prixOriginal.className = 'prix-original';
        prixOriginal.innerHTML = consolesPucees[itemIndex2].prixOriginal;

		itemPriceContainer.style.margin = '6px';
		itemPriceContainer.style.display = 'flex';
		itemPriceContainer.style.flexDirection = 'column';
		itemPriceContainer.style.alignItems = 'center';
		itemPriceContainer.style.justifyContent = 'center';
        itemPriceContainer.appendChild(prixActuel);
        itemPriceContainer.appendChild(prixOriginal);
        itemGrid.appendChild(itemPriceContainer);

		var itemBuyLink = document.createElement('a');
		itemBuyLink.href = consolesPucees[itemIndex2].lienArticle;
        var itemBuyButton = document.createElement('button');
        itemBuyButton.className = 'shop-button';
        itemBuyButton.innerHTML = '<i class="fas fa-shopping-cart"></i>&nbsp;Acheter';
		itemBuyLink.appendChild(itemBuyButton);
        itemGrid.appendChild(itemBuyLink);

        var itemPromo = document.createElement('div');
        itemPromo.className = 'reductions';
        itemPromo.innerHTML = calculReduc(consolesPucees[itemIndex2]); 
        itemGrid.appendChild(itemPromo);

        function calculReduc(console) {
            var reduction = (((console.prixActuel * 100) / console.prixOriginal) - 100).toFixed(0);
            return reduction + "% RÉDUCTION";
        }

        consolesPuceesID.appendChild(itemGrid);

    }


}

document.addEventListener('DOMContentLoaded', function() {
    fetch('https://homebrew-france.fr/json/shop-items.json')
    .then(response => response.json())
    .then(data => {
        const modifConsoles = data.modifConsoles;
        const consolesPucees = data.consolesPucees;

        createItemShop(modifConsoles, consolesPucees);
    })
    .catch(error => console.error('Erreur lors de la récupération des articles de la boutique FIXurPHONE:', error));
});

