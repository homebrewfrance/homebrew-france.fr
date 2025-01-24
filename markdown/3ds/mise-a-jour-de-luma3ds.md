<p>Au même titre que boot9strap, Luma3DS nécessite également d’être mis à jour de temps en temps. Deux méthodes s’offrent à vous.</p>

### Mise à jour via Universal-Updater (recommandé) :

1. Lancez « Universal-Updater ». Patientez pendant la vérification des mises à jour.

2. Cherchez « Luma » dans la barre de recherche, vérifiez s’il y a un badge vert avec une flèche à côté de l’icône de Luma. Si c’est le cas, procédez à l’étape suivante, sinon cela veut dire que vous êtes à jour.

3. Appuyez sur <img src="https://cdn.homebrew-france.site/docs/buttons/switch_a_button.png" width="18" height="18" /> pour lancer le téléchargement de la mise à jour. Vous pouvez passer à la section « Configuration de Luma ».

   *Note: le logiciel « Luma3DS Updater » n’est plus fonctionnel à ce jour, vous devez impérativement utiliser l’Universal-Updater.*

---

### Mise à jour manuelle :

<div class="prerequis">
  <h3>PRÉREQUIS :</h3>
  <ul>
    <li><a href="https://github.com/LumaTeam/Luma3DS/releases">La dernière version de Luma3DS</a>&nbsp;<img src="https://hbf-files.github.io/download.gif" width="18" height="18"></li>
  </ul>
</div>

1. Décompressez l'archive de Luma3DS téléchargée précédemment, copiez les fichiers `boot.firm` et `boot.3dsx` à [la racine de votre carte SD](https://homebrew-france.fr/sdroot/).

2. Allumez votre console, un écran de configuration apparaîtra.

---

### Configuration de Luma3DS :

Sélectionnez les options cochées comme sur l’image ci-dessous puis appuyez sur START :

<img src="https://cdn.homebrew-france.site/docs/3ds/luma-config.png" width="420px" />  

---

### V. Sauvegarde de la mémoire système (NAND Backup)

Cette manipulation va créer une sauvegarde de votre mémoire système. Cette copie est créée à des fins de récupération en cas de panne (brick). Environ 1,5Gb d’espace libre sont nécessaires sur la carte SD pour créer la sauvegarde.

1. Éteignez votre console.

2. Allumez-la en maintenant le bouton START, deux cas de figure :
   - Vous arrivez sur un menu, sélectionnez alors « GodMode9 ».
   - Vous arrivez directement sur « GodMode9 ».

3. Ce message peut parfois apparaître. Appuyez sur <img src="https://cdn.homebrew-france.site/docs/buttons/switch_b_button.png" width="18" height="18" /> pour refuser.
   <img src="https://cdn.homebrew-france.site/docs/3ds/nandbackup-1.jpg">

4. Appuyez sur le bouton HOME ➜ « Scripts » ➜ « GM9Megascript » ➜ « Backup Options ».  
    <br/>
   <img src="https://cdn.homebrew-france.site/docs/3ds/nandbackup-2.png" width="250px" />
   <img src="https://cdn.homebrew-france.site/docs/3ds/nandbackup-3.png" width="250px" />
   <img src="https://cdn.homebrew-france.site/docs/3ds/nandbackup-4.png" width="250px" />
   <br/>

5. Sélectionnez « SysNAND Backup » puis appuyez sur <img src="https://cdn.homebrew-france.site/docs/buttons/switch_a_button.png" width="18" height="18" /> pour confirmer.  
    <br/>
   <img src="https://cdn.homebrew-france.site/docs/3ds/nandbackup-5.png" width="250px" />
   <img src="https://cdn.homebrew-france.site/docs/3ds/nandbackup-6.png" width="250px" />
   <br/>

6. Patientez jusqu’à la fin du processus (cela peut prendre plusieurs minutes) puis appuyez sur <img src="https://cdn.homebrew-france.site/docs/buttons/switch_a_button.png" width="18" height="18" /> pour finaliser.  
    <br/>
   <img src="https://cdn.homebrew-france.site/docs/3ds/nandbackup-7.png" width="250px" />
   <img src="https://cdn.homebrew-france.site/docs/3ds/nandbackup-8.png" width="250px" />
   <br/>

7. Une fois terminé, appuyez sur HOME et sélectionnez « Poweroff system ».  
    <br/>
   <img src="https://cdn.homebrew-france.site/docs/3ds/nandbackup-9.png" width="250px" />
   <br/>

8. Insérez la carte SD de votre 3DS dans votre PC ou téléphone :
   - Rendez-vous dans le dossier `/gm9/out/` de la carte SD et copiez les deux fichiers terminant par `_sysnand_##.bin` et `_sysnand_##.bin.sha` à un endroit sûr sur votre PC ou votre téléphone.
