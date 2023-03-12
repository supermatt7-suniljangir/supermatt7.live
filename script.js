// Get the form element
const form = document.querySelector("form");
let inputAll = document.querySelectorAll("input");
// Get the success message element
const successMessage = document.querySelector(".success-message");

// Add an event listener for form submission
form.addEventListener("submit", (event) => {
  // Prevent the default form submission
  event.preventDefault();

  // Get the form data
  const formData = new FormData(form);

  // Create a new XHR object
  const xhr = new XMLHttpRequest();

  // Set up the XHR request
  xhr.open("POST", form.action, true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  // Set up the event listener for when the XHR request finishes
  xhr.onload = function () {
    if (xhr.status === 200) {
      // Success! Do something with the response here.
      document.querySelector("#button-2").textContent="send";
      
        document.querySelector(".audio").play();
      
      successMessage.classList.remove("hidden");
      document.querySelector(".processing").classList.add("hidden");
      //play the soundtrack fro .audio
      setTimeout(function () {
        successMessage.classList.add("hidden");
      }, 5000);
      form.reset();
    } else {
      // Error. Do something with the error here.
      document.querySelector(".processing").classList.add("hidden");
      alert(
        "There was an error submitting your message. Please try again later."
      );
      

    }
  };

  // Send the XHR request with the form data
  xhr.send(new URLSearchParams(formData));
});

const spanTags = document.querySelectorAll(".span1");
//working with the animations of the span tags
spanTags.forEach((tag) =>
  tag.addEventListener("mouseover", () => {
    tag.classList.add("myanime2");
    setTimeout(function () {
      tag.classList.remove("myanime2");
    }, 700);
  })
);
//on form submit message
let formSubmit = () => {
  document.querySelector(".processing").classList.remove("hidden");
  document.querySelector("#button-2").textContent="sending..";
  

}




//working with .developer

const developer = document.querySelector(".developer");
//change textconect of .developer to designer every four seconds and then back to developer after 4 seconds again and again
setInterval(function () {
  setTimeout(function () {
    developer.textContent = "Designer";
  }, 0);
  setTimeout(function () {
    developer.textContent = "Developer";
  }, 4000);
}, 8000);

// spanTags.forEach(tag => tag.addEventListener('mouseover', () => {
//     tag.classList.add('myanime2');
// }));

// spanTags.forEach(tag => tag.addEventListener('mouseover', () => {
//     tag.classList.add('myanime2');
// }));
// opening navbar when clikc on ham burger
let ham = () => {
  document.querySelector(".navigation").classList.remove("hidden");
  document.querySelector(".ham-burger").classList.add("hidden");
  document.querySelector(".day").style.opacity = "0";
  document.querySelector("#scroll-down-right-2").style.opacity = "0";
  document.querySelector(".cancel").classList.remove("hidden");
  document.querySelector(".navbar").classList.remove("hidden");
  document.querySelector(".navbar").style.width = "100%";
};
document.querySelector(".ham-burger").addEventListener("click", ham);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// closing navbar when clikced on cancel
let cancel = () => {
  document.querySelector(".day").style.opacity = "1";
  document.querySelector("#scroll-down-right-2").style.opacity = "1";
  document.querySelector(".navigation").classList.add("hidden");
  document.querySelector(".ham-burger").classList.remove("hidden");
  document.querySelector(".cancel").classList.add("hidden");
  document.querySelector(".navbar").classList.add("hidden");
};

document.querySelector(".cancel").addEventListener("click", cancel);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// putting navigation baar aside when clikced on links
let putmeoff = () => {
  document.querySelector(".day").style.opacity = "1";
  document.querySelector(".navigation").classList.add("hidden");
  document.querySelector(".navbar").classList.add("hidden");
  document.querySelector(".ham-burger").classList.remove("hidden");
  document.querySelector(".cancel").classList.add("hidden");
};

let tempInterface = document.querySelectorAll('.put-me-off')

  tempInterface.forEach((tempremove => tempremove.addEventListener('click', putmeoff)))
////////////////////////////////////////////////////////////////////////////////////////////////////////////

//sunil is setting thing up function
let showAndHide = () => {
  document.querySelector(".sunil-is-thinking").classList.remove("hidden");
  setTimeout(function () {
    document.querySelector(".sunil-is-thinking").classList.add("hidden");
  }, 1500);
};
tempInterface.forEach((tempremove => tempremove.addEventListener('click', showAndHide)))


////////////////////////////////////////////////////////////////////////////////////////////////////////////
// window.addEventListener('scroll',() => {
//
// });

document.querySelector(".day").addEventListener("click", () => {

  spanTags.forEach((tag) => tag.classList.remove("toggle-hover-animation-2"));
  spanTags.forEach((tag) => tag.classList.add("toggle-hover-animation"));
  for (let i = 1; i <= 9; i++) {
    document.querySelector(`.about-lists-${i}`).classList.add("toggle-colors");
  }

  for (let i = 1; i <= 3; i++) {
    document.querySelector(`.tab-link-${i}`).classList.add("toggle-colors");
  }
  for (let i = 1; i <= 3; i++) {
    document
      .querySelector(`.tab-link-${i}`)
      .classList.add("tab-link-click-event-toggle");
  }

  document.querySelector(".day").classList.add("hidden");
  document.querySelector(".night").classList.remove("hidden");
  document.querySelector("body").classList.add("toggle-background");
  document.querySelector(".a-frontend-dev").classList.add("toggle-colors");


  document.querySelector(".developer").classList.add("toggle-before-for-i-am-a-developer-2");
  document.querySelector(".developer").classList.add("toggle-colors2");
  document.querySelector(".developer").classList.remove("toggle-before-for-i-am-a-developer-1");


  for (let i = 1; i <= 5; i++) {
    document.querySelector(".hr" + i).classList.add("toggle-background3");
  }
                   
  document.querySelector('.temp-heading-for-blog').classList.add('toggle-colors2')
//   document
//   .querySelector(".flex-for-skills-1")
//   .classList.add("toggle-background4");
// document
//   .querySelector(".flex-for-skills-2")
//   .classList.add("toggle-background4");
  // document.querySelector(".flex-for-skills-1").classList.add("toggle-colors");
  // document.querySelector(".flex-for-skills-2").classList.add("toggle-colors");
  // document.querySelector(".flex-for-skills-2").classList.add("toggle-colors");
  document.querySelector(".span-tags").classList.add("toggle-colors");

  for (let i = 2; i <= 5; i++) {
    document.querySelector(".span-tags-" + i).classList.add("toggle-colors");
  }
  //  const spanTags = document.querySelectorAll('.info-on-card');
  //  spanTags.forEach(tag => tag.classList.add('hidden'));
  for (let i = 1; i <= 9; i++) {
    document.querySelector(".span-2-" + i).classList.add("toggle-colors2");
  }
  document.getElementById("cv-link-for-home").style.color = "black";
  document.querySelector(".slide").style.background = "orangered";
  document.getElementById("cv-download-button-home-id").style.border = "3px solid orangered";
  document.querySelector(".day").classList.add("hidden");
  document.querySelector(".night").classList.remove("hidden");
  document.querySelector("body").classList.add("toggle-background");
  document.querySelector(".a-frontend-dev").classList.add("toggle-colors");
  document.querySelector("#scroll-down-right-1").src = "img/scroll2.svg";
  document.getElementById("scroll-down-left").src = "img/scroll2.svg";
  document.querySelector("#scroll-down-right-2").src = "img/scroll2.svg";
  document.querySelector(".sunil2").classList.add("toggle-colors2");
  document.querySelector(".read-before-you-write").classList.add("toggle-colors2");
  document.querySelector(".contact-container-2").classList.add("toggle-colors2");

  document.getElementById("button-2").classList.add("toggle-border-2");
  document.getElementById("button-2").classList.add("toggle-colors2");
  // document.getElementById('name').classList.add('toggle-colors2');
  // document.getElementById('email').classList.add('toggle-colors2');
  // document.getElementById('phone').classList.add('toggle-colors2');
  document.getElementById("message").classList.add("toggle-colors2");
  document.querySelector(".form").classList.add("toggle-background4");

  inputAll.forEach((input) => input.classList.add("toggle-colors2"));
  inputAll.forEach((input) => input.classList.add("toggle-background5"));
  inputAll.forEach((input) => input.classList.add("newfocus"));
  document.querySelector("#message").classList.add("toggle-background5");
  document.querySelector("#message").classList.add("newfocus");
  // for (let i = 1; i <= 52; i++) {
  //     document.querySelector('.span-1-' + i).classList.remove('toggle-hover-animation-2');
  // }

  // for (let i = 1; i <= 52; i++) {
  //     document.querySelector('.span-1-' + i).classList.add('toggle-hover-animation');
  // }
});

document.querySelector(".night").addEventListener("click", () => {
  document.querySelector('.temp-heading-for-blog').classList.remove('toggle-colors2')

  document.querySelector(".developer").classList.remove("toggle-before-for-i-am-a-developer-2");
  document.querySelector(".developer").classList.add("toggle-before-for-i-am-a-developer-1");
  document.querySelector(".developer").classList.remove("toggle-colors2");

  spanTags.forEach((tag) => tag.classList.remove("toggle-hover-animation"));
  spanTags.forEach((tag) => tag.classList.add("toggle-hover-animation-2"));
  document.querySelector("body").classList.remove("toggle-background");
  document.querySelector(".day").classList.remove("hidden");
  document.querySelector(".night").classList.add("hidden");
  document
  //   .querySelector(".flex-for-skills-1")
  //   .classList.remove("toggle-background4");
  // document
  //   .querySelector(".flex-for-skills-2")
  //   .classList.remove("toggle-background4");
  // document
  //   .querySelector(".flex-for-skills-1")
  //   .classList.remove("toggle-colors");
  // document
  //   .querySelector(".flex-for-skills-2")
  //   .classList.remove("toggle-colors");

  for (let i = 2; i <= 5; i++) {
    document.querySelector(".span-tags-" + i).classList.remove("toggle-colors");
  }
  document.getElementById("button-2").classList.remove("toggle-colors2");
  document.querySelector("#scroll-down-right-1").src = "img/scroll.svg";
  document.getElementById("scroll-down-left").src = "img/scroll.svg";
  document.querySelector("#scroll-down-right-2").src = "img/scroll.svg";
  document.querySelector(".sunil2").classList.remove("toggle-colors2");
  document.getElementById("cv-link-for-home").classList.remove("toggle-colors");
  document.querySelector(".read-before-you-write").classList.remove("toggle-colors2");
  document.querySelector(".contact-container-2").classList.remove("toggle-colors2");
  document.getElementById("button-2").classList.remove("toggle-border-2");
  // document.getElementById('name').classList.remove('toggle-colors2');
  // document.getElementById('email').classList.remove('toggle-colors2');
  // document.getElementById('phone').classList.remove('toggle-colors2');
  document.getElementById("message").classList.remove("toggle-colors2");
  document.querySelector(".form").classList.remove("toggle-background4");
  inputAll.forEach((input) => input.classList.remove("toggle-colors2"));
  inputAll.forEach((input) => input.classList.remove("toggle-background5"));
  inputAll.forEach((input) => input.classList.remove("newfocus"));
  document.querySelector("#message").classList.remove("newfocus");
  document.querySelector("#message").classList.remove("toggle-background5");
  for (let i = 1; i <= 5; i++) {
    document.querySelector(".hr" + i).classList.remove("toggle-background3");
  }
  document.querySelector(".slide").style.background = "aqua";
  document.getElementById("cv-link-for-home").style.color = "aqua";
  document.getElementById("cv-download-button-home-id").style.border =
    "3px solid aqua";
  document.querySelector(".a-frontend-dev").classList.remove("toggle-colors");
  document.querySelector(".span-tags").classList.remove("toggle-colors");

  for (let i = 1; i <= 3; i++) {
    document.querySelector(`.tab-link-${i}`).classList.remove("toggle-colors");
  }
  for (let i = 1; i <= 3; i++) {
    document
      .querySelector(`.tab-link-${i}`)
      .classList.remove("tab-link-click-event-toggle");
  }

  for (let i = 1; i <= 9; i++) {
    document
      .querySelector(`.about-lists-${i}`)
      .classList.remove("toggle-colors");
  }
  // for (let i = 1; i < 52; i++) {
  //     document.querySelector('.span-1-' + i).classList.remove('toggle-hover-animation');
  // }
  // for (let i = 1; i < 52; i++) {
  //     document.querySelector('.span-1-' + i).classList.add('toggle-hover-animation-2');
  // }

  for (let i = 1; i <= 9; i++) {
    document.querySelector(".span-2-" + i).classList.remove("toggle-colors2");
  }
});

// //////////////////////
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

const swiper = new Swiper(".swiper", {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    // stop autoplay when user hoevrs mouse on the slider
    // pauseOnMouseEnter: true,
  },
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



// working with got-any-question popup

const gotAnyQuestions = document.querySelector(".got-any-questions");

function handleScroll() {
  // Check if the user has scrolled down
  if (window.scrollY > 300) {
    // Remove the .hidden class from .got-any-questions
    gotAnyQuestions.classList.remove("hidden");
    // Check if the specific section is in view
    const mySection = document.getElementById("contact");
    if (mySection.getBoundingClientRect().top < window.innerHeight) {
      // If the section is in view, remove the event listener and hide the button
      window.removeEventListener("scroll", handleScroll);
      gotAnyQuestions.classList.add("hidden");
    } else {
      // If the section is not in view, set a timeout to add the .hidden class back after 8 seconds
      setTimeout(function () {
        gotAnyQuestions.classList.add("hidden");
      }, 10000);
    }
  }
}

// Add a scroll event listener to the window
window.addEventListener("scroll", handleScroll);

// Check if the current URL contains a hash that matches the id of the contact section
if (window.location.hash === "#contact") {
  // If the URL contains a hash that matches the id of the contact section, remove the event listener and hide the button
  window.removeEventListener("scroll", handleScroll);
  gotAnyQuestions.classList.add("hidden");
}




// get a reference to the animation element

// spanTags animations
spanTags.forEach(tags => tags.classList.add('span1-animation'))