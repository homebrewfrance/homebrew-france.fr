let bodyTag = document.getElementsByTagName('body')[0];
let pageId = document.body.getAttribute('data-page_id');
let consoleValue = document.body.getAttribute('data-console');
var mdPlaceholders = document.getElementsByClassName('md-placeholders');


document.addEventListener("DOMContentLoaded", function() {
    fetchItems();
});

async function fetchItems() {
    for (let index = 0; index < mdPlaceholders.length; index++) {
        let fileName = mdPlaceholders[index].id;
        let url = 'https://homebrew-france.fr/markdown/' + consoleValue + '/' + fileName + '.md';
        console.log(url);

        try {
            let response = await fetch(url);
            if (!response.ok) throw new Error('Failed to fetch markdown');
            let markdown = await response.text();
            const converter = new showdown.Converter();
            const htmlContent = converter.makeHtml(markdown);
            document.getElementById(fileName).innerHTML = htmlContent;
        } catch (error) {
            console.error('Error loading markdown file:', error);
        }
    }
}