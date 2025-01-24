function createNavMenu() {
    var navElementsContainerHoriz = document.getElementsByClassName('nav-elements-horiz')[0];
    var navElementsContainerVert = document.getElementsByClassName('nav-elements-vert')[0];
    var navElements = document.getElementsByClassName('titles');
    for (let index = 0; index < navElements.length; index++) {
        var navMenuItem = document.createElement('div');
        navMenuItem.className = 'nav-menu-item';
        navMenuItem.setAttribute('data-target-id', navElements[index].id);
        navMenuItem.addEventListener('click', function() {
            window.location = '#' + navElements[index].id;
        });
        if (!navElements[index].innerHTML.includes('Préambule')) {
            navMenuItem.innerHTML = navElements[index].innerHTML;

            navElementsContainerHoriz.appendChild(navMenuItem);

            var clonedNavMenuItem = navMenuItem.cloneNode(true);
            clonedNavMenuItem.addEventListener('click', function() {
                window.location = '#' + navElements[index].id;
            });
            navElementsContainerVert.appendChild(clonedNavMenuItem);
        }
    }
}


function highlightNavMenu() {
    const navItems = document.querySelectorAll('.nav-menu-item');

    function highlightNavItem() {
        const sections = Array.from(document.querySelectorAll('h2.titles'));
        let currentSectionId = null;

        for (let i = sections.length - 1; i >= 0; i--) {
            const section = sections[i];
            const bounding = section.getBoundingClientRect();

            if (bounding.top <= window.innerHeight / 2) {
                currentSectionId = section.getAttribute('id');
                break;
            }
        }

        navItems.forEach(item => item.classList.remove('active-link'));

        if (currentSectionId) {
            const activeItem = Array.from(navItems).find(item =>
                item.getAttribute('data-target-id') === currentSectionId
            );
            if (activeItem) {
                activeItem.classList.add('active-link');
            }
        }
    }

    window.addEventListener('scroll', highlightNavItem);
    window.addEventListener('load', highlightNavItem);
}

document.addEventListener('DOMContentLoaded', function() {
    createNavMenu();
    highlightNavMenu();
});
