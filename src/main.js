const getRGB = (color) => {
    return Math.floor(Math.random() * Number(color) + 1);
};
const Convert = (color) => {
    return parseInt(String(color), 16);
};
function getColorPadding(color) {
    return color.toString().padEnd(1, "0");
}
function clickButtonColor() {
    const r = getRGB(String(254));
    const g = getRGB(String(254));
    const b = getRGB(String(254));
    const rTarget = document.getElementById("rValue");
    const gTarget = document.getElementById("gValue");
    const bTarget = document.getElementById("bValue");
    rTarget.textContent = "R: " + r;
    gTarget.textContent = "G: " + g;
    bTarget.textContent = "B: " + b;
    const hexTarget = document.getElementById("hexCode");
    hexTarget.textContent = `#${r.toString(16)}${g.toString(16)}${b.toString(16).padEnd(1, "0")}`;
}
const button = document.getElementById("button");
button.addEventListener("click", clickButtonColor);
export {};
//# sourceMappingURL=main.js.map