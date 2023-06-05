let loc = 0;

// --------------menu------------------------
let list = document.querySelector(".links ul");
let menu = document.querySelector("div.btn i");
// scroll
let header = document.querySelector("header");

menu.addEventListener("click" , function () {
  if (list.classList.length == 0) {
    list.classList.toggle("open");
  } else if (list.classList.length == 1) {
    list.classList.toggle("open");
    list.classList.toggle("close");
  }
  if (list.classList.contains("open")) {
    menu.classList.replace("fa-bars", "fa-x");
  } else {
    menu.classList.replace("fa-x", "fa-bars");
  }
})
document.addEventListener("click", function (e) {
  if (e.target !== list && e.target !== menu) {
    if (list.classList.contains("open")) {
      list.classList.toggle("close");
      list.classList.remove("open");
      if (list.classList.contains("open")) {
        menu.classList.replace("fa-bars", "fa-x");
      } else {
        menu.classList.replace("fa-x", "fa-bars");
      }
    }
  }
});
list.addEventListener("click", function (e) {e.stopPropagation();});
// menu on scroll


// -------------------end-menu-----------------------
// write effect
let eff = document.querySelector(
  ".landing .container .text h1 .effect::before"
);
let writeE = document.querySelector(".effect");
setTimeout(() => {
  const textEffect = () => {
    setTimeout(() => {
      writeE.textContent = "Web Developer";
    }, 0);
    setTimeout(() => {
      writeE.textContent = "Freelancer";
    }, 4000);
    setTimeout(() => {
      writeE.textContent = "YouTuber";
    }, 8000);
  };
  textEffect();
  setInterval(textEffect, 12000);
}, 1000);
//  end write effect
// social
let social = document.createElement("div");
social.classList.add("social");

social.innerHTML =
  "<a href='#'><i class='fa-brands fa-facebook-f'></i></a><a href='#'><i class='fa-brands fa-twitter'></i></a><a href='#'><i class='fa-brands fa-linkedin-in'></i></a><a href='#'><i class='fa-brands fa-instagram'></i></a>";

let socialP = document.querySelector(".landing .container .text");
let socialLink = document.querySelectorAll(".social a");
const cont = document.querySelector(".landing .container");
var w = 0;

socialP.appendChild(social);
social.classList.add("inner");

window.addEventListener("resize", function () {
  w = window.innerWidth;
  if (w >= 500 && w <= 990) {
    cont.appendChild(social);

    if (social.classList.contains("inner")) {
      social.classList.remove("inner");
      social.classList.add("outer");
    } else {
      social.classList.add("outer");
    }
  } else {
    socialP.append(social);

    if (social.classList.contains("outer")) {
      social.classList.remove("outer");
      social.classList.add("inner");
    } else {
      social.classList.add("inner");
    }
  }
});

// social
// scroll bottom
let scrollBottom = document.getElementById("BTN");
window.addEventListener("scroll", function () {
  if (window.scrollY >= 500) {
    scrollBottom.style.display = "block";
  } else {
    scrollBottom.style.display = "none";
  }
});
scrollBottom.onclick = () => {
  window.scrollTo(0, 0);
};
// scroll bottom End

// start about scroll animation
let about = document.querySelector("#about");
let aboutImage = document.querySelector(".about .image");
let aboutText = document.querySelector(".about .text");

window.onscroll = function () {
  if (window.scrollY >= about.offsetTop - 500) {
    aboutImage.style.cssText = "transform: translateX(0);opacity:1;";
    aboutText.style.cssText = "transform: translateX(0);opacity:1;";
  }
};
// End about scroll animation

// start service scroll animation
let service = document.getElementById("service");
let serviceHeading = document.querySelector(".service .spacial-heading");
let serviceCards = document.querySelectorAll(".service .card");

window.addEventListener("scroll", function () {
  if (window.scrollY >= service.offsetTop - 500) {
    serviceHeading.style.cssText = "transform: translateX(0);opacity:1;";
    if (window.innerWidth <= 991) {
      serviceCards.forEach((card) => {
        card.style.cssText = "transform: translateX(0); opacity:1;";
      });
    } else {
      serviceCards[0].style.cssText = "transform: translateX(0); opacity:1;";
      serviceCards[1].style.cssText = "transform: translateY(0); opacity:1;";
      serviceCards[2].style.cssText = "transform: translateX(0); opacity:1;";
      serviceCards[3].style.cssText = "transform: translateX(0); opacity:1;";
      serviceCards[4].style.cssText = "transform: translateY(0); opacity:1;";
      serviceCards[5].style.cssText = "transform: translateX(0); opacity:1;";
    }
  }
});
// end service scroll animation

/*------------------- start Contact for freelance ----------*/
let freelance = document.getElementsByClassName("freelance");

window.addEventListener("scroll", () => {
  if (window.scrollY >= freelance[0].offsetTop - 200) {
    freelance[0].children[0].children[0].style.cssText =
      "transform: translateY(0);opacity:1 ; ";
    freelance[0].children[0].children[1].style.cssText =
      "transform: translateY(0);opacity:1 ; ";
  }
});
//  End Contact for freelance

// Start MyWork

// Start filter

let switcherLis = document.querySelectorAll(".switch li");
let imgs = Array.from(document.querySelectorAll(".all"));

switcherLis.forEach((li) => {
  li.addEventListener("click", removeActive);
  li.addEventListener("click", manageImgs);
});

//Remove active class from all lis and add to current
function removeActive() {
  switcherLis.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
  });
}

//Manage Imgs
function manageImgs() {
  imgs.forEach((img) => {
    img.classList.add("non-chick");
    setTimeout(() => {
      img.style.display = "none";
    }, 500);
  });
  document.querySelectorAll(this.dataset.name).forEach((el) => {
    el.classList.remove("non-chick");
    el.classList.add("chick");
    setTimeout(() => {
      el.style.display = "block";
    }, 500);
  });
}
// End filter
let work = document.querySelector(".work");

window.addEventListener("scroll", () => {
  if (window.scrollY >= work.offsetTop - 500) {
    // spacial heading
    work.children[0].style.cssText = "transform:translateY(0);opacity:1;";
    // ul
    work.children[1].children[0].style.cssText =
      "transform:translateY(0);opacity: 1;";
    // images

    work.children[1].children[1].style.cssText =
      "transform:translateX(0px);opacity:1;";

    // btn
    work.children[1].children[2].style.cssText =
      "transform:translate(-50% , 0);opacity:1;";
  }
});
// scroll animation
// End MyWork

//Start counter
let counter = document.querySelectorAll(".counter .container .column h3 span");

let section = document.querySelector(".counter");
let started = false; //function not started

window.addEventListener("scroll", function () {
  if (window.scrollY >= section.offsetTop - 300) {
    if (!started) {
      counter.forEach((span) => countUp(span));
    }
    started = true;
  }
});
function countUp(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
//End counter
// Start resume
let resume = document.querySelector(".resume");
window.addEventListener("scroll", function () {
  if (window.scrollY >= resume.offsetTop - 200) {
    resume.children[0].children[0].style.cssText =
      "transform: translateX(0);opacity: 1;";
    resume.children[0].children[1].style.cssText =
      "transform: translateX(0);opacity: 1;";
  }
});
// End resume
// Start Blog
let blog = document.querySelector(".blog");
window.addEventListener("scroll", function () {
  if (window.scrollY >= blog.offsetTop - 100) {
    //spacial heading
    blog.children[0].style.cssText = "transform:translateY(0);opacity:1;";
    //box
    blog.children[1].children[0].style.cssText =
      "transform: translateX(0);opacity: 1;";
    blog.children[1].children[1].style.cssText =
      "transform: translateY(0);opacity: 1;";
    blog.children[1].children[2].style.cssText =
      "transform: translateX(0);opacity: 1;";
  }
});
// End Blog

// Start contact
let contact = document.querySelector(".contact");
window.addEventListener("scroll", function () {
  if (window.scrollY >= contact.offsetTop - 200) {
    //spacial heading
    contact.children[0].style.cssText = "transform:translateY(0);opacity:1;";
    contact.children[1].children[0].style.cssText =
      "opacity:1;transform:translateY(0);";
    contact.children[1].children[0].children[0].focus();
  }
});
// check before send

let userName = document.querySelector("[name='Name']");
let userEmail = document.querySelector("[name='email']");
let massage = document.querySelector("#massage");

document.forms[0].onsubmit = function (e) {
  let userV = false;
  let EmailV = false;
  let massageValid = false;

  if (userName.value !== "" && userName.value.length >= 4) {
    userV = true;
  }   
  if (userEmail.value !== "") {
    EmailV = true;
  } 
  if (massage.value !== "" && massage.value.length >= 15) {
    massageValid = true;

  }
  if (userV === false || massageValid === false || EmailV === false) {
    e.preventDefault();
  }
};

// check before send

// End contact
