
function toggleMenu() {
    document.getElementById("navbar").classList.toggle("open");
  }


document.addEventListener("DOMContentLoaded", () => {
    const images = [
        "contenedores.jpg",
        "contenedores 2.jpg",
        "contenedores 3.jpeg"
    ];

    const texts = [
        "Consultoría y gestoría de comercio exterior",
        "Servicios de operativa de importaciones, creación de marca y desarrollo de E-commerce",
        "En South Comex nos especializamos en brindar soluciones integrales para importadores y emprendedores que buscan expandir sus negocios en el mercado internacional y digital"
    ];

    let currentIndex = 0;
    const presentation = document.querySelector(".presentation");
    const dynamicText = document.getElementById("dynamic-text");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    function updateSlide() {
        presentation.style.backgroundImage = `url('${images[currentIndex]}')`;

        // Cambia el texto con animación de opacidad
        dynamicText.style.opacity = "0";
        setTimeout(() => {
            dynamicText.textContent = texts[currentIndex];
            dynamicText.style.opacity = "1";
        }, 500);
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % images.length;
        updateSlide();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateSlide();
    }

    // Inicializa el primer fondo
    updateSlide();

    // Cambio automático cada 4 segundos
    let autoChange = setInterval(nextSlide, 4000);

    // Event Listeners para los botones
    nextBtn.addEventListener("click", () => {
        nextSlide();
        resetAutoChange();
    });

    prevBtn.addEventListener("click", () => {
        prevSlide();
        resetAutoChange();
    });

    // Reiniciar el temporizador cuando se usa un botón
    function resetAutoChange() {
        clearInterval(autoChange);
        autoChange = setInterval(nextSlide, 4000);
    }
});


document.addEventListener('DOMContentLoaded', function () {
    // Seleccionar todos los botones del acordeón
    const accordionButtons = document.querySelectorAll('.accordion-button');
    // Seleccionar todos los contenidos del acordeón
    const accordionContents = document.querySelectorAll('.accordion-content');

    // Añadir evento click a cada botón
    accordionButtons.forEach((button, index) => {
        button.addEventListener('click', function () {
            // Cerrar todos los contenidos
            accordionContents.forEach(content => {
                content.classList.remove('active');
            });

            // Remover clase active de todos los botones
            accordionButtons.forEach(btn => {
                btn.classList.remove('active');
            });

            // Activar el contenido correspondiente al botón clickeado
            accordionContents[index].classList.add('active');

            // Añadir clase active al botón clickeado
            this.classList.add('active');
        });
    });

    // Activar el primer panel por defecto al cargar la página
    if (accordionButtons.length > 0 && accordionContents.length > 0) {
        accordionButtons[0].classList.add('active');
        accordionContents[0].classList.add('active');
    }
});

// JavaScript para desplegar y ocultar contenido
function toggleContent(sectionId, buttonId) {
    // Oculta todo el contenido
    const allContent = document.querySelectorAll('.hidden-content');
    allContent.forEach((content) => {
        content.style.display = 'none';
    });

    // Remueve la clase "active" de todos los botones
    const allButtons = document.querySelectorAll('.toggle-btn');
    allButtons.forEach((btn) => {
        btn.classList.remove('active');
    });

    // Muestra el contenido seleccionado y marca el botón como activo
    const selectedContent = document.getElementById(sectionId);
    const selectedButton = document.getElementById(buttonId);

    if (selectedContent.style.display === 'block') {
        // Si el contenido ya está visible, se oculta
        selectedContent.style.display = 'none';
        selectedButton.classList.remove('active');
    } else {
        // Si el contenido está oculto, se muestra
        selectedContent.style.display = 'block';
        selectedButton.classList.add('active');
    }
}


function setBackgroundSize(size) {
    const presentation = document.querySelector('.presentation');
    presentation.style.setProperty('--background-size', size);
}

// Ejemplo de uso
setBackgroundSize('50%'); // Cambia el tamaño del fondo al 50%

