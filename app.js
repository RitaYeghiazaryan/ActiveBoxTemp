document.addEventListener("DOMContentLoaded", () => {
    //Scroll
    const links = document.querySelectorAll(".nav__link");

    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener("click", function (event) {
            event.preventDefault();
            const blockId = event.target.getAttribute('href').substr(1)
            document.getElementById(blockId).scrollIntoView({
                behavior: 'smooth',
                block: "start",
            })
            console.log(blockId)
        })
    }
    //Toogle Menu
    const burger = document.querySelector("#navToggle")
    const menuItem = document.querySelector("nav")
    burger.addEventListener("click", function () {
        burger.classList.toggle('active')
        menuItem.classList.toggle("show")
        burger.classList.add('burger')
    })



    //Slider
    const slideWrapper = document.querySelector(".reviews__slider")
    const slides = document.querySelectorAll('.slid__item')

    let slidesIndex = 1;
    slideWrapper.style.position = "reletive"
    const indicators = document.createElement('ol')
    const dots = [];
    indicators.classList.add("slick-dots")
    slideWrapper.append(indicators)

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li')
        dot.setAttribute('data-slide-to', i + 1);
        dot.classList.add("dot")
        indicators.append(dot);
        dots.push(dot);

    }
    dots.forEach(dot => {

        dot.addEventListener("click", (e, n) => {
            e.preventDefault()
            let slideTo = e.target.getAttribute('data-slide-to')
            slidesIndex = slideTo
            if (slideTo == slides.length) {
                slideTo = 1
            } else {
                slideTo++
            }
            console.log(slides.length);

            slides.forEach(slide => slide.style.display = "none")
            slides[slidesIndex - 1].style.display = "block"


            dots.forEach(dot => dot.style.opacity = 1);
            dots[slidesIndex - 1].style.opacity = ".5";

        })
    })
})