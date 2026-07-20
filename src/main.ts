type Color = {
  color: number;
};

const getRGB = (color: string) => {
  return Math.floor(Math.random() * Number(color) + 1);
};

const Convert = (color: Color | number) => {
  return parseInt(String(color), 16);
};

function getColorPadding(color: number) {
  return color.toString().padEnd(1, "0");
}

function clickButtonColor() {
  const r = getRGB(String(254));
  const g = getRGB(String(254));
  const b = getRGB(String(254));

  const rTarget = document.getElementById("rValue") as HTMLElement;
  const gTarget = document.getElementById("gValue") as HTMLElement;
  const bTarget = document.getElementById("bValue") as HTMLElement;

  rTarget.textContent = "R: " + r;
  gTarget.textContent = "G: " + g;
  bTarget.textContent = "B: " + b;

  const hexTarget = document.getElementById("hexCode") as HTMLElement;
  hexTarget.textContent = `#${r.toString(16)}${g.toString(16)}${b.toString(16).padEnd(1, "0")}`;
}

const button = document.getElementById("button") as HTMLButtonElement;

button.addEventListener("click", clickButtonColor);
