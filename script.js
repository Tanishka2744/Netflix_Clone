// for nav section 
const bars = document.querySelector('.bars i');
const navList = document.querySelector('.navlist');
const navIcon = document.querySelector('.nav-icon')

bars.parentElement.addEventListener('click', (e) => {
    e.preventDefault();

    bars.classList.toggle('fa-bars');
    bars.classList.toggle('fa-xmark');

    navList.classList.toggle('navlist-active')
    navIcon.classList.toggle('nav-icon-active')
});


// for home section

const searchBtn = document.getElementById("searchBtn");
const searchBox = document.getElementById("searchBox");
const closeSearch = document.getElementById("closeSearch");

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    searchBox.style.display = "flex";
});

closeSearch.addEventListener("click", () => {
    searchBox.style.display = "none";
});

const userBtn = document.getElementById("userBtn");
const dropdownMenu = document.getElementById("dropdownMenu");

userBtn.addEventListener("click", (e) => {
    e.preventDefault();
    dropdownMenu.style.display =
        dropdownMenu.style.display === "block" ? "none" : "block";
});

document.addEventListener("click", (e) => {
    if (!e.target.closest(".user-menu")) {
        dropdownMenu.style.display = "none";
    }
});


const slides = [
    {
        img: "assets/img/slider/slider1.jpg",
        title: "Captain America",
        desc: "The First Avenger - A Super Soldier with a Shield",
        info: "2024 • Action | Adventure | Sci-fi • 2hr 4min",
        trailer: "https://www.youtube.com/embed/xbqNb2PFKKA"
    },
    {
        img: "assets/img/slider/slider2.jpg",
        title: "Frozen",
        desc: "A Journey Of a Girl Name Elsa who Discover Her Ice Powers and Learning About Love ",
        info: "2023 • Action | Adventure | Comedy | Fantasy • 1hr 42min",
        trailer: "https://www.youtube.com/embed/TbQm5doF_Uc?si=taBBKO993dfs0ILp"
    },
    {
        img: "assets/img/slider/slider3.jpg",
        title: "Annabelle",
        desc: "The Possessed Dolls Brings Supernatural Horror to a Family",
        info: "2022 • Horror | Mystery | Thriller • 1hr 39min",
        trailer: "https://www.youtube.com/embed/paFgQNPGlsg?si=65KXr_rfe6hsgtAt"
    }
];

let currentIndex = 0;

const bannerImg = document.getElementById("banner-img");
const movieTitle = document.getElementById("movie-title");
const movieDesc = document.getElementById("movie-desc");
const movieInfo = document.getElementById("movie-info");
const dots = document.querySelectorAll(".dot");
const playBtn = document.getElementById("playBtn");
const trailerModal = document.getElementById("trailerModal");
const trailerVideo = document.getElementById("trailerVideo");
const closeBtn = document.querySelector(".close");

function showSlide(index) {
    let slide = slides[index];
    bannerImg.src = slide.img;
    movieTitle.textContent = slide.title;
    movieDesc.textContent = slide.desc;
    movieInfo.textContent = slide.info;
    playBtn.setAttribute("data-trailer", slide.trailer);

    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
}

showSlide(currentIndex);

setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}, 5000);

dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        currentIndex = i;
        showSlide(currentIndex);
    });
});

playBtn.onclick = function () {
    let trailerLink = playBtn.getAttribute("data-trailer");
    trailerVideo.src = trailerLink + "?autoplay=1";
    trailerModal.style.display = "block";
};

closeBtn.onclick = function () {
    trailerModal.style.display = "none";
    trailerVideo.src = "";
};

window.onclick = function (e) {
    if (e.target == trailerModal) {
        trailerModal.style.display = "none";
        trailerVideo.src = "";
    }
};

// for arrow section

const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list")

arrows.forEach((arrow, i) => {
    const itemNumber = movieLists[i].querySelectorAll("img").length;
    let clickCounter = 0;
    arrow.addEventListener("click", () => {
        const ratio = Math.floor(window.innerWidth / 270);
        clickCounter++
        if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
            movieLists[i].style.transform = `translateX(${movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
                }px)`;
        } else {
            movieLists[i].style.transform = "translateX(0)";
            clickCounter = 0;
        }
    });

    console.log(Math.floor(window.innerWidth / 270));
})

// for parallex section

const watchBtn = document.getElementById("watchNowBtn");
const modal = document.getElementById("trailerModal");
const closeModal = document.getElementById("closeModal");
const trailersVideo = document.getElementById("trailerVideo");

watchBtn.addEventListener("click", () => {
    modal.style.display = "flex";
    trailersVideo.src = "https://www.youtube.com/embed/d9MyW72ELq0?autoplay=1";
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
    trailersVideo.src = "";
});

