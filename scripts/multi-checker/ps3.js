
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const numberInputPS3Value = document.querySelector('input[name="numberInputPS3"]').value;
        const form = document.querySelector('form');
        const resultat = document.getElementById("resultat");


        function compatible() {
            resultat.innerHTML = '';
            var container = document.createElement('div');
            container.className = 'compatible-container';
            var divCompatible = document.createElement('div');
            divCompatible.className = 'compatible';
            divCompatible.innerHTML = '<i class="fas fa-check-circle"></i>&nbsp;&nbsp;<strong>Compatible CFW</strong>';
            container.appendChild(divCompatible);
            var infos = document.createElement('div');
            infos.className = 'infos';
            infos.innerHTML = '<p>Votre console est compatible avec un CFW permanent.</p>';
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
            divIncompatible.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i>&nbsp;&nbsp;<strong>Incompatible CFW</strong>';
            container.appendChild(divIncompatible);
            var infos = document.createElement('div');
            infos.className = 'infos';
            infos.innerHTML = '<p>Votre console est incompatible avec un CFW permanent. Préférez l’installation du HEN (Hybrid Firmware)</p>';
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
            infos.innerHTML = '<p>Le numéro de modèle que vous avez entré est invalide.<br>Vérifiez si votre numéro de modèle est valide.</p>';
            var modelType = document.createElement('small');
            modelType.className = 'model-type';
            container.appendChild(infos);
            container.appendChild(modelType);
            container.appendChild(infos);
            resultat.appendChild(container);
        }

        if (numberInputPS3Value.length == 10) {
            var cechValue = numberInputPS3Value.slice(0,7).toUpperCase();
            var letterValue = numberInputPS3Value.slice(-1);
            console.log('cech: ' + cechValue);
            if ((cechValue === "CECH-20" || cechValue === "CECH-21" || cechValue === "CECH-25") && 
            (letterValue === "A" || letterValue === "B" || letterValue === "C" || letterValue === "D")) {
                compatible();
                var modelType = document.getElementsByClassName('model-type')[0];
                modelType.innerHTML = '<strong>Modèle :</strong> PlayStation 3 <strong>Slim</strong>'
            }
            else if ((cechValue === "CECH-30" || cechValue === "CECH-42" || cechValue === "CECH-43") && 
                (letterValue === "A" || letterValue === "B" || letterValue === "C" || letterValue === "D")) {
                incompatible();
                var modelType = document.getElementsByClassName('model-type')[0];
                modelType.innerHTML = '<strong>Modèle :</strong> PlayStation 3 <strong>Slim</strong>'
            } 
            else if ((cechValue === "CECH-40") && 
            (letterValue === "A" || letterValue === "B" || letterValue === "C" || letterValue === "D")) {
                incompatible();
                var modelType = document.getElementsByClassName('model-type')[0];
                modelType.innerHTML = '<strong>Modèle :</strong> PlayStation 3 <strong>Super Slim</strong>'
            } 
        }

        else if (numberInputPS3Value.length >= 9 && numberInputPS3Value.length != 7) {
            var cechValue = numberInputPS3Value.slice(0,6).toUpperCase();
            console.log(cechValue);
            var letterValue = numberInputPS3Value.slice(-1);
            console.log(letterValue);
            var addCheck = cechValue[4];
            console.log(addCheck);
            if ((cechValue === "CECH20" || cechValue === "CECH21" || cechValue === "CECH25") && 
            (letterValue === "A" || letterValue === "B" || letterValue === "C" || letterValue === "D")) {
                compatible();
                var modelType = document.getElementsByClassName('model-type')[0];
                modelType.innerHTML = '<strong>Modèle :</strong> PlayStation 3 <strong>Slim</strong>'
            }
            else if ((cechValue === "CECH30" || cechValue === "CECH42" || cechValue === "CECH43") && 
                (letterValue === "A" || letterValue === "B" || letterValue === "C" || letterValue === "D")) {
                incompatible();
                var modelType = document.getElementsByClassName('model-type')[0];
                modelType.innerHTML = '<strong>Modèle :</strong> PlayStation 3 <strong>Slim</strong>'
            } 
            else if ((cechValue === "CECH40") && 
            (letterValue === "A" || letterValue === "B" || letterValue === "C" || letterValue === "D")) {
                incompatible();
                var modelType = document.getElementsByClassName('model-type')[0];
                modelType.innerHTML = '<strong>Modèle :</strong> PlayStation 3 <strong>Super Slim</strong>'
            } 
            else if (!Number.isInteger(addCheck)) {
                var cechValue = numberInputPS3Value.slice(0,5).toUpperCase();
                var addCheckEnd = numberInputPS3Value.slice(-2);
                console.log(addCheckEnd);
                if (cechValue === "CECHA" || cechValue === "CECHB" || cechValue === "CECHC" || cechValue === "CECHE" || cechValue === "CECHF" || cechValue === "CECHG" || cechValue === "CECHH" || cechValue === "CECHJ" || cechValue === "CECHK" || cechValue === "CECHL" || cechValue === "CECHM" || cechValue === "CECHP" || cechValue === "CECHQ") {
                    compatible();
                    var modelType = document.getElementsByClassName('model-type')[0];
                    if (addCheckEnd.includes('MG')) {
                        modelType.innerHTML = '<strong>Modèle :</strong> PlayStation 3 <strong>FAT</strong> - Edition Metal Gear'
                    }
                    else {
                        modelType.innerHTML = '<strong>Modèle :</strong> PlayStation 3 <strong>FAT</strong>'
                    }
                    
                }
            }
        }

        else if (numberInputPS3Value.length == 7) {
            cechValue = numberInputPS3Value.slice(0,5).toUpperCase();
            console.log('cech: ' + cechValue);

            if (cechValue === "CECHA" || cechValue === "CECHB" || cechValue === "CECHC" || cechValue === "CECHE" || cechValue === "CECHF" || cechValue === "CECHG" || cechValue === "CECHH" || cechValue === "CECHJ" || cechValue === "CECHK" || cechValue === "CECHL" || cechValue === "CECHM" || cechValue === "CECHP" || cechValue === "CECHQ") {
                compatible();
                var modelType = document.getElementsByClassName('model-type')[0];
                modelType.innerHTML = '<strong>Modèle :</strong> PlayStation 3 <strong>FAT</strong>'
            }
        }

        else {
            invalid();
        }
    });

});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('resultat').innerHTML = "<div class=\"rslt-placeholder\">Lumia Multi-Checker v0.4b</div>";
});