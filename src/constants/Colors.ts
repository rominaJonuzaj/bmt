const tintColorLight = "#2f95dc";
const tintColorDark = "#fff";

const COLORS = {
  DREAMSICLE300: "#FFA666",
  PAPASMURF300: "#6699D4",
  DREAMSICLE200: "#FFC499",
  FOREST300: "#A9CE91",
  PAPASMURF500: "#0055B8",
  OUTERSPACE200: "#B4BBC3",
  FOREST500: "#43682B",
  DREAMSICLE500: "#FF6B00",
  OUTERSPACE500: "#44546A",
  FOREST400: "#70AD47",
  LIGHT_GREY: "#F8F8F8",
  PAPASMURF100: "#CCDDF1",
  PAPASMURF400: "#3377C6",
  PAPASMURF600: "#004493",
  PAPASMURF700: "#00336E",
  PAPASMURF800: "#00224A",
  PAPASMURF900: "#001125",
  WHITE: "#fff",
  BLACK: "#000",
  RED: "#B32624",
  DARK_BLUE: "#022A4C",
  RED_ERROR: "#E6342C",
  GREY: "#777777",
  BLUE: "#0055B8",
  DARK_GREY: "#555555",
  GALAXY500: "#002A4C",
  LIGHT_BLUE: "rgba(0, 42, 76, 0.75)",
  FADED_BLUE: "rgba(63, 142, 191, 0.5);",
  DARK_PURPLE: "#1C0D24",
  DARK_BROWN: "#472D2D",
  DEEP_BROWN: "#553939",
  LIGHT_BROWN: "#A77979",
};

export default {
  light: {
    text: COLORS.WHITE,
    background: COLORS.DARK_BLUE,
    tint: tintColorLight,
    tabIconDefault: COLORS.PAPASMURF500,
    tabIconSelected: COLORS.OUTERSPACE200,
  },
  dark: {
    text: COLORS.WHITE,
    background: COLORS.DARK_BLUE,
    tint: tintColorDark,
    tabIconDefault: COLORS.WHITE,
    tabIconSelected: COLORS.DREAMSICLE500,
  },
};

export { COLORS };
