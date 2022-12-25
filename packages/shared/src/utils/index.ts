export function hexToHSL(hex: string, satAndLight?: { s?: number; l?: number }) {
  // convert hex to rgb
  let r = 0,
    g = 0,
    b = 0;
  if (hex.length === 4) {
    r = +("0x" + hex[1] + hex[1]);
    g = +("0x" + hex[2] + hex[2]);
    b = +("0x" + hex[3] + hex[3]);
  } else if (hex.length === 7) {
    r = +("0x" + hex[1] + hex[2]);
    g = +("0x" + hex[3] + hex[4]);
    b = +("0x" + hex[5] + hex[6]);
  }

  // then to HSL
  r /= 255;
  g /= 255;
  b /= 255;
  const cmin = Math.min(r, g, b);
  const cmax = Math.max(r, g, b);
  const delta = cmax - cmin;
  let h = 0;
  let s = 0;
  let l = 0;

  if (delta === 0) h = 0;
  else if (cmax === r) h = ((g - b) / delta) % 6;
  else if (cmax === g) h = (b - r) / delta + 2;
  else h = (r - g) / delta + 4;
  h = Math.round(h * 60);
  if (h < 0) h += 360;
  l = (cmax + cmin) / 2;
  s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return `hsl(${h}, ${satAndLight?.s || s}%, ${satAndLight?.l || l}%)`;
}

export function hslToHex(hsl: string) {
  const p = hsl.split(", ");
  const h = +p[0].split("(")[1];
  const s = +p[1].split("%")[0];
  let l = +p[2].split("%")[0];

  l /= 100;
  const a = (s * Math.min(l, 1 - l)) / 100;
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, "0"); // convert to Hex and prefix "0" if needed
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

// function to convert hsl to hsla
export function hslToHsla(hsl: string, a: number) {
  const p = hsl.split(", ");
  const h = p[0].split("(")[1];
  const s = p[1].split("%")[0];
  const l = p[2].split("%")[0];
  return `hsla(${h}, ${s}%, ${l}%, ${a})`;
}

export const hexToRGBA = (hexCode: string, opacity = 1) => {
  let hex = hexCode.replace("#", "");

  if (hex.length === 3) {
    hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
  }

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  /* Backward compatibility for whole number based opacity values. */
  if (opacity > 1 && opacity <= 100) {
    opacity = opacity / 100;
  }

  return `rgba(${r},${g},${b},${opacity})`;
};

export function convertPalleteToHSL(obj: Record<string, Record<string, string>>) {
  const temp = {} as typeof obj;
  for (const colorKey in obj) {
    for (const colorShadeKey in obj[colorKey]) {
      if (!temp[colorKey]) {
        temp[colorKey] = {
          [colorShadeKey]: hexToHSL(obj[colorKey][colorShadeKey]),
        };
      } else {
        temp[colorKey][colorShadeKey] = hexToHSL(obj[colorKey][colorShadeKey]);
      }
    }
  }
  return temp;
}

// original bg colors for the chart.js
export const ogBG = [
  "rgba(255, 99, 132, 0.2)",
  "rgba(54, 162, 235, 0.2)",
  "rgba(255, 206, 86, 0.2)",
  "rgba(75, 192, 192, 0.2)",
  "rgba(153, 102, 255, 0.2)",
  "rgba(255, 159, 64, 0.2)",
];

// original border colors for the chart.js
export const ogBD = [
  "rgba(255, 99, 132, 1)",
  "rgba(54, 162, 235, 1)",
  "rgba(255, 206, 86, 1)",
  "rgba(75, 192, 192, 1)",
  "rgba(153, 102, 255, 1)",
  "rgba(255, 159, 64, 1)",
];
