const navList = document.getElementById("navList");
const docList = document.getElementById('docList');
const checkerList = document.getElementById('checkerList');

async function navItemsAppend(navigationItems) {
    for (let index = 0; index < navigationItems.length; index++) {
        if (navigationItems[index].category == 'nav-link') {
            var li = document.createElement('li');
            var link = document.createElement('a');
            link.href = navigationItems[index].url;
            link.innerHTML = navigationItems[index].name;
            li.appendChild(link);
            navList.appendChild(li);        
        }
    }
}

async function dropdownsItemsAppend(dropdownsItems) {
    for (let index = 0; index < dropdownsItems.length; index++) {
        if (dropdownsItems[index].dropdownId == 'docsDrop') {
            var li = document.createElement('li');
            var link = document.createElement('a');
            link.href = dropdownsItems[index].url;
            link.innerHTML = dropdownsItems[index].name;
            li.appendChild(link);
            docList.appendChild(li);        
        }
        else if (dropdownsItems[index].dropdownId == 'multicheckerDrop') {
            var li = document.createElement('li');
            var link = document.createElement('a');
            link.href = dropdownsItems[index].url;
            link.innerHTML = dropdownsItems[index].name;
            li.appendChild(link);
            checkerList.appendChild(li);        
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    fetch('https://homebrew-france.fr/json/navigation-items.json')
        .then(response => response.json())
        .then(data => {
            const navigationItems = data.navigationItems;
            navItemsAppend(navigationItems);
        })
        .catch(error => console.error('Erreur:', error));
    
    fetch('https://homebrew-france.fr/json/dropdowns-items.json')
        .then(response => response.json())
        .then(data => {
            const dropdownsItems = data.dropdownsItems;
            dropdownsItemsAppend(dropdownsItems);
        })
        .catch(error => console.error('Erreur:', error));
});