
async function getLatestReleaseDownloadURL() {
    const repoOwner = "Zoria";
    const repoName = "AtmoPack-Vanilla";
    const apiURL = `https://codeberg.org/api/v1/repos/${repoOwner}/${repoName}/releases`;

    try {
        const response = await fetch(apiURL);
        if (!response.ok) throw new Error(`Erreur : ${response.statusText}`);
        
        const releases = await response.json();
        if (releases.length === 0) throw new Error("Aucune release trouvée");

        const latestRelease = releases[0];

        const downloadURL = latestRelease.assets[0].browser_download_url;
        

        console.log("Lien de téléchargement direct de la dernière release :", downloadURL);
        var switchPack = document.getElementById('switch');
        if (switchPack) {
            switchPack.href = downloadURL;
        }
        else {
            setTimeout(3000);
            switchPack.href = downloadURL;
        }

    } catch (error) {
        console.error("Erreur lors de la récupération de la dernière release :", error);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    getLatestReleaseDownloadURL();
});
