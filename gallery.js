const header = document.querySelector('.sticky');
const backButton = document.querySelector('#back-to-top')
const menuButton = document.querySelector('.mobile-menu')
const nav = document.querySelector('nav ul')
const menuItems = document.querySelectorAll('nav ul li a')


window.onscroll = function() {scrollFunction(), backToTop()};

const scrollFunction = () =>{
    if(document.body.scrollTop>800 || document.documentElement.scrollTop>800){
        header.classList.add('newBg')
    }
    else {
        header.classList.remove('newBg')
    }
}
const backToTop = () =>{
    if(document.body.scrollTop>1000 || document.documentElement.scrollTop>1000){
      backButton.style.display= 'block'
    }
    else {
       backButton.style.display = 'none'
    }
}
const mobileMenu = () => {

    for (const link of menuItems) {
        link.addEventListener('click',mobileMenu)
    }
    if (nav.classList.contains('mobile-response')){
        nav.classList.remove('mobile-response')
    }
    else {
        nav.classList.add('mobile-response')
    }

}
const toTop = () =>{
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
}


backButton.addEventListener('click', toTop)
menuButton.addEventListener('click',mobileMenu)