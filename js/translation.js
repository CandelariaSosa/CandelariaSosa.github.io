// Para traducir el nav -------------------------------------------------------
const langToggle = document.getElementById('langToggle');
// langToggle es el id del elemento del botón de idioma

// Para traducir el resto de la pág ----------------------------------------
const translations = {
  es: {
    // Index
    greeting: "¡Hola!",
    name: "Soy Candelaria,",
    role: "Desarrolladora Full Stack",
    contact: "CONTACTAME",
    p1: "Soy Candelaria, Desarrolladora Full Stack. Me apasiona crear soluciones digitales completas que faciliten la vida de las personas. Como desarrolladora, trabajo tanto en el frontend como en el backend, construyendo aplicaciones funcionales, intuitivas y eficientes. <br> Me encanta enfrentar nuevos retos, optimizar procesos y ofrecer experiencias que marquen la diferencia. Si tenes una idea o proyecto en mente, ¡estoy lista para hacerlo realidad!",
    aboutMe: "Sobre mí",
    p2: "Soy Candelaria Sosa, vivo en Chacabuco, provincia de Buenos Aires. Siempre me atrajeron los desafíos y la resolución de problemas, lo que me llevó a ser Profesora de Matemática. En 2022 descubrí mi pasión por la programación, y desde entonces sigo formándome. Actualmente soy Técnica Superior en Análisis de Sistemas, y tengo el objetivo de dedicarme por completo al mundo del software y la tecnología.",
    cv: "DESCARGAR CV",
    personalData: "Mis datos personales",
    cel: "Celular",
    email: "Email",
    ubication: "Ubicación",
    footer1: "CV web Candelaria Sosa",
    footer2: "Desarrolladora Full Stack",
    footer3: "&copy 2025. Desarrollado por Candelaria Sosa.",
    // studies - formacion academica
    formation: "Formación académica",
    f1: "Tecnicatura en Análisis de Sistemas",
    f2: "Egreso Diciembre 2025",
    f3: "Instituto Superior de Formación Técnica N° 132.",
    f4: "Chacabuco, Buenos Aires.",
    f5: "Curso de Programación Web Full Stack",
    f6: "Agosto 2022 - Febrero 2023",
    f7: "Programá Desde Tu Casa.",
    f8: "Profesorado de Matemática",
    f9: "Egreso Mayo 2022",
    f10: "Instituto Superior de Formación Docente N° 131.",
    // study - experiencia
    e1: "Experiencia laboral",
    e2: "Programadora Web",
    e3: "Septiembre 2025 - Actualidad",
    e4: "Independiente",
    e5: "Desarrollo de páginas web utilizando WordPress.",
    e6: "Profesora de NTICx",
    e7: "Abril 2025 - Actualidad",
    e8: "Escuela de Educación Secundaria N° 9.",
    e9: "Profesora de Matemática",
    e10: "Noviembre 2024 - Actualidad",
    e11: "Escuela de Educación Secundaria Técnica N° 1.",
    e12: "Pasante de Programación",
    e13: "Septiembre 2024 - Octubre 2024",
    e14: "Arweb Studio | remoto",
    e15: "Manejo de datos obtenidos de una API (websocket) utilizando Python.",
    // study - proyectos
    project1: "Algunos de mis proyectos",
    project2: "Gimnasio",
    project3: "Trabajo realizado con Bootstrap, Python, Flask y SQL.<br> Ingresar con: <br> ususario: administrador <br> contraseña: 12345",
    project4: "Ir al sitio",
    project5: "Duo Web Studio",
    project6: "Página web realizada con WordPress. <br>Servicios de diseño y desarrollo de páginas web.",
    project7: "Versys Consultora",
    project8: "Página web realizada con WordPress. <br>Consultora de seguridad e higiene.",
    project9: "API clima",
    project10: "Trabajo realizado con Bootstrap y JavaScript. <br> Sirve para conocer el clima en tiempo real de un lugar consumiendo una API.",
    project11: "Filtrar autos",
    project12: "Trabajo realizado con Bootstrap y JavaScript. <br> Sirve para filtrar autos por su marca.",
    // tools
    tools: "Herramientas y Lenguajes",
  },
  en: {
    // index
    greeting: "Hi!",
    name: "I'm Candelaria,",
    role: "Full Stack Developer",
    contact: "CONTACT ME",
    p1: "I'm Candelaria, a Full Stack Developer. I'm passionate about creating complete digital solutions that make people's lives easier. As a developer, I work on both the frontend and backend, building functional, intuitive, and efficient applications. <br> I love facing new challenges, optimizing processes, and delivering experiences that make a difference. If you have an idea or a project in mind, I'm ready to bring it to life!",
    aboutMe: "About me",
    p2: "I'm Candelaria Sosa, from Chacabuco, Buenos Aires. I've always been drawn to challenges and problem-solving, which led me to become a Mathematics teacher. In 2022, I discovered my passion for programming, and since then, I've continued to pursue my education in the field. I am currently a Senior Technician in Systems Analysis, and my goal is to dedicate myself fully to the world of software and technology.",
    cv: "DOWNLOAD CV",
    personalData: "My personal Data",
    cel: "Mobile Phone",
    email: "Email",
    ubication: "Ubication",
    footer1: "Web CV Candelaria Sosa",
    footer2: "Full Stack Developer",
    footer3: "&copy 2025. Developed by Candelaria Sosa.",
    // study - formacion academica
    formation: "Academic training",
    f1: "Technician in Systems Analysis",
    f2: "Graduation December 2025",
    f3: "Higher Institute of Technical Training N° 132.",
    f4: "Chacabuco, Buenos Aires.",
    f5: "Full Stack Web Programming Course",
    f6: "August 2022 - February 2023",
    f7: "Program From Your Home.",
    f8: "Mathematics Teaching Staff",
    f9: "Graduation May 2022",
    f10: "Higher Institute of Teacher Training N° 131.",
    // study - experience
    e1: "Work Experience",
    e2: "Web Programmer",
    e3: "September 2025 - present",
    e4: "Independent",
    e5: "Web page development using WordPress.",
    e6: "NTICx Teacher",
    e7: "April 2025 - Present",
    e8: "Secondary School N° 9",
    e9: "Mathematics Teacher",
    e10: "November 2024 - Present",
    e11: "Technical Secondary School N° 1",
    e12: "Programming Intern",
    e13: "September 2024 - October 2024",
    e14: "Arweb Studio | remote",
    e15: "Handling data obtained from an API (websocket) using Python.",
    // study - projects
    project1: "Some of my projects",
    project2: "Gym",
    project3: "Work done using Bootstrap, Python, Flask, and SQL.<br> Log in with: <br> user: administrador <br> password: 12345",
    project4: "Go to site",
    project5: "Duo Web Studio",
    project6: "Website created with WordPress.<br>Website design and development services.",
    project7: "Versys Consulting",
    project8: "Website created with WordPress. <br>Safety and hygiene consultant.",
    project9: "Weather API",
    project10: "Work done using Bootstrap and JavaScript. <br> Allows checking the real-time weather of a location by consuming an API.",
    project11: "Filter cars",
    project12: "Work done using Bootstrap and JavaScript. <br> Allows filtering cars by brand.",
    // tools
    tools: "Tools and Languages",
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
