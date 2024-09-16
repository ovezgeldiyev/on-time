// menu start
var menu = document.getElementById("menu");
var menuBtn = document.getElementById("menuBtn");
var body = document.body;
menuBtn.onclick = function () {
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
  body.classList.toggle("active");
};
window.onclick = function (event) {
  if (event.target == menu) {
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
    body.classList.remove("active");
  }
};
// menu end

// scroll start
let header = document.getElementById("header");
function scrollFunc() {
  if (window.scrollY >= 60) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
window.onscroll = function () {
  scrollFunc();
};
// scroll end
// tab start
const tabBtn = document.querySelectorAll(".tabBtn");
const tabEvent = document.querySelectorAll(".tabEvent");
tabBtn.forEach((e) => {
  onTabClick(tabBtn, tabEvent, e);
});
function onTabClick(tabBtns, tabItems, item) {
  item.addEventListener("click", function (e) {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);
    if (currentBtn.classList.contains("active")) {
      const faq = currentBtn.parentElement.querySelector(".tabEvent");
      if (faq) {
        faq.classList.remove("active");
        currentBtn.classList.remove("active");
        currentBtn.parentElement.classList.remove("active");
      }
    } else if (!currentBtn.classList.contains("active")) {
      tabBtns.forEach(function (item) {
        item.classList.remove("active");
        item.parentElement.classList.remove("active");
      });

      tabItems.forEach(function (item) {
        item.classList.remove("active");
        item.parentElement.classList.remove("active");
      });
      currentBtn.classList.add("active");
      currentTab.classList.add("active");
      currentBtn.parentElement.classList.add("active");
    }
  });
}
// tab end
// faq start
const faqBtn = document.querySelectorAll(".faqBtn");
const faqEvent = document.querySelectorAll(".faqEvent");
faqBtn.forEach((e) => {
  onFaqClick(faqBtn, faqEvent, e);
});
function onFaqClick(faqBtns, faqItems, item) {
  item.addEventListener("click", function (e) {
    let currentBtn = item;
    let faqId = currentBtn.getAttribute("data-faq");
    let currentTab = document.querySelector(faqId);
    if (currentBtn.classList.contains("active")) {
      const faq = currentBtn.parentElement.querySelector(".faqEvent");
      if (faq) {
        faq.classList.remove("active");
        currentBtn.classList.remove("active");
      }
    } else if (!currentBtn.classList.contains("active")) {
      faqBtn.forEach(function (item) {
        item.classList.remove("active");
      });

      faqItems.forEach(function (item) {
        item.classList.remove("active");
      });
      currentBtn.classList.add("active");
      currentTab.classList.add("active");
    }
  });
}
// faq end
// sliders
$(function () {
  $(".hero__inner-slider").slick({
    dots: false,
    infinite: true,
    centerMode: false,
    arrows: false,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".hero__inner-swiper",
  });
});
$(function () {
  $(".hero__inner-swiper").slick({
    dots: false,
    infinite: true,
    centerMode: false,
    arrows: false,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".hero__inner-slider",
    draggable: false,
  });
});
$(function () {
  $(".field__inner-slider").slick({
    dots: false,
    infinite: false,
    centerMode: false,
    arrows: false,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
$(function () {
  $(".resource__inner-slider").slick({
    dots: false,
    infinite: false,
    centerMode: false,
    arrows: false,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 930,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

// counter start
const counter = (EL) => {
  const duration = 1000;
  const start = parseInt(EL.textContent, 10);
  const end = parseInt(EL.dataset.counter, 10);
  if (start === end) return;

  const range = end - start;
  let curr = start;

  const timeStart = Date.now();
  const loop = () => {
    let elaps = Date.now() - timeStart;
    if (elaps > duration) elaps = duration;
    const frac = elaps / duration;
    const step = frac * range;
    curr = start + step;
    EL.textContent = Math.trunc(curr);
    if (elaps < duration) requestAnimationFrame(loop);
  };

  requestAnimationFrame(loop);
};

let numbers = document.getElementById("numbers");
if (numbers) {
  function scrollCount() {
    if (
      window.scrollY + document.documentElement.clientHeight - 100 >=
      numbers.offsetTop
    ) {
      document.querySelectorAll("[data-counter]").forEach(counter);
    }
  }
  window.addEventListener("scroll", function () {
    scrollCount();
  });
  scrollCount();
}
// counter end
// video start
const playBtn = document.getElementById("play");
if (playBtn) {
  const banner = document.getElementById("banner");
  playBtn.addEventListener("click", function () {
    if (video.paused == true) {
      video.play();

      playBtn.classList.toggle("active");
      banner.classList.toggle("active");
    } else {
      video.pause();

      playBtn.classList.remove("active");
      banner.classList.remove("active");
    }
  });

  video.onclick = function () {
    if (video.paused == true) {
      video.play();

      playBtn.classList.toggle("active");
      banner.classList.toggle("active");
    } else {
      video.pause();

      playBtn.classList.remove("active");
      banner.classList.remove("active");
    }
  };
}
// video end

const pricingCheck = document.getElementById("pricingCheck");

if (pricingCheck) {
  const pricingMonthly = document.getElementById("pricingMonthly");
  const pricingAnnual = document.getElementById("pricingAnnual");
  const checkInput = pricingCheck.querySelector("input");
  checkInput.onchange = () => {
    if (checkInput.checked) {
      pricingAnnual.classList.add("active");
      pricingMonthly.classList.remove("active");
      pricingCheck.classList.add("active");
    } else {
      pricingMonthly.classList.add("active");
      pricingAnnual.classList.remove("active");
      pricingCheck.classList.remove("active");
    }
  };
}

