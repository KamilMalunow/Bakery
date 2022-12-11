const allButton = document.querySelector('.all');
const cakesButton = document.querySelector('.cakes');
const cupcakesButton = document.querySelector('.cupcakes');
const sweetsButton = document.querySelector('.sweets');
const doughnutsButton = document.querySelector('.doughnuts');

const sweetsItems = document.querySelectorAll('.sweets');
const cakeItems = document.querySelectorAll('.cake');
const cupcakeItems = document.querySelectorAll('.cupcake');
const doughnutsItems = document.querySelectorAll('.doughnut');

const items = document.querySelectorAll('.item');



cakesButton.addEventListener("click", () => {
    for (item of items) {
        for (cake of cakeItems) {
            item.style.display = "none";
            cake.style.display = "flex";

        }

    }
});

cupcakesButton.addEventListener("click", () => {
    for (item of items) {
        for (cupcake of cupcakeItems) {
            item.style.display = "none";
            cupcake.style.display = "flex";

        }

    }
});


sweetsButton.addEventListener("click", () => {
    for (item of items) {
        for (sweets of sweetsItems) {
            item.style.display = "none";
            sweets.style.display = "flex";

        }

    }
});


doughnutsButton.addEventListener("click", () => {
    for (item of items) {
        for (doughnuts of doughnutsItems) {
            item.style.display = "none";
            doughnuts.style.display = "flex";

        }

    }
});


allButton.addEventListener("click", () => {
    for (item of items) {
        item.style.display = "flex";

    }

}
);


const searchBox = document.querySelector('#search-item')


const storeItems = document.querySelectorAll('.item')

searchBox.addEventListener('keyup', (e) => {

    const searchFilter = e.target.value.toLowerCase().trim()


    storeItems.forEach((item) => {
        if (item.textContent.includes(searchFilter)) {
            item.style.display = 'flex'
        } else {
            item.style.display = 'none'
        }
    })
});


const popupLayout = document.querySelector('.popup-image_layout');
const pictures = document.querySelectorAll('.item-img img')
const popupClose = document.querySelector('.popup-close');
const popup = document.querySelector('.popup');
let currentImgIndex;

function showPhoto() {
    

    pictures.forEach((picture, index) => {
        picture.addEventListener("click", (e) => {
            popupLayout.classList.remove("hidden");
           
            popup.src = e.target.src;
            currentImgIndex = index;
            console.log(currentImgIndex)
        })


    });
}



function closePopup() {
   

    popupClose.addEventListener("click", () => {
        popupLayout.classList.add("fadeOut")
        setTimeout(() => {
            popupLayout.classList.add("hidden");
            popupLayout.classList.remove("fadeOut")
        }, 300)
        
    })
}


const arrowLeft = document.querySelector('.popup-arrow--left')
const arrowRight = document.querySelector('.popup-arrow--right')


function nextPicture() {
    arrowRight.addEventListener("click", () => {
        currentImgIndex = currentImgIndex + 1;
        popup.src =  pictures[currentImgIndex].src;

        if(currentImgIndex === 11){
            currentImgIndex = -1;
        } else {}
    })
}

function previousPicture() {
    arrowLeft.addEventListener("click", () => {
        currentImgIndex = currentImgIndex - 1;
        popup.src =  pictures[currentImgIndex].src;

        if(currentImgIndex === 0){
            currentImgIndex = 12;
        } else {}
    })
}


popupLayout.addEventListener("click",(e) => {
    if(e.target === popupLayout){
        popupLayout.classList.add("hidden");
    }
});


previousPicture();
nextPicture();
closePopup();
showPhoto();
