import type { Theme } from "@unocss/preset-wind";
import { convertPalleteToHSL } from "../utils";

export const colors: Theme["colors"] = {
  coolBlue: "pink",
};

// exists to share theme variables with vanilla-extract
export const themeVars = {
  color: {
    base: {
      100: "hsl(0, 0%, 100%)",
      "100Alt": "hsl(240, 6.7%, 97.1%)",

      200: "hsl(0, 0%, 97%)",
      "200Alt": "hsl(0, 0%, 98%)", // sd
      // '200Alt': "hsl(206, 54%, 97%)" // sd

      300: "hsl(228, 16.1%, 93.9%)",
      "300Alt": "hsl(192, 19%, 95%)", // sd

      400: "hsl(228, 16.1%, 93.9%)",
      "400Alt": "hsl(228, 14%, 93%)", // sd

      content: "hsl(190, 13%, 18%)",
      contentAlt: "hsl(228, 6%, 15%)", // sd
      contentMuted: "hsl(207, 4%, 59%)",
    },

    primary: "hsl(249, 26.5%, 9.6%)",
    primaryContent: "hsl(0, 0%, 100%)",

    red: "hsl(360, 100%, 90%)",
    redContent: "hsl(360, 100%, 20%)",

    blue: "hsl(195, 100%, 90%)",
    blueContent: "hsl(195, 100%, 20%)",

    green: "hsl(152, 68%, 90%)",
    greenContent: "hsl(158, 74%, 38%)",

    brown: "hsl(35, 100%, 90%)",
    brownContent: "hsl(35, 100%, 20%)",
  },
  font: {
    primary: "OpenSans",
    secondary: "Poppins",
  },
};

// Palette 15
export const themeVars2 = {
  // Primary
  blue: {
    "50": "#DCEEFB",
    "100": "#B6E0FE",
    "200": "#84C5F4",
    "300": "#62B0E8",
    "400": "#4098D7",
    "500": "#2680C2",
    "600": "#186FAF",
    "700": "#0F609B",
    "800": "#0A558C",
    "900": "#003E6B",
  },

  // Neutrals
  blueGrey: {
    "50": "#F0F4F8",
    "100": "#D9E2EC",
    "200": "#BCCCDC",
    "300": "#9FB3C8",
    "400": "#829AB1",
    "500": "#627D98",
    "600": "#486581",
    "700": "#334E68",
    "800": "#243B53",
    "900": "#102A43",
  },

  // Supporting
  tealVivid: {
    "50": "#F0FCF9",
    "100": "#C6F7E9",
    "200": "#8EEDD1",
    "300": "#5FE3C0",
    "400": "#2DCCA7",
    "500": "#17B897",
    "600": "#079A82",
    "700": "#048271",
    "800": "#016457",
    "900": "#004440",
  },

  red: {
    "50": "#FFEEEE",
    "100": "#FACDCD",
    "200": "#F29B9B",
    "300": "#E66A6A",
    "400": "#D64545",
    "500": "#BA2525",
    "600": "#A61B1B",
    "700": "#911111",
    "800": "#780A0A",
    "900": "#610404",
  },

  yellow: {
    "50": "#FFFAEB",
    "100": "#FCEFC7",
    "200": "#F8E3A3",
    "300": "#F9DA8B",
    "400": "#F7D070",
    "500": "#E9B949",
    "600": "#C99A2E",
    "700": "#A27C1A",
    "800": "#7C5E10",
    "900": "#513C06",
  },
};

// Palette 8
export const themeColorsMain = convertPalleteToHSL({
  // Primary (blue-vivid)
  primary: {
    DEFAULT: "hsl(249, 26.5%, 9.6%)",
    content: "hsl(0, 0%, 100%)",
    "50": "#E6F6FF",
    "100": "#BAE3FF",
    "200": "#7CC4FA",
    "300": "#47A3F3",
    "400": "#2186EB",
    "500": "#0967D2",
    "600": "#0552B5",
    "700": "#03449E",
    "800": "#01337D",
    "900": "#002159",
  },

  // Neutrals
  neutral: {
    "50": "#F5F7FA",
    "100": "#E4E7EB",
    "200": "#CBD2D9",
    "300": "#9AA5B1",
    "400": "#7B8794",
    "500": "#616E7C",
    "600": "#52606D",
    "700": "#3E4C59",
    "800": "#323F4B",
    "900": "#1F2933",
  },

  // Supporting
  // cyan-vivid
  cyanV: {
    "50": "#E1FCF8",
    "100": "#C1FEF6",
    "200": "#92FDF2",
    "300": "#62F4EB",
    "400": "#3AE7E1",
    "500": "#1CD4D4",
    "600": "#0FB5BA",
    "700": "#099AA4",
    "800": "#07818F",
    "900": "#05606E",
  },

  // orange-vivid
  orangeV: {
    "50": "#FFE8D9",
    "100": "#FFD0B5",
    "200": "#FFB088",
    "300": "#FF9466",
    "400": "#F9703E",
    "500": "#F35627",
    "600": "#DE3A11",
    "700": "#C52707",
    "800": "#AD1D07",
    "900": "#841003",
  },

  // red-vivid
  redV: {
    "50": "#FFE3E3",
    "100": "#FFBDBD",
    "200": "#FF9B9B",
    "300": "#F86A6A",
    "400": "#EF4E4E",
    "500": "#E12D39",
    "600": "#CF1124",
    "700": "#AB091E",
    "800": "#8A041A",
    "900": "#610316",
  },

  // yellow-vivid
  yellowV: {
    "50": "#FFFBEA",
    "100": "#FFF3C4",
    "200": "#FCE588",
    "300": "#FADB5F",
    "400": "#F7C948",
    "500": "#F0B429",
    "600": "#DE911D",
    "700": "#CB6E17",
    "800": "#B44D12",
    "900": "#8D2B0B",
  },

  // my addition
  teal: {
    "50": "#EFFCF6",
    "100": "#C6F7E2",
    "200": "#8EEDC7",
    "300": "#65D6AD",
    "400": "#3EBD93",
    "500": "#27AB83",
    "600": "#199473",
    "700": "#147D64",
    "800": "#0C6B58",
    "900": "#014D40",
  },
});
