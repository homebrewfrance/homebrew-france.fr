function createItemShop(themes, packs) {
    var themesDownload = document.getElementById('themes-download');
    var packsDownload = document.getElementById('packs-download');
    var chargementTelechargements1 = document.getElementsByClassName('chargementTelechargements')[0];
    var chargementTelechargements2 = document.getElementsByClassName('chargementTelechargements')[1];
    packsDownload.removeChild(chargementTelechargements1);
    themesDownload.removeChild(chargementTelechargements2);
    for (var itemIndex = 0; itemIndex < themes.length; itemIndex++) {
        var itemGrid = document.createElement('div');
        itemGrid.className = 'grid-downloads';

        var itemImg = document.createElement('img');
        itemImg.src = themes[itemIndex].image;
		itemImg.style.width = '24%'; 
		itemImg.style.height = 'auto';
        itemImg.style.marginBottom = '12px';
        itemGrid.appendChild(itemImg);

        var itemTitle = document.createElement('h3');
        itemTitle.innerHTML = themes[itemIndex].name;
        itemGrid.appendChild(itemTitle);

        var itemDescription = document.createElement('small');
        itemDescription.innerHTML = themes[itemIndex].description;
        itemDescription.style.textAlign = 'center';
        itemDescription.style.paddingBottom = '12px';
        itemGrid.appendChild(itemDescription);
        var br = document.createElement('br');
        itemGrid.appendChild(br);

        var itemConsole = document.createElement('small');
        itemConsole.style.color = 'white';
        itemConsole.innerHTML = "<strong>Console :</strong>&nbsp;" + themes[itemIndex].console;
        itemGrid.appendChild(itemConsole);

        var itemAuthor = document.createElement('small');
        itemAuthor.style.color = 'white';
        itemAuthor.innerHTML = "<strong>Auteur :</strong>&nbsp;" + themes[itemIndex].author;
        itemGrid.appendChild(itemAuthor);

        var itemCategory = document.createElement('small');
        itemCategory.style.color = 'white';
        itemCategory.innerHTML = "<strong>Catégorie :</strong>&nbsp;" + themes[itemIndex].category;
        itemGrid.appendChild(itemCategory);

        var itemBtnContainer = document.createElement('div');
        itemBtnContainer.className = 'btn-container';

		var itemDLLink = document.createElement('a');
		itemDLLink.href = themes[itemIndex].lienDL;

        var itemDLButton = document.createElement('button');
        itemDLButton.className = 'default-button';
        itemDLButton.innerHTML = '<i class="fa fa-download" aria-hidden="true"></i>&nbsp;Télécharger';

        var popup = document.createElement('div');
        popup.className = 'popup';
        popup.id = 'itemQR' + themes[itemIndex].name.replace(/\s/g, '');;
        var themeNameQR = document.createElement('h2');
        themeNameQR.innerHTML = themes[itemIndex].name;
        themeNameQR.style.color = "white";
        themeNameQR.style.textAlign = 'center';
        themeNameQR.style.marginBottom = '8px';
        var popupQR = document.createElement('img');
        popupQR.className = 'qrcode';
        popupQR.src = themes[itemIndex].qr;
        popup.appendChild(themeNameQR);
        popup.appendChild(popupQR);

        var closeBtn = document.createElement('div');
        closeBtn.id = themes[itemIndex].name.replace(/\s/g, ''); + "CloseBtn";
        closeBtn.className = 'close-btn';
        closeBtnInner = document.createElement('p');
        closeBtnInner.innerHTML = 'Fermer';
        closeBtn.appendChild(closeBtnInner);
        popup.appendChild(closeBtn);
        var html = document.getElementsByTagName('html')[0];
        html.appendChild(popup);

        if (themes[itemIndex].qr == undefined) {
            console.log('NO QR');
        }
        else {
            var itemQRCode = document.createElement('button');
            itemQRCode.className = 'git-button';
            itemQRCode.innerHTML = '<i class="fa fa-qrcode" aria-hidden="true"></i>&nbsp;QR';
            itemQRCode.id = 'QRBtn' + themes[itemIndex].name.replace(/\s/g, '');
            itemBtnContainer.appendChild(itemQRCode);
        }

        itemDLLink.appendChild(itemDLButton);
		itemBtnContainer.appendChild(itemDLLink);
        itemGrid.appendChild(itemBtnContainer);

        themesDownload.appendChild(itemGrid);
    }

    for (var itemIndex2 = 0; itemIndex2 < packs.length; itemIndex2++) {
        var itemGrid = document.createElement('div');
        itemGrid.className = 'grid-downloads ' + packs[itemIndex2].console + '-grid';
        itemGrid.id = packs[itemIndex2].itemID;

        var itemTitle = document.createElement('h3');
        itemTitle.innerHTML = packs[itemIndex2].name;
        itemGrid.appendChild(itemTitle);

        var itemExploit = document.createElement('h4');
        itemExploit.innerHTML = packs[itemIndex2].exploit;
        itemExploit.style.textAlign = 'center';
        itemGrid.appendChild(itemExploit);

        var itemCompatibility = document.createElement('small');
        itemCompatibility.innerHTML = "<strong>Compatibilité :</strong>&nbsp;" + packs[itemIndex2].compatibility;
        itemGrid.appendChild(itemCompatibility);

        var itemAuthor = document.createElement('small');
        var itemAuthorLink = document.createElement('a');
        itemAuthorLink.innerHTML = packs[itemIndex2].authorLink;
        itemAuthorLink.innerHTML = packs[itemIndex2].author;
        itemAuthor.style.color = 'white';
        itemAuthor.innerHTML = "<strong>Auteur :</strong>&nbsp;" + itemAuthorLink;
        itemAuthor.appendChild(itemAuthorLink);
        itemGrid.appendChild(itemAuthor);

        var btnContainer = document.createElement('div');
        btnContainer.className = 'btn-container';

        var itemDLLink = document.createElement('a');
        itemDLLink.href = 'https://github.com/Le-Homebrew-France/Packs-Homebrew-France/releases/latest/download/' + packs[itemIndex2].lienDL;
        var itemDLButton = document.createElement('button');
        itemDLButton.className = 'default-button';
        itemDLLink.id = packs[itemIndex2].console;
        itemDLButton.innerHTML = '<i class="fa fa-download" aria-hidden="true"></i>&nbsp;Télécharger';
        itemDLLink.appendChild(itemDLButton);
        btnContainer.appendChild(itemDLLink);

        var itemGitLink = document.createElement('a');
        itemGitLink.href = packs[itemIndex2].gitLink;
        var itemGitButton = document.createElement('button');
        itemGitButton.className = 'default-button git-button';

        if (packs[itemIndex2].gitType == 'github') {
            itemGitButton.innerHTML = '<i class="fa-brands fa-github"></i>&nbsp;GitHub';
        }
        else if (packs[itemIndex2].gitType == 'gitlab') {
            itemGitButton.innerHTML = '<i class="fa-brands fa-gitlab"></i>&nbsp;GitLab';
        }
        else if (packs[itemIndex2].gitType == 'codeberg') {
            itemGitButton.innerHTML = '<i class="fa-solid fa-code"></i>&nbsp;CodeBerg';
        }
        itemGitLink.appendChild(itemGitButton);
        btnContainer.appendChild(itemGitLink);
        itemGrid.appendChild(btnContainer);

        packsDownload.appendChild(itemGrid);
    }
}

function createQRPopups(themes) {
    setTimeout(function() {  
        for (let itemIndex3 = 0; itemIndex3 < themes.length; itemIndex3++) { 
            if (themes[itemIndex3].qr == undefined) {
                console.log('NO QR');
            } else {
                const popupId = 'itemQR' + themes[itemIndex3].name.replace(/\s/g, '');
                const findPopup = document.getElementById(popupId);
                const qrButtonId = 'QRBtn' + themes[itemIndex3].name.replace(/\s/g, '');
                const finditemQRCode = document.getElementById(qrButtonId);
                const bodyElement = document.getElementsByTagName('body')[0];

                if (findPopup && finditemQRCode) {
                    finditemQRCode.addEventListener('click', function() {
                        findPopup.classList.add('show');
                        bodyElement.classList.add('grayed');
                    });

                    const closeButton = findPopup.querySelector('.close-btn');
                    if (closeButton) {
                        closeButton.addEventListener('click', function() {
                            findPopup.classList.remove('show');
                            bodyElement.classList.remove('grayed');
                        });
                    } else {
                    }
                } else {
                }
            }
        }
    }, 0);
}


document.addEventListener('DOMContentLoaded', function() {
    fetch('https://homebrew-france.fr/json/download-items.json')
    .then(response => response.json())
    .then(data => {
        const themes = data.themes;
        const packs = data.packs;

        createItemShop(themes, packs);
        createQRPopups(themes);
        getLatestReleaseDownloadURL();
    })
    .catch(error => console.error('Error loading navigation data:', error));
});

