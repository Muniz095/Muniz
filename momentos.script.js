document.addEventListener('DOMContentLoaded', () => {
    let slideshows = document.querySelectorAll('.slideshow-container');
    slideshows.forEach((container) => {
        let slides = container.querySelectorAll('.slide');
        if (slides.length > 0) {
            slides[0].style.display = 'block';
            let bolinhas = container.nextElementSibling.querySelectorAll('.bolinha');
            if (bolinhas.length > 0) {
                bolinhas[0].classList.add('ativa');
            }
        }
    });
});

function mudarFoto(elemento, n) {
    let slideshowContainer = elemento.parentElement;
    let slides = slideshowContainer.querySelectorAll('.slide');
    let bolinhasContainer = slideshowContainer.nextElementSibling;
    let bolinhas = bolinhasContainer.querySelectorAll('.bolinha');
    
    let currentIndex = 0;
    for(let i = 0; i < slides.length; i++) {
        if(slides[i].style.display === 'block') {
            currentIndex = i;
            break;
        }
    }

    let newIndex = currentIndex + n;

    if (newIndex >= slides.length) {
        newIndex = 0;
    }
    if (newIndex < 0) {
        newIndex = slides.length - 1;
    }

    mostrarFotos(slideshowContainer, newIndex + 1);
}

function fotoAtual(elemento, n) {
    let slideshowContainer = elemento.parentElement.previousElementSibling;
    mostrarFotos(slideshowContainer, n);
}

function mostrarFotos(slideshowContainer, n) {
    let i;
    let slides = slideshowContainer.querySelectorAll('.slide');
    let bolinhasContainer = slideshowContainer.nextElementSibling;
    let bolinhas = bolinhasContainer.querySelectorAll('.bolinha');

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < bolinhas.length; i++) {
        bolinhas[i].classList.remove("ativa");
    }

    slides[n - 1].style.display = "block";
    bolinhas[n - 1].classList.add("ativa");
}
