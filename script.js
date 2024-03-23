const ham = document.querySelector('.hamburgur');

const ul = document.querySelector('ul');

ham.addEventListener('click', () => {
    ul.classList.toggle('show');
    console.log("Btn clicked");

    let hamChild = ham.firstElementChild;
    if (ham.classList.contains('show')) {
        hamChild.classList.replace('fa-bars', 'fa-x');
    } else {
        hamChild.classList.replace('fa-x', 'fa-bars');
    }
});