document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const numberInputRaw = document.querySelector('input[name="numberInput"]').value;
        const numberInput = numberInputRaw.slice(-11);
        const resultat = document.getElementById("resultat");
        const pageName = document.querySelector('body').getAttribute('page_name');
        const xawSelector = numberInputRaw.slice(0,3).toUpperCase();
        console.log(numberInput);
        console.log(xawSelector);

        function compatible() {
            resultat.innerHTML = '';
            var container = document.createElement('div');
            container.className = 'compatible-container';
            var divCompatible = document.createElement('div');
            divCompatible.className = 'compatible';
            divCompatible.innerHTML = '<i class="fas fa-check-circle"></i>&nbsp;&nbsp;<strong>Console non patchée</strong>';
            container.appendChild(divCompatible);
            var infos = document.createElement('div');
            infos.className = 'infos';
            if (pageName === 'docs') { 
                infos.innerHTML = '<p>Votre console est compatible avec la faille RCM.</br>Vous pouvez continuer à <a href="https://docs.homebrew-france.fr/switch/#simuler-jig">l’étape suivante</a>.</p>';
            }
            else {
                infos.innerHTML = '<p>Votre console est compatible avec la faille RCM.</p>';
            }
            var modelType = document.createElement('small');
            modelType.className = 'model-type';
            container.appendChild(infos);
            container.appendChild(modelType);
            resultat.appendChild(container);
        }

        function maybeCompatible() {
            resultat.innerHTML = '';
            var container = document.createElement('div');
            container.className = 'maybe-compatible-container';
            var divMaybeCompatible = document.createElement('div');
            divMaybeCompatible.className = 'maybe-compatible';
            divMaybeCompatible.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i>&nbsp;&nbsp;<strong>Console potentiellement patchée</strong>';
            container.appendChild(divMaybeCompatible);
            var infos = document.createElement('div');
            infos.className = 'infos';
            infos.innerHTML = '<p>Votre console est supposée compatible avec la faille RCM.</br>Votre console nécessite l’installation d’une puce.</br><a href="https://homebrew-france.fr/boutique">Plus d’infos</a></p>';
            var modelType = document.createElement('small');
            modelType.className = 'model-type';
            container.appendChild(infos);
            container.appendChild(modelType);
            resultat.appendChild(container);
        }

        function incompatible() {
            resultat.innerHTML = '';
            var container = document.createElement('div');
            container.className = 'incompatible-container';
            var divIncompatible = document.createElement('div');
            divIncompatible.className = 'incompatible';
            divIncompatible.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i>&nbsp;&nbsp;<strong>Console patchée</strong>';
            container.appendChild(divIncompatible);
            var infos = document.createElement('div');
            infos.className = 'infos';
            infos.innerHTML = '<p>Votre console est incompatible avec la faille RCM.</br>Votre console nécessite l’installation d’une puce.</br><a href="https://homebrew-france.fr/boutique">Plus d’infos</a></p>';
            var modelType = document.createElement('small');
            modelType.className = 'model-type';
            container.appendChild(infos);
            container.appendChild(modelType);
            resultat.appendChild(container);
        }

        function invalid() {
            resultat.innerHTML = '';
            var container = document.createElement('div');
            container.className = 'incompatible-container';
            var divIncompatible = document.createElement('div');
            divIncompatible.className = 'incompatible';
            divIncompatible.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i>&nbsp;&nbsp;<strong>Attention</strong>';
            container.appendChild(divIncompatible);
            var infos = document.createElement('div');
            infos.className = 'infos';
            infos.innerHTML = '<p>Le numéro de série que vous avez entré est invalide.<br>Vérifiez si votre numéro de série est valide.</p>';
            var modelType = document.createElement('small');
            modelType.className = 'model-type';
            container.appendChild(infos);
            container.appendChild(modelType);
            resultat.appendChild(container);
        }

        if (xawSelector === "XAW") {
            if (numberInput >= 10000000000 && numberInput <= 10074000000) {
                compatible();
                var modelType = document.getElementsByClassName('model-type')[0];
                modelType.innerHTML = '<strong>Modèle :</strong> Nintendo Switch <strong>V1</strong>'
            } 
            else if (numberInput > 10074000000 && numberInput <= 10120000000) {
                maybeCompatible();
                var modelType = document.getElementsByClassName('model-type')[0];
                modelType.innerHTML = '<strong>Modèle :</strong> Nintendo Switch <strong>V2</strong>&nbsp;/&nbsp;<strong>V1 Patch</strong>'
            } 
            else if (numberInput > 10120000000 && numberInput <= 40000000000) {
                incompatible();
                var modelType = document.getElementsByClassName('model-type')[0];
                modelType.innerHTML = '<strong>Modèle :</strong> Nintendo Switch <strong>V2</strong>&nbsp;/&nbsp;<strong>V1 Patch</strong>'
            } 
            else if (numberInput >= 40000000000 && numberInput <= 40011000000) {
                compatible();
                var modelType = document.getElementsByClassName('model-type')[0];
                modelType.innerHTML = '<strong>Modèle :</strong> Nintendo Switch <strong>V1</strong>'
            } 
            else if (numberInput > 40011000000 && numberInput <= 40012000000) {
                maybeCompatible();
                var modelType = document.getElementsByClassName('model-type')[0];
                modelType.innerHTML = '<strong>Modèle :</strong> Nintendo Switch <strong>V2</strong>&nbsp;/&nbsp;<strong>V1 Patch</strong>'
            } 
            else if (numberInput > 40012000000 && numberInput <= 70000000000) {
                incompatible();
                var modelType = document.getElementsByClassName('model-type')[0];
                modelType.innerHTML = '<strong>Modèle :</strong> Nintendo Switch <strong>V2</strong>&nbsp;/&nbsp;<strong>V1 Patch</strong>'
            } 
            else if (numberInput >= 70000000000 && numberInput <= 70017800000) {
                compatible();
                var modelType = document.getElementsByClassName('model-type')[0];
                modelType.innerHTML = '<strong>Modèle :</strong> Nintendo Switch <strong>V1</strong>'
            } 
            else if (numberInput > 70017800000 && numberInput <= 70030000000) {
                maybeCompatible();
                var modelType = document.getElementsByClassName('model-type')[0];
                modelType.innerHTML = '<strong>Modèle :</strong> Nintendo Switch <strong>V2</strong>&nbsp;/&nbsp;<strong>V1 Patch</strong>'
            } 
            else if (numberInput > 70030000000 && numberInput <= 99999999999) {
                incompatible();
                var modelType = document.getElementsByClassName('model-type')[0];
                modelType.innerHTML = '<strong>Modèle :</strong> Nintendo Switch <strong>V2</strong>&nbsp;/&nbsp;<strong>V1 Patch</strong>'
            } 
            else {
                invalid();
            }
        } else if (xawSelector === "XAJ") {
            if (numberInput >= 10000000000 && numberInput <= 10020000000) {
                compatible();
                var modelType = document.getElementsByClassName('model-type')[0];
                modelType.innerHTML = '<strong>Modèle :</strong> Nintendo Switch <strong>V1</strong>'
            } 
            else if (numberInput > 10020000000 && numberInput <= 10030000000) {
                maybeCompatible();
                var modelType = document.getElementsByClassName('model-type')[0];
                modelType.innerHTML = '<strong>Modèle :</strong> Nintendo Switch <strong>V2</strong>&nbsp;/&nbsp;<strong>V1 Patch</strong>'
            } 
            else if (numberInput > 10030000000 && numberInput <= 40000000000) {
                incompatible();
                var modelType = document.getElementsByClassName('model-type')[0];
                modelType.innerHTML = '<strong>Modèle :</strong> Nintendo Switch <strong>V2</strong>&nbsp;/&nbsp;<strong>V1 Patch</strong>'
            } 
            else if (numberInput >= 40000000000 && numberInput <= 40046000000) {
                compatible();
                var modelType = document.getElementsByClassName('model-type')[0];
                modelType.innerHTML = '<strong>Modèle :</strong> Nintendo Switch <strong>V1</strong>'
            } 
            else if (numberInput > 40046000000 && numberInput <= 40060000000) {
                maybeCompatible();
                var modelType = document.getElementsByClassName('model-type')[0];
                modelType.innerHTML = '<strong>Modèle :</strong> Nintendo Switch <strong>V2</strong>&nbsp;/&nbsp;<strong>V1 Patch</strong>'
            } 
            else if (numberInput > 40060000000 && numberInput <= 70000000000) {
                incompatible();
                var modelType = document.getElementsByClassName('model-type')[0];
                modelType.innerHTML = '<strong>Modèle :</strong> Nintendo Switch <strong>V2</strong>&nbsp;/&nbsp;<strong>V1 Patch</strong>'
            } 
            else if (numberInput >= 70000000000 && numberInput <= 70040000000) {
                compatible();
                var modelType = document.getElementsByClassName('model-type')[0];
                modelType.innerHTML = '<strong>Modèle :</strong> Nintendo Switch <strong>V1</strong>'
            } 
            else if (numberInput > 70040000000 && numberInput <= 70050000000) {
                maybeCompatible();
                var modelType = document.getElementsByClassName('model-type')[0];
                modelType.innerHTML = '<strong>Modèle :</strong> Nintendo Switch <strong>V2</strong>&nbsp;/&nbsp;<strong>V1 Patch</strong>'
            } 
            else if (numberInput > 70050000000 && numberInput <= 99999999999) {
                incompatible();
                var modelType = document.getElementsByClassName('model-type')[0];
                modelType.innerHTML = '<strong>Modèle :</strong> Nintendo Switch <strong>V2</strong>&nbsp;/&nbsp;<strong>V1 Patch</strong>'
            } 
            else {
                invalid();
            }
        }
        else if (xawSelector === "XJW" || xawSelector === 'XKW') {
            if (numberInput >= 10000000000) {
                incompatible();
                var modelType = document.getElementsByClassName('model-type')[0];
                modelType.innerHTML = '<strong>Modèle :</strong> Nintendo Switch <strong>Lite</strong>'
            }
        }
        else if (xawSelector === "XTW" || xawSelector === "XWW") {
            if (numberInput >= 10000000000) {
                incompatible();
                var modelType = document.getElementsByClassName('model-type')[0];
                modelType.innerHTML = '<strong>Modèle :</strong> Nintendo Switch <strong>OLED</strong>'
            }
        } else {
            invalid();
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('resultat').innerHTML = "<div class=\"rslt-placeholder\">Lumia Multi-Checker v0.4b</div>";
});