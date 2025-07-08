
// about
const about = document.querySelector('#about');
const aboutcross = document.querySelector('#crossabout')

about.addEventListener('click', () => {
    document.querySelector('.box').classList.toggle('hide');
    document.querySelector('.mamma').classList.toggle('blur')
})

aboutcross.addEventListener('click', () => {
    document.querySelector('.box').classList.toggle('hide');
    document.querySelector('.mamma').classList.toggle('blur')
})


// certificate
const certificate = document.querySelector('#cert');
const certificatecross = document.querySelector('#crosscert')

certificate.addEventListener('click', () => {
    document.querySelector('.box6').classList.toggle('hide');
    document.querySelector('.mamma').classList.toggle('blur')
})

certificatecross.addEventListener('click', () => {
    document.querySelector('.box6').classList.toggle('hide');
    document.querySelector('.mamma').classList.toggle('blur')
})




// beyondcodes
const beyondcodes = document.querySelector('#beyond');
const beyondcodescross = document.querySelector('#crossbeyond')

beyondcodes.addEventListener('click', () => {
    document.querySelector('.box11').classList.toggle('hide');
    document.querySelector('.mamma').classList.toggle('blur')
})

beyondcodescross.addEventListener('click', () => {
    document.querySelector('.box11').classList.toggle('hide');
    document.querySelector('.mamma').classList.toggle('blur')
})





// skills
const skills = document.querySelector('#skills');
const skillscross = document.querySelector('#crossskill')

skills.addEventListener('click', () => {
    document.querySelector('.box12').classList.toggle('hide');
    document.querySelector('.mamma').classList.toggle('blur')
})

skillscross.addEventListener('click', () => {
    document.querySelector('.box12').classList.toggle('hide');
    document.querySelector('.mamma').classList.toggle('blur')
})




// contact
const contact = document.querySelector('#contact');
const contactcross = document.querySelector('#crosscontact')

contact.addEventListener('click', () => {
    document.querySelector('.box5').classList.toggle('hide');
    document.querySelector('.mamma').classList.toggle('blur')
})

contactcross.addEventListener('click', () => {
    document.querySelector('.box5').classList.toggle('hide');
    document.querySelector('.mamma').classList.toggle('blur')
})


const lets = document.querySelector('#let');


lets.addEventListener('click', () => {
    document.querySelector('.box5').classList.toggle('hide');
    document.querySelector('.mamma').classList.toggle('blur')
})

//certificate carousal
document.addEventListener('DOMContentLoaded', () =>{
    

    const images = document.querySelectorAll('.carousel-item');
    const prevBtn = document.querySelector('.carousel-btn-prev');
    const nextBtn = document.querySelector('.carousel-btn-next');

    // console.log(images)

    let currentIndex = 0;
    images[currentIndex].classList.add('active');

    prevBtn.addEventListener('click',() => {
        images[currentIndex].classList.remove('active');
        currentIndex=(currentIndex-1+images.length)% images.length;
        images[currentIndex].classList.add('active');
    });

    nextBtn.addEventListener('click',()=>{
        console.log(currentIndex)
        images[currentIndex].classList.remove('active');
        currentIndex=(currentIndex+1)%images.length;
        images[currentIndex].classList.add('active');
    });
});


// beyond code craousal
document.addEventListener('DOMContentLoaded', () =>{
    const images = document.querySelectorAll('.new');
    const right = document.querySelector('.right');
    const left = document.querySelector('.left');

    console.log(images)

    let currentIndex = 0;
    images[currentIndex].classList.add('activesecond');

    right.addEventListener('click',() => {
        console.log(currentIndex)
        images[currentIndex].classList.remove('activesecond');
        currentIndex=(currentIndex-1+images.length)% images.length;
        images[currentIndex].classList.add('activesecond');
    });

    left.addEventListener('click',()=>{
        console.log(currentIndex)
        images[currentIndex].classList.remove('activesecond');
        currentIndex=(currentIndex+1)%images.length;
        images[currentIndex].classList.add('activesecond');
    });




    
    const mamma= document.querySelector('#cross1');
const ham = document.querySelector('#ham');

    mamma.addEventListener('click', () => {
        document.querySelector('.herry').classList.toggle('hide');
        // document.querySelector('.mamma').classList.toggle('blur')
    })

    ham.addEventListener('click', () => {
        document.querySelector('.herry').classList.toggle('hide');
        // document.querySelector('.ham').classList.toggle('bl')
    })


})
