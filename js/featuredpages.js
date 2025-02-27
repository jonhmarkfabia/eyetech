document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll('.right-img-bg, .left-img-bg, .right-text-bg, .left-text-bg, .overlay-img, .overlay-img-2, .overlay-img-left, .overlay-img-left-2');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            } else {
                entry.target.style.animationPlayState = 'paused';
            }
        });
    });
  
    elements.forEach(el => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    });

    
    const elementsToAnimate = document.querySelectorAll(
        '.main-image, .text-overlays, .gallery-image, .gallery-images, .intro-textss, .highlight, .price-gallery, .price-gallerys'
    );

    const observer2 = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); 
                observer2.unobserve(entry.target); 
            }
        });
    });
  
   
    elementsToAnimate.forEach(element => {
        element.classList.add('hidden'); 
        observer2.observe(element); 
    });
});


const wrapper = document.querySelector(".slides");
const menuItems = document.querySelectorAll(".page");
const pageBtns = document.querySelectorAll(".page-btn");
const images = document.querySelectorAll(".image-girl, .image-girl-blur"); 
const greenElements = document.querySelectorAll(".green3, .green2, .green1, .green-title, .green-des, .green-dec2"); 
const imageproduct = document.querySelectorAll(".imagess1,.imagess2,.imagess3,.imagess4");


let currentIndex = 0;


wrapper.style.transform = `translateX(${-100 * currentIndex}vw)`;


function triggerAnimation() {
    imageproduct.forEach((el) => {
        el.classList.remove("image-animates"); 
        void el.offsetWidth; 
        el.classList.add("image-animates");
    });
}

function updateActivePage() {
    pageBtns.forEach((btn, index) => {
        if (index === currentIndex) {
            btn.classList.add("active"); 
        } else {
            btn.classList.remove("active"); 
        }
    });
}


function triggerGreenElementsAnimation() {
    greenElements.forEach((el) => {
        el.classList.remove("green-animate"); 
        void el.offsetWidth; 
        el.classList.add("green-animate"); 
    });
}


updateActivePage();


pageBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        currentIndex = index; 
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
        updateActivePage(); 

        triggerGreenElementsAnimation();
        triggerAnimation();

       
        images.forEach((img) => {
            img.classList.remove("image-animate"); 
            void img.offsetWidth; 
            img.classList.add("image-animate"); 
        });
    });
});


const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

nextBtn.addEventListener("click", () => {
    if (currentIndex < menuItems.length - 1) {
        currentIndex++;
        wrapper.style.transform = `translateX(${-100 * currentIndex}vw)`;
        updateActivePage();
        
        triggerGreenElementsAnimation();
        triggerAnimation();

       
        images.forEach((img) => {
            img.classList.remove("image-animate");
            void img.offsetWidth; 
            img.classList.add("image-animate");
        });
    }
});

prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        wrapper.style.transform = `translateX(${-100 * currentIndex}vw)`;
        updateActivePage();

        triggerGreenElementsAnimation();
        triggerAnimation();
        
      
        images.forEach((img) => {
            img.classList.remove("image-animate");
            void img.offsetWidth; 
            img.classList.add("image-animate");
        });
    }
});


