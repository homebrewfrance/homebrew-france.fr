/* © 2024 - Le Homebrew France
Auteur : Dhalian
Fonction : Création du pied de page (footer) de manière dynamique.
*/

var bodyElement = document.querySelector('body');

var footer = document.createElement('footer');
footer.className = 'footer-container';

var leftFooter = document.createElement('div');
leftFooter.className = 'left-footer';

var hbfLogoContainer = document.createElement('div');
hbfLogoContainer.className = 'hbf-logo-container';
var hbfLogoFooter = document.createElement('p');
hbfLogoFooter.style.fontFamily = 'Sora';
hbfLogoFooter.style.fontSize = "24px";
hbfLogoFooter.style.color = 'white';
hbfLogoContainer.style.padding = '0';
hbfLogoContainer.style.margin = '0';
hbfLogoContainer.style.cursor = 'pointer';
hbfLogoFooter.innerHTML = '<span style="font-weight: 300;">Homebrew</span><strong>France</strong>';
var hbfVersion = document.createElement('div');
hbfVersion.className = 'hbf-version';
hbfVersion.innerHTML = 'Version : 3.2.0b';
hbfLogoFooter.onclick = function() {
    window.location = 'https://github.com/homebrewfrance';
};
hbfLogoContainer.appendChild(hbfLogoFooter);
hbfLogoContainer.appendChild(hbfVersion);
leftFooter.appendChild(hbfLogoContainer);

var smallText = document.createElement('small');
smallText.style.color = 'rgb(210, 210, 210)';
smallText.innerHTML = '&copy; 2021 - ' + new Date().getFullYear() + '&nbsp;<span style="color: rgb(173, 173, 173)">|</span>&nbsp;' + 'Distribué sous licence <a href="https://homebrew-france.fr/licence/">GNU GPLv3</a>';
leftFooter.appendChild(smallText);

footer.appendChild(leftFooter);

var rightFooter = document.createElement('div');
rightFooter.className = 'right-footer';

var navigationLink = document.createElement('a');
navigationLink.href = 'https://homebrew-france.fr/navigation/';
navigationLink.innerHTML = '<u>Navigation</u>';
rightFooter.appendChild(navigationLink);

var separatorSpan1 = document.createElement('span');
separatorSpan1.className = 'separator';
separatorSpan1.style.color = 'rgb(173, 173, 173)';
separatorSpan1.innerHTML = '&nbsp;•&nbsp;';
rightFooter.appendChild(separatorSpan1);

var legalLink = document.createElement('a');
legalLink.href = 'https://homebrew-france.fr/mentions-legales';
legalLink.innerHTML = '<u>Mentions légales</u>';
rightFooter.appendChild(legalLink);

var separatorSpan2 = document.createElement('span');
separatorSpan2.className = 'separator';
separatorSpan2.style.color = 'rgb(173, 173, 173)';
separatorSpan2.innerHTML = '&nbsp;•&nbsp;';
rightFooter.appendChild(separatorSpan2);

var confidential = document.createElement('a');
confidential.href = 'https://homebrew-france.fr/confidentialite/';
confidential.innerHTML = '<u>Confidentialité</u>';
rightFooter.appendChild(confidential);

footer.appendChild(rightFooter);

bodyElement.appendChild(footer);
