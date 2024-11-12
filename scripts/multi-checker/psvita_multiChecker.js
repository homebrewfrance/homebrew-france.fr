document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const majorVersion = parseInt(document.querySelector('select[name="major-version"]').value, 10);
        const minorVersion = parseInt(document.querySelector('select[name="minor-version"]').value, 10);

        if (majorVersion === 3) {
            if (minorVersion >= 60 && minorVersion <= 63) {
                window.location = 'https://homebrew-france.fr/docs/psvita/update-3.74';
            } else if (minorVersion === 60) {
                window.location = 'https://homebrew-france.fr/docs/psvita/3.60';
            } else if (minorVersion === 65) {
                window.location = 'https://homebrew-france.fr/docs/psvita/henlo';
            } else if (minorVersion >= 67 && minorVersion <= 73) {
                window.location = 'https://homebrew-france.fr/docs/psvita/update-3.74';
            } else if (minorVersion === 74) {
                window.location = 'https://homebrew-france.fr/docs/psvita/henlo';
            }
        } else if (majorVersion >= 1 && majorVersion <= 3) {
            if (minorVersion >= 3 && minorVersion <= 59) {
                window.location = 'https://homebrew-france.fr/docs/psvita/update-3.74';
            }
        }
    });
});
