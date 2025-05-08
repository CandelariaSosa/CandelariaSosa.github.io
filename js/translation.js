const langToggle = document.getElementById('langToggle');

function updateLanguage() {
    const isEnglish = langToggle.checked;
    document.querySelectorAll('.nav-link').forEach(link => {
        const span = link.querySelector('.translatable');
        if (span) {
            span.textContent = isEnglish ? link.dataset.en : link.dataset.es;
            // Condicional ternario: condición ? valor_si_verdadero : valor_si_falso;
            // dataset es una propiedad de los elementos HTML que permite acceder a los atributos personalizados que comienzan con data-
            // element.dataset.en  // Devuelve "HOME"
            // element.dataset.es  // Devuelve "INICIO"
        }
    });
}

// Evento al cambiar el estado del checkbox
langToggle.addEventListener('change', updateLanguage);

// Al cargar la página, asegura el idioma correcto
window.addEventListener('DOMContentLoaded', updateLanguage);
