const hamburger = document.querySelector(".hamburger");
const dropDown = document.querySelector(".drop-down-links");

hamburger.addEventListener("click", () => {
  dropDown.classList.toggle("open");
});

const nameButton = document.querySelector(".nav1");
nameButton.addEventListener("click", () => {
  if (dropDown.classList.contains("open")) {
    dropDown.classList.toggle("open");
  }
});

const menuItems = document.querySelectorAll(".menu-item");
menuItems.forEach((item) =>
  item.addEventListener("click", () => {
    dropDown.classList.toggle("open");
  }),
);

const slider = document.querySelectorAll(".project-card");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

let currentCard = 2;

prevBtn.addEventListener("click", () => {
  if (currentCard > 0) {
    currentCard--;
    scrollToCurrentCard(currentCard);
  }
});

nextBtn.addEventListener("click", () => {
  if (currentCard < slider.length - 1) {
    currentCard++;
    scrollToCurrentCard(currentCard);
  }
});

function scrollToCurrentCard(currentCard) {
  slider[currentCard].scrollIntoView({
    behavior: "smooth",
    block: "nearest",
    inline: "center",
  });

  let totalCards = slider.length;

  slider[currentCard].style.transform = `scale(1) rotateY(0deg)`;
  slider[currentCard].style.zIndex = totalCards;
  slider[currentCard].style.filter = "none";
  slider[currentCard].style.opacity = 1;

  let counter = 1;
  for (let i = currentCard + 1; i < slider.length; i++) {
    slider[i].style.transform =
      ` scale(${1 - 0.2 * counter}) rotateY(-40deg) perspective(20px)`;
    slider[i].style.zIndex = totalCards - counter;
    slider[i].style.filter = `brightness(70%)`;
    counter++;
  }

  counter = 1;
  for (let i = currentCard - 1; i >= 0; i--) {
    slider[i].style.transform =
      ` scale(${1 - 0.2 * counter}) rotateY(40deg) perspective(20px)`;
    slider[i].style.zIndex = totalCards - counter;
    slider[i].style.filter = `brightness(70%)`;
    counter++;
  }
}

let timeout;
window.addEventListener("resize", () => {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    scrollToCurrentCard(currentCard);
  }, 150);
});

// Default to middle card
scrollToCurrentCard(Math.floor(slider.length / 2));

const msDots = document.querySelector(".mystory-dots");
const msMoreText = document.querySelector(".mystory-more-text");
const msReadButton = document.querySelector(".mystory-read-btn");
let msReadButtonIcon = msReadButton.querySelector("i");
const pDots = document.querySelector(".pickleball-dots");
const pMoreText = document.querySelector(".pickleball-more-text");
const pReadButton = document.querySelector(".pickleball-read-btn");
let pReadButtonIcon = pReadButton.querySelector("i");
const gDots = document.querySelector(".gamer-dots");
const gMoreText = document.querySelector(".gamer-more-text");
const gReadButton = document.querySelector(".gamer-read-btn");
let gReadButtonIcon = gReadButton.querySelector("i");

function expandText(str) {
  if (str === "mystory") {
    if (!msMoreText.classList.contains("open")) {
      msMoreText.classList.toggle("open");
      msDots.style.display = "none";
      msReadButtonIcon.classList.replace("fa-chevron-down", "fa-chevron-up");
    } else {
      msMoreText.classList.toggle("open");
      msDots.style.display = "inline";
      msReadButtonIcon.classList.replace("fa-chevron-up", "fa-chevron-down");
    }
  } else if (str === "pickle") {
    if (!pMoreText.classList.contains("open")) {
      pMoreText.classList.toggle("open");
      pDots.style.display = "none";
      pReadButtonIcon.classList.replace("fa-chevron-down", "fa-chevron-up");
    } else {
      pMoreText.classList.toggle("open");
      pDots.style.display = "inline";
      pReadButtonIcon.classList.replace("fa-chevron-up", "fa-chevron-down");
    }
  } else {
    if (!gMoreText.classList.contains("open")) {
      gMoreText.classList.toggle("open");
      gDots.style.display = "none";
      gReadButtonIcon.classList.replace("fa-chevron-down", "fa-chevron-up");
    } else {
      gMoreText.classList.toggle("open");
      gDots.style.display = "inline";
      gReadButtonIcon.classList.replace("fa-chevron-up", "fa-chevron-down");

      if (!videoGamer.paused) {
        videoGamer.pause();
        gamerVideoPlayBtn.style.visibility = "hidden";
        gamerVideoPauseBtn.style.visibility = "visible";
      }

      if (!videoPickle1.paused) {
        videoPickle1.pause();
        pickle1VideoPlayBtn.style.visibility = "hidden";
        pickle1VideoPauseBtn.style.visibility = "visible";
      }

      if (!videoPickle2.paused) {
        videoPickle2.pause();
        pickle2VideoPlayBtn.style.visibility = "hidden";
        pickle2VideoPauseBtn.style.visibility = "visible";
      }
    }
  }
}

msReadButton.addEventListener("click", () => {
  expandText("mystory");
});

pReadButton.addEventListener("click", () => {
  expandText("pickle");
});

gReadButton.addEventListener("click", () => {
  expandText("gamer");
});

const videoGamer = document.querySelector(".lethal-video");
const gamerVideoMuteBtn = document.querySelector(
  ".gamer-video-container .mute-icon",
);
const gamerVideoVolumeBtn = document.querySelector(
  ".gamer-video-container .volume-icon",
);
const gamerVideoPlayBtn = document.querySelector(
  ".gamer-video-container .play-icon",
);
const gamerVideoPauseBtn = document.querySelector(
  ".gamer-video-container .pause-icon",
);

// First video load
if ((gamerVideoPlayBtn.style.visibility = "visible")) {
  videoGamer.muted = !videoGamer.muted;
  gamerVideoMuteBtn.style.visibility = "hidden";
  gamerVideoVolumeBtn.style.visibility = "visible";
}

const videoClick = [videoGamer, gamerVideoPlayBtn, gamerVideoPauseBtn];
videoClick.forEach((playToggle) => {
  playToggle.addEventListener("click", () => {

    if (videoGamer.paused) {
      videoGamer.play();
      gamerVideoPlayBtn.style.visibility = "hidden";
      gamerVideoPauseBtn.style.visibility = "hidden";
    } else {
      videoGamer.pause();
      gamerVideoPlayBtn.style.visibility = "hidden";
      gamerVideoPauseBtn.style.visibility = "visible";
    }
  });
});

const gamerVideoSoundBtns = [gamerVideoMuteBtn, gamerVideoVolumeBtn];
gamerVideoSoundBtns.forEach((btns) =>
  btns.addEventListener("click", () => {
    videoGamer.muted = !videoGamer.muted;

    // Turn sound on
    if (videoGamer.muted) {
      gamerVideoMuteBtn.style.visibility = "visible";
      gamerVideoVolumeBtn.style.visibility = "hidden";
    } else {
      gamerVideoMuteBtn.style.visibility = "hidden";
      gamerVideoVolumeBtn.style.visibility = "visible";
    }
  }),
);

const videoPickle2 = document.querySelector(".pickle-video-2");
const pickle2VideoMuteBtn = document.querySelector(
  ".pickle-video-container-2 .mute-icon",
);
const pickle2VideoVolumeBtn = document.querySelector(
  ".pickle-video-container-2 .volume-icon",
);
const pickle2VideoPlayBtn = document.querySelector(
  ".pickle-video-container-2 .play-icon",
);
const pickle2VideoPauseBtn = document.querySelector(
  ".pickle-video-container-2 .pause-icon",
);

// First video load
if ((pickle2VideoPlayBtn.style.visibility = "visible")) {
  videoPickle2.muted = !videoPickle2.muted;
  pickle2VideoMuteBtn.style.visibility = "hidden";
  pickle2VideoVolumeBtn.style.visibility = "visible";
}

const videoClickPickle2 = [videoPickle2, pickle2VideoPlayBtn, pickle2VideoPauseBtn];
videoClickPickle2.forEach((playToggle) => {
  playToggle.addEventListener("click", () => {

    if (videoPickle2.paused) {
      videoPickle2.play();
      pickle2VideoPlayBtn.style.visibility = "hidden";
      pickle2VideoPauseBtn.style.visibility = "hidden";
    } else {
      videoPickle2.pause();
      pickle2VideoPlayBtn.style.visibility = "hidden";
      pickle2VideoPauseBtn.style.visibility = "visible";
    }
  });
});

const pickle2VideoSoundBtns = [pickle2VideoMuteBtn, pickle2VideoVolumeBtn];
pickle2VideoSoundBtns.forEach((btns) =>
  btns.addEventListener("click", () => {
    videoPickle2.muted = !videoPickle2.muted;

    // Turn sound on
    if (videoPickle2.muted) {
      pickle2VideoMuteBtn.style.visibility = "visible";
      pickle2VideoVolumeBtn.style.visibility = "hidden";
    } else {
      pickle2VideoMuteBtn.style.visibility = "hidden";
      pickle2VideoVolumeBtn.style.visibility = "visible";
    }
  }),
);

const videoPickle1 = document.querySelector(".pickle-video-1");
const pickle1VideoMuteBtn = document.querySelector(
  ".pickle-video-container-1 .mute-icon",
);
const pickle1VideoVolumeBtn = document.querySelector(
  ".pickle-video-container-1 .volume-icon",
);
const pickle1VideoPlayBtn = document.querySelector(
  ".pickle-video-container-1 .play-icon",
);
const pickle1VideoPauseBtn = document.querySelector(
  ".pickle-video-container-1 .pause-icon",
);

// First video load
if ((pickle1VideoPlayBtn.style.visibility = "visible")) {
  videoPickle1.muted = !videoPickle1.muted;
  pickle1VideoMuteBtn.style.visibility = "hidden";
  pickle1VideoVolumeBtn.style.visibility = "visible";
}

const videoClickPickle1 = [videoPickle1, pickle1VideoPlayBtn, pickle1VideoPauseBtn];
videoClickPickle1.forEach((playToggle) => {
  playToggle.addEventListener("click", () => {

    if (videoPickle1.paused) {
      videoPickle1.play();
      pickle1VideoPlayBtn.style.visibility = "hidden";
      pickle1VideoPauseBtn.style.visibility = "hidden";
    } else {
      videoPickle1.pause();
      pickle1VideoPlayBtn.style.visibility = "hidden";
      pickle1VideoPauseBtn.style.visibility = "visible";
    }
  });
});

const pickle1VideoSoundBtns = [pickle1VideoMuteBtn, pickle1VideoVolumeBtn];
pickle1VideoSoundBtns.forEach((btns) =>
  btns.addEventListener("click", () => {
    videoPickle1.muted = !videoPickle1.muted;

    // Turn sound on
    if (videoPickle1.muted) {
      pickle1VideoMuteBtn.style.visibility = "visible";
      pickle1VideoVolumeBtn.style.visibility = "hidden";
    } else {
      pickle1VideoMuteBtn.style.visibility = "hidden";
      pickle1VideoVolumeBtn.style.visibility = "visible";
    }
  }),
);