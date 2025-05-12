// Para traducir el nav -------------------------------------------------------
const langToggle = document.getElementById('langToggle');
// langToggle es el id del elemento del botón de idioma

// Para traducir el resto de la pág ----------------------------------------
const translations = {
  es: {
    greeting: "¡Hola!",
    name: "Soy Candelaria,",
    role: "Desarrolladora Full Stack",
    contact: "CONTACTAME",
    p1: "Soy Candelaria, Desarrolladora Full Stack. Me apasiona crear soluciones digitales completas que faciliten la vida de las personas. Como desarrolladora, trabajo tanto en el frontend como en el backend, construyendo aplicaciones funcionales, intuitivas y eficientes.",
    p2: "Me encanta enfrentar nuevos retos, optimizar procesos y ofrecer experiencias que marquen la diferencia. Si tenes una idea o proyecto en mente, ¡estoy lista para hacerlo realidad!",
    aboutMe: "¿Quién soy?",
    p3: "Soy Candelaria Sosa. Vivo en Chacabuco, provincia de Buenos Aires. Siempre me gustaron los desafíos, acertijos y encontrarle solución a las cosas, es por eso que hoy soy Profesora de Matemática. Más allá de ello, elijo seguir formandome y desafiándome, por eso en 2022 hice un curso de programación, donde descubrí una nueva pasión que hoy continúa e imagino durará para siempre. Actualmente me encuentro cursando el tercer (y último) año de la carrera Análisis en Sistemas, con el deseo de poder dedicarme cien por ciento a este rubro.",
    personalData: "Mis datos personales",
    cel: "Celular",
    email: "Email",
    ubication: "Ubicación",
    footer1: "CV web Candelaria Sosa",
    footer2: "Desarrolladora Full Stack",
    footer3: "&copy Copyright 2025. Desarrollado por Candelaria Sosa.",
  },
  en: {
    greeting: "Hi!",
    name: "I'm Candelaria,",
    role: "Full Stack Developer",
    contact: "CONTACT ME",
    p1: "I'm Candelaria, a Full Stack Developer. I'm passionate about creating complete digital solutions that make people's lives easier. As a developer, I work on both the frontend and backend, building functional, intuitive, and efficient applications.",
    p2: "I love facing new challenges, optimizing processes, and delivering experiences that make a difference. If you have an idea or a project in mind, I'm ready to bring it to life!",
    aboutMe: "About me",
    p3: "I'm Candelaria Sosa. I live in Chacabuco, Buenos Aires province. I've always loved challenges, puzzles, and finding solutions to things, which is why today I am a Mathematics Teacher. Beyond that, I choose to continue learning and challenging myself, which is why in 2022 I took a programming course, where I discovered a new passion that continues today and I imagine will last forever. I am currently in my third (and final) year of a degree in Systems Analysis, with the desire to dedicate myself 100 percent to this field.",
    cv: "DOWNLOAD CV",
    personalData: "My personal Data",
    cel: "Mobile Phone",
    email: "Email",
    ubication: "Ubication",
    footer1: "Web CV Candelaria Sosa",
    footer2: "Full Stack Developer",
    footer3: "&copy Copyright 2025. Developed by Candelaria Sosa.",
  }
};

// Cargar idioma desde localStorage (si existe)
function loadLanguage() {
    const savedLang = localStorage.getItem('language');
    if (savedLang === 'en') {
        langToggle.checked = true;
    } else {
        langToggle.checked = false;
    }
    updateLanguage(); // Aplica el idioma
}

function updateLanguage() {
    const isEnglish = langToggle.checked;
    const lang = isEnglish ? 'en' : 'es';

    // Guardar idioma en localStorage
    localStorage.setItem('language', lang);

    // Traducir el nav
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

    // Traducir elementos con data-i18n (el resto de la pag)
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            // Usamos innerHTML por si hay etiquetas como <strong>
            el.innerHTML = translations[lang][key];
        }
    });
}

// Evento al cambiar el estado del checkbox
langToggle.addEventListener('change', updateLanguage);

// Al cargar la página, asegura el idioma correcto
window.addEventListener('DOMContentLoaded', loadLanguage);
