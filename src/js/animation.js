const tl = gsap.timeline();

let marquee = document.querySelectorAll(".clipped-text");

const section1 = document.getElementById("section1");
const section2 = document.getElementById("section2");
const section3 = document.getElementById("section3");
const section4 = document.getElementById("section4");
const section5 = document.getElementById("section5");
const section6 = document.getElementById("section6");

const next0 = document.getElementById("next0");
const next1 = document.getElementById("next1");
const next2 = document.getElementById("next2");
const next3 = document.getElementById("next3");
const next4 = document.getElementById("next4");
const next5 = document.getElementById("next5");

const back1 = document.getElementById("back1");
const back2 = document.getElementById("back2");
const back3 = document.getElementById("back3");
const back4 = document.getElementById("back4");

const close1 = document.getElementById("close1");
const close2 = document.getElementById("close2");
const close3 = document.getElementById("close3");
const close4 = document.getElementById("close4");
const close5 = document.getElementById("close5");

const close = document.getElementById("close");

const headerAnimation = () => {
  tl.from("#video", {
    delay: 0.2,
    duration: 0.8,
    y: 100,
    opacity: 0,
  });

  tl.from("#content", {
    delay: 0.2,
    duration: 0.8,
    opacity: 0,
  });

  marquee.forEach((el) => {
    // set a default rate, the higher the value, the faster it is
    let rate = 200;
    // get the width of the element
    let distance = el.clientWidth;
    // get the margin-right of the element
    let style = window.getComputedStyle(el);
    let marginRight = parseInt(style.marginRight) || 0;
    // get the total width of the element
    let totalDistance = distance + marginRight;
    // get the duration of the animation
    // for a better explanation, see the quoted codepen in the first comment
    let time = totalDistance / rate;
    // get the parent of the element
    let container = el.parentElement;

    gsap.to(container, time, {
      repeat: -1,
      x: "-" + totalDistance,
      ease: Linear.easeNone,
    });
  });
};

const revealAnimation = () => {
  tl.to("#reveal", {
    duration: 1,
    ease: "expo",
    startAt: {
      y: 200,
      rotation: 15,
    },
    y: "0%",
    rotation: 0,
    opacity: 1,
  });
};

const smoothAnimation = (prop) => {
  tl.from(prop, {
    delay: 0.1,
    duration: 0.5,
    opacity: 0,
  });
};

const btnAnimation = () => {
  tl.from("#btn", {
    duration: 0.3,
    stagger: 0.1,
    y: 10,
    opacity: 0,
  });
};

window.addEventListener("load", () => {
  headerAnimation();
});

next0.onclick = () => {
  section1.style.top = "-100%";
  section2.style.top = "0";

  revealAnimation();
  smoothAnimation(".continue");
};

next1.onclick = () => {
  section2.style.top = "-100%";
  section3.style.top = "0";

  revealAnimation();
  smoothAnimation("#input");
  smoothAnimation(".continue");
};

next2.onclick = () => {
  section3.style.top = "-100%";
  section4.style.top = "0";

  revealAnimation();
  btnAnimation();
  smoothAnimation(".continue");
};

next3.onclick = () => {
  section4.style.top = "-100%";
  section5.style.top = "0";

  revealAnimation();
  btnAnimation();
  smoothAnimation(".continue");
};

next4.onclick = () => {
  section5.style.top = "-100%";
  section6.style.top = "0";

  revealAnimation();
  smoothAnimation(".continue");
};

next5.onclick = () => {
  section6.style.top = "100%";
  section1.style.top = "0";

  headerAnimation();
  revealAnimation();
  smoothAnimation(".continue");
};

// Got to back

back1.onclick = () => {
  section2.style.top = "0";
  section3.style.top = "100%";
};

back2.onclick = () => {
  section3.style.top = "0";
  section4.style.top = "100%";
};

back3.onclick = () => {
  section4.style.top = "0";
  section5.style.top = "100%";
};

back4.onclick = () => {
  section5.style.top = "0";
  section6.style.top = "100%";
};


// Close Button
close1.onclick = () => {
  section2.style.top = "100%";
  section1.style.top = "0";

  headerAnimation();
  revealAnimation();
};

close2.onclick = () => {
  section3.style.top = "100%";
  section1.style.top = "0";

  headerAnimation();
  revealAnimation();
};

close3.onclick = () => {
  section4.style.top = "100%";
  section1.style.top = "0";

  headerAnimation();
  revealAnimation();
};

close4.onclick = () => {
  section5.style.top = "100%";
  section1.style.top = "0";

  headerAnimation();
  revealAnimation();
};

close5.onclick = () => {
  section6.style.top = "100%";
  section1.style.top = "0";

  headerAnimation();
  revealAnimation();
};
