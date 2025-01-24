// URL de la page à analyser
const url = 'https://www.fixurphone.fr/nos-tarifs/installation-de-picofly-sur-switch-oled';

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }
    return response.text(); // Récupère le HTML de la page
  })
  .then(html => {
    // Analyse le contenu HTML de la page
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    // Sélectionne l'élément contenant le prix
    const priceElement = doc.querySelector('.woocommerce-Price-amount'); // Classe CSS du prix sur la page
    if (priceElement) {
      const price = priceElement.textContent.trim(); // Récupère le texte du prix
      console.log('Prix trouvé:', price); // Affiche le prix
    } else {
      console.log("Aucun prix trouvé sur la page.");
    }
  })
  .catch(error => {
    console.error('Erreur lors du fetch ou du traitement HTML:', error);
  });
