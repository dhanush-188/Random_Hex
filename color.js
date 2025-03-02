// Select the container element
const containerEl = document.querySelector(".container");

// Create 50 div elements
for (let i = 0; i < 50; i++) {
const colorGeneratorEl = document.createElement("div");
colorGeneratorEl.classList.add("color-generator");

const colorCodeEl = document.createElement("span");
colorCodeEl.classList.add("color-code");
colorGeneratorEl.appendChild(colorCodeEl);

const copyBtnEl = document.createElement("button");
copyBtnEl.innerText = "COPY";
copyBtnEl.classList.add("copy-btn");
colorGeneratorEl.appendChild(copyBtnEl);

containerEl.appendChild(colorGeneratorEl);
}

// Select all color generator elements
const mainColorContainerEls = document.querySelectorAll(".color-generator");

// Function to generate a random color code
function generateRandomColor() {
const hexCodes = "0123456789abcdef";
const colorCodeLength = 6;
let colorCode = "";
for (let i = 0; i < colorCodeLength; i++) {
    const randomIndex = Math.floor(Math.random() * hexCodes.length);
    colorCode += hexCodes.substring(randomIndex, randomIndex + 1);
}
return colorCode;
}

// Function to generate colors for each color generator element
function generateColor() {
for (let i = 0; i < mainColorContainerEls.length; i++) {
    const colorContainerEl = mainColorContainerEls[i];
    const newColorCode = generateRandomColor();
    const colorCodeEl = colorContainerEl.querySelector(".color-code");

    colorContainerEl.style.backgroundColor = "#" + newColorCode;
    colorCodeEl.innerText = "#" + newColorCode;
}
}

// Function to copy color code to clipboard
function copyColorCodeToClipboard(text) {
console.log("Copying color code to clipboard:", text);
navigator.clipboard.writeText(text).then(() => {
    console.log("Color code copied to clipboard successfully.");
    alert("Color code copied to clipboard: " + text);
})
    .catch((error) => {
    console.error("Error copying color code to clipboard:", error);
    });
}

// Wait for the DOM to finish loading before calling generateColor
document.addEventListener("DOMContentLoaded", function() {
generateColor();

  // Attach event listener to copy buttons
mainColorContainerEls.forEach((colorContainerEl) => {
    const copyBtnEl = colorContainerEl.querySelector(".copy-btn");
    const colorCodeEl = colorContainerEl.querySelector(".color-code");

    if (copyBtnEl !== null) {
    copyBtnEl.addEventListener("click", () => {
        console.log("Copy button clicked.");
        const colorCode = colorCodeEl.innerText;
        console.log("Color code:", colorCode);
        copyColorCodeToClipboard(colorCode);
    });
    }
});
});

