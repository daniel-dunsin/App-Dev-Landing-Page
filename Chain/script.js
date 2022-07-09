const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links-container ul");
const navToggler = document.getElementById("nav-toggler");

navToggler.addEventListener("click", () => {
  const linksHeight = links.getBoundingClientRect().height;
  const linksContainerHeight = linksContainer.getBoundingClientRect().height;
  if (linksContainerHeight === 0) {
    linksContainer.style.maxHeight = `${linksHeight}px`;
    navToggler.classList.add("change-toggler");
  } else {
    linksContainer.style.maxHeight = `0px`;
    navToggler.classList.remove("change-toggler");
  }
});

// add fixed when scrolled below nav height

const navbar = document.querySelector("nav");
const navHeight = navbar.getBoundingClientRect().height;
// scroll event
window.addEventListener("scroll", () => {
  if (window.pageYOffset > navHeight) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
});

// card hover effect
const hoverServicesImages = [
  { img: "images/service-icon-hover-01.png" },
  { img: "images/service-icon-hover-02.png" },
  { img: "images/service-icon-hover-03.png" },
  { img: "images/service-icon-hover-04.png" },
];
const servicesImages = [
  { img: "images/service-icon-01.png" },
  { img: "images/service-icon-02.png" },
  { img: "images/service-icon-03.png" },
  { img: "images/service-icon-04.png" },
];
const cards = document.querySelectorAll(".card");
cards.forEach((card, index) => {
  const image = card.querySelector("img");
  card.addEventListener("mouseover", () => {
    image.src = hoverServicesImages[index].img;
  });
  card.addEventListener("mouseleave", () => {
    image.src = servicesImages[index].img;
  });
});

// client reviews
const reviews = [
  {
    id: "1",
    name: "David Martino Co",
    position: "CEO of David Company",
    comment:
      "“Lorem ipsum dolor sit amet, consectetur adpiscing elit, sed do eismod tempor idunte ut labore et dolore magna aliqua darwin kengan lorem ipsum dolor sit amet, consectetur picing elit massive big blasta.”",
    img: "images/client-1.jpg",
  },
  {
    id: "2",
    name: "Jake Harris Nyo",
    position: "CTO of Digital Company",
    comment:
      "“CTO, Lorem ipsum dolor sit amet, consectetur adpiscing elit, sed do eismod tempor idunte ut labore et dolore magna aliqua darwin kengan lorem ipsum dolor sit amet, consectetur picing elit massive big blasta.”",
    img: "images/client-2.jpg",
  },
  {
    id: "3",
    name: "May C.",
    position: "Founder of Catherina Co.y",
    comment:
      "“May, Lorem ipsum dolor sit amet, consectetur adpiscing elit, sed do eismod tempor idunte ut labore et dolore magna aliqua darwin kengan lorem ipsum dolor sit amet, consectetur picing elit massive big blasta.”",
    img: "images/client-3.jpg",
  },
  {
    id: "4",
    name: "Random Staff",
    position: "Manager, Digital Company",
    comment:
      "“Lorem ipsum dolor sit amet, consectetur adpiscing elit, sed do eismod tempor idunte ut labore et dolore magna aliqua darwin kengan lorem ipsum dolor sit amet, consectetur picing elit massive big blasta.”",
    img: "images/client-4.jpg",
  },
  {
    id: "5",
    name: "Mark Am",
    position: "CTO, Amber Do Company",
    comment:
      "“Mark, Lorem ipsum dolor sit amet, consectetur adpiscing elit, sed do eismod tempor idunte ut labore et dolore magna aliqua darwin kengan lorem ipsum dolor sit amet, consectetur picing elit massive big blasta.”",
    img: "images/client-5.jpg",
  },
];

const tableRows = document.querySelectorAll(".reviews-table tr");
const commentEl = document.querySelector(".comment p");
const clientName = document.querySelector(".client-details h1");
const clientPosition = document.querySelector(".client-details p");
const clientImg = document.querySelector(".client-img img");

tableRows.forEach((table) => {
  table.addEventListener("click", (e) => {
    const id = e.currentTarget.dataset.id;
    // filter reviews array
    const clickedUser = reviews.find((user) => {
      return user.id == id;
    });
    clientName.textContent = clickedUser.name;
    clientPosition.textContent = clickedUser.position;
    commentEl.textContent = clickedUser.comment;
    clientImg.src = clickedUser.img;

    e.currentTarget.classList.add("table-hover");
    tableRows.forEach((tables) => {
      if (tables.dataset.id != id) {
        tables.classList.remove("table-hover");
      }
    });
  });
});


const bannerRight = document.querySelector('[data-banner-right]');
const bannerLeft = document.querySelector('[data-banner-left]');

window.addEventListener('DOMContentLoaded', ()=>{
  bannerRight.classList.add('come-in-right');
  bannerLeft.classList.add('come-in-left');
})

const dataLeft = document.querySelectorAll('[data-left]');
const dataRight = document.querySelectorAll('[data-right]');
const dataTop = document.querySelectorAll('[data-top]');
const dataBottom = document.querySelectorAll('[data-bottom]');

window.addEventListener('scroll', ()=>{
  dataLeft.forEach(item=> addAnimation(item, 'come-in-left'));
  dataRight.forEach(item => addAnimation(item, 'come-in-right'));
  dataBottom.forEach(item=> addAnimation(item, 'fade-in-bottom'));
  dataTop.forEach(item=> addAnimation(item, 'fade-in-top'));
})

function addAnimation(item, classList){
  if(item.getBoundingClientRect().top > window.pageYOffset){
    item.classList.add(classList);
  }
}