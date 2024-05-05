// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const selectHorn = document.getElementById("horn-select");
  const hornImage = document.querySelector("img");
  const hornAudio = document.querySelector(".hidden");
  const volumeSelect = document.getElementById("volume");
  const imageList = document.querySelectorAll("img");
  const volumeImage = imageList[1];
  const clickPlay = document.querySelector("button");
  const jsConfetti = new JSConfetti();

  selectHorn.addEventListener("change", (event) => {
    if (selectHorn.value == "air-horn") {
      hornImage.src = "assets/images/air-horn.svg";
      hornImage.alt = "Image of a car horn";
      hornAudio.src = "assets/audio/air-horn.mp3";
    } else if (selectHorn.value == "car-horn") {
      hornImage.src = "assets/images/car-horn.svg";
      hornImage.alt = "Image of a car";
      hornAudio.src = "assets/audio/car-horn.mp3";
    } else if (selectHorn.value == "party-horn") {
      hornImage.src = "assets/images/party-horn.svg";
      hornImage.alt = "Image of a party horn";
      hornAudio.src = "assets/audio/party-horn.mp3";
    }
  });

  volumeSelect.addEventListener("change", (event) => {
    if (volumeSelect.value == 0) {
      volumeImage.src = "assets/icons/volume-level-0.svg";
      volumeImage.alt = "Volume level 0";
    } else if (volumeSelect.value >= 1 && volumeSelect.value < 33) {
      volumeImage.src = "assets/icons/volume-level-1.svg";
      volumeImage.alt = "Volume level 1";
    } else if (volumeSelect.value >= 33 && volumeSelect.value < 67) {
      volumeImage.src = "assets/icons/volume-level-2.svg";
      volumeImage.alt = "Volume level 2";
    } else if (volumeSelect.value >= 67) {
      volumeImage.src = "assets/icons/volume-level-3.svg";
      volumeImage.alt = "Volume level 3";
    }
    hornAudio.volume = (volumeSelect.value)*0.01;
  });

  clickPlay.addEventListener("click", (event) => {
    if (selectHorn.value == "party-horn") {
      jsConfetti.addConfetti();
    }
    hornAudio.play();
  });
  

}