/* © 2024 - Le Homebrew France
Auteur : Dhalian
Fonction : Cherche la dernière version du firmware Switch via une requête AJAX sur le repo de Zoria pour afficher la version sur la page des packs et dans le guide.
*/


$(document).ready(function() {
    var switchVer = $(".switchVer");
    var switchFirmName = $(".switchFirmName");
  
    var repoOwner = "THZoria";
    var repoName = "NX_Firmware";
    var apiUrl = "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/releases/latest";
  
    $.ajax({
      url: apiUrl,
      method: "GET",
      success: function(data) {
        var latestRelease = data.tag_name;
        for (var i = 0; i < switchVer.length; i++) {
            if (latestRelease.length === 7) {
                switchVer[i].innerHTML = latestRelease.slice(0,-1);
            }
            else {
                switchVer[i].innerHTML = latestRelease;
            }
        }
        let switchFWName = latestRelease.substring(0, 2) + latestRelease.substring(3, 4) + latestRelease.substring(5);
        for (var i = 0; i < switchFirmName.length; i++) {
            if (latestRelease.length === 7) {
                switchFirmName[i].innerHTML = switchFWName.slice(0,-1);
            }
            else {
                switchFirmName[i].innerHTML = switchFWName;
            }
        }
      },
      error: function() {
        for (var i = 0; i < switchVer.length; i++) {
          switchVer[i].innerHTML = "Echec de la récupération du firmware actuel";
        }
        for (var i = 0; i < switchFirmName.length; i++) {
          switchFirmName[i].innerHTML = "Echec de la récupération du firmware actuel";
        }
      }
    });
  });