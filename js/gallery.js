// Constants
const div = document.querySelector(".gallery-images");
const totalImagesCount = 25;

const imgExitButton = document.querySelector(".image-viewer > button");

const __imgNavigationButtons = document.querySelectorAll(
  ".image-navigation-buttons button"
);
const imgNavigationButtons = Array.from(__imgNavigationButtons);

const imageViewer = document.querySelector(".image-viewer");
const imageViewer__Img = document.querySelector(".image-viewer__img img");

const __imgButton = document.querySelectorAll(".imgButton");
const imgButton = Array.from(__imgButton);

let activeImageNumber = 1;

// Adding images to the gallery dynamically
for (index = 0; index < totalImagesCount; index++) {
  const imgContainer = document.createElement("button");
  imgContainer.className = "imgButton";
  imgContainer.setAttribute("type", "button");
  imgContainer.setAttribute("title", "Click to see Full Image");

  const img = document.createElement("img");
  img.setAttribute("src", `img/gallery/img-${index + 1}.jpg`);

  imgContainer.appendChild(img);
  div.appendChild(imgContainer);
}

// Using Button to open an image dynamically
imgButton.forEach((button, index) => {
  button.addEventListener("click", () => {
    activeImageNumber = index + 1;
    imageViewer__Img.src = `img/gallery/img-${activeImageNumber}.jpg`;
    imageViewer.classList.toggle("hidden");
  });
});

// Cross Button to hide image viewer
imgExitButton.addEventListener("click", () => {
  imageViewer.classList.toggle("hidden");
});

// Navigation Button in image viewer
imgNavigationButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    if (index == 0) {
      if (activeImageNumber == 1) activeImageNumber = totalImagesCount;
      else activeImageNumber--;
    } else {
      if (activeImageNumber == totalImagesCount) activeImageNumber = 1;
      else activeImageNumber++;
    }

    imageViewer__Img.src = `img/gallery/img-${activeImageNumber}.jpg`;
  });
});
