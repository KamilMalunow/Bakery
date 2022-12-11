const buttonIcon = document.querySelector('.menu');
const navigation = document.querySelector('.nav-info');
const navItem = document.querySelectorAll('.nav-item');


buttonIcon.addEventListener("click", function() {
    navigation.classList.toggle('active');
    buttonIcon.classList.toggle('active');
    for(item of navItem){
        item.classList.toggle('active');
    }
    
});


