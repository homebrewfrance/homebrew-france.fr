var rssFeed = document.getElementById('rss-feed');
var nbArticles = 5;
var items = []; // Déclaration globale de 'items'

function fetchArticles(items) {
    for (let itemIndex = 0; itemIndex < Math.min(nbArticles, items.length); itemIndex++) {
        var nobuyoshiItem = document.createElement('div');
        nobuyoshiItem.className = 'nobuyoshi-item';

        var articleContainer = document.createElement('div');
        articleContainer.style.display = 'flex';
        articleContainer.style.flexDirection = 'column';
        articleContainer.style.width = '80%';
        articleContainer.style.marginLeft = '14px';

        var articleAuthor = document.createElement('span');
        articleAuthor.className = 'article-author';
        var articleAuthorValue = document.createElement('div');
        articleAuthorValue.className = 'article-author-value';
        articleAuthorValue.innerHTML = '&nbsp;<strong>Auteur :</strong>&nbsp;' + decodeHTML(items[itemIndex].author);
        articleAuthor.style.marginBottom = '7px';
        articleAuthor.appendChild(articleAuthorValue);
        articleContainer.appendChild(articleAuthor);

        var articleTitle = document.createElement('h2');
        articleTitle.textContent = decodeHTML(items[itemIndex].title);
        articleTitle.style.fontFamily = 'Sora';
        articleTitle.style.marginBottom = '9px';
        articleContainer.appendChild(articleTitle);

        var articleDescription = document.createElement('p');
        articleDescription.style.color = '#cecece';
        articleDescription.innerHTML = decodeHTML(items[itemIndex].description);
        articleContainer.appendChild(articleDescription);

        var articleImageContainer = document.createElement('div');
        articleImageContainer.className = 'article-image-container';
        var articleImage = document.createElement('img');
        articleImage.src = items[itemIndex].enclosure.link;
        articleImage.className = 'article-image'; // Corrigé : 'className' au lieu de 'class'
        articleImageContainer.appendChild(articleImage);

        var articleDate = document.createElement('div');
        articleDate.className = 'article-date';
        const rawDate = items[itemIndex].pubDate;
        const dateObject = new Date(rawDate);
        const options = {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        };
        const formattedDate = new Intl.DateTimeFormat('fr-FR', options).format(dateObject);
        articleDate.innerHTML = '<small>' + formattedDate + '</small>';
        articleAuthor.prepend(articleDate);

        nobuyoshiItem.appendChild(articleContainer);
        nobuyoshiItem.appendChild(articleImageContainer);
        nobuyoshiItem.addEventListener('click', function () {
            window.location.href = items[itemIndex].link;
        });
        rssFeed.appendChild(nobuyoshiItem);
    }
}

function decodeHTML(html) {
    var txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
}

function fetchMore() {
    nbArticles += 5;
    rssFeed.innerHTML = "";
    fetchArticles(items); 
}

var refreshBtn = document.getElementsByClassName('refresh-btn')[0];
var plusBtn = document.getElementsByClassName('more-btn')[0];

document.addEventListener('DOMContentLoaded', function () {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://hacktuality.com/rss.xml')
        .then(response => response.json())
        .then(data => {
            items = data.items;
            fetchArticles(items);
        })
        .catch(error => console.error('Erreur:', error));
});

refreshBtn.addEventListener('click', function () {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://hacktuality.com/rss.xml')
        .then(response => response.json())
        .then(data => {
            items = data.items; 
            rssFeed.innerHTML = "";
            setTimeout(() => {
                fetchArticles(items);
            }, 900);
        })
        .catch(error => console.error('Erreur:', error));
});

plusBtn.addEventListener('click', function () {
    fetchMore();
});
