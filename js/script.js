window.onload = function () {
  // first screen
  // const firstScreen = document.querySelector('.first_screen')
  // const enterMusic = document.querySelector('#enterMusic')
  const animItems = document.querySelectorAll(".anim-items");

  // const typedHello = new Typed('.hello', {
  //     strings: [
  //         '<h1 style="display: inline-block">Hello World!</h1><br>PRESS START'
  //     ],
  //     typeSpeed: 150
  // })

  // setTimeout(() => {
  //     document.querySelector('.typed-cursor').style.fontSize = '4rem'
  // }, 2950)

  // function disableScrolling(){
  //     let x=window.scrollX;
  //     let y=window.scrollY;
  //     window.onscroll=function(){window.scrollTo(x, y);};
  // }
  // disableScrolling()

  // function enableScrolling(){
  //     window.onscroll=function(){};
  // }

  // setTimeout(() => {
  //     document.addEventListener('keypress', (event) => {
  //         if (event.key === "Enter"){
  //             enterMusic.play()
  //             firstScreen.style.transition = '1.5s'
  //             firstScreen.style.opacity = '0'
  //             setTimeout(() => {firstScreen.style.display = 'none'; enableScrolling()},1500)
  //         }
  //     }, {once: true})
  // }, 5000)

  $(document).on("click", ".arrow", function (e) {
    e.preventDefault();
    $("body, html").animate({ scrollTop: 0 }, 1000);
  });

  //плавное появление
  if (animItems.length > 0) {
    window.addEventListener("scroll", animOnScroll);
    function animOnScroll() {
      for (let index = 0; index < animItems.length; index++) {
        const animItem = animItems[index];
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        const animStart = 4;

        let animItemPoint = window.innerHeight - animItemHeight / animStart;
        if (animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }

        if (
          pageYOffset > animItemOffset - animItemPoint &&
          pageYOffset < animItemOffset + animItemHeight
        ) {
          animItem.classList.add("active");
        } else {
          if (!animItem.classList.contains("anim-no-hide")) {
            animItem.classList.remove("active");
          }
        }
      }
    }
    function offset(el) {
      const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    }
    animOnScroll();
  }

  // slicker
  $(".slider").slick({
    arrows: false,
    dots: true,
    slidesToShow: 2,
    speed: 1000,
    waitForAnimate: false,
    rows: 2,
    infinite: false,
    responsive: [
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 1,
          rows: 1,
        },
      },
    ],
  });

  if (window.innerWidth <= 768) {
    let $slideSmCount = $(".item_sm").length;

    for (let i = 0; i < $slideSmCount; i++) {
      $(".slider").slick("slickRemove", false);
    }
  }
  if (window.innerWidth <= 480) {
    let $slideSmCount = $(".item_sm480").length;

    for (let i = 0; i < $slideSmCount; i++) {
      $(".slider").slick("slickRemove", false);
    }
  }

  //form

  const form = document.getElementById("form");

  async function handleSubmit(event) {
    event.preventDefault();
    const status = document.getElementById("status");
    const data = new FormData(event.target);
    fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        status.innerHTML = "Message sent. Thank You for cooperation.";
        status.classList.add("success");
        setTimeout(function () {
          status.classList.remove("success");
        }, 4000);
        form.reset();
      })
      .catch((error) => {
        status.innerHTML = "Oops! There was a problem submitting your form";
        status.classList.add("error");
        setTimeout(function () {
          status.classList.remove("error");
        }, 4000);
      });
  }
  form.addEventListener("submit", handleSubmit);

  // burger menu
  const burger = document.querySelector(".header__burger");
  const headerMenu = document.querySelector(".header-right");
  const headerList = document.querySelector(".header-list");
  const headerWrapper = document.querySelector(".header-wrapper");
  burger.addEventListener("click", function (e) {
    burger.classList.toggle("active");
    headerMenu.classList.toggle("active");
    headerList.classList.toggle("active");
    headerWrapper.classList.toggle("active");
    document.querySelector("body").classList.toggle("lock");
  });

  // плавный переход к блоку по ссылке с id
  $(".header-list").on("click", "a", function (event) {
    event.preventDefault();

    const id = $(this).attr("href"),
      top = $(id).offset().top;

    $("body,html").animate({ scrollTop: top - 100 }, 1000);
    burger.classList.toggle("active");
    headerMenu.classList.toggle("active");
    headerList.classList.toggle("active");
    headerWrapper.classList.toggle("active");
    if (window.innerWidth <= 768) {
      document.querySelector("body").classList.toggle("lock");
    }
  });
};
$(".contact-link").on("click", "a", function (event) {
  event.preventDefault();

  const id = $(this).attr("href"),
    top = $(id).offset().top;

  $("body,html").animate({ scrollTop: top - 100 }, 1000);
});
