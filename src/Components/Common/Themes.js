/******************************************
 *  Author : Evgeniy Ferapontov   
 *  Created On : Tue Sep 04 2018
 *  File : themes.js
 *******************************************/

export const ANIMATION_DURATION = 0.5;

const COMMON_PROPERTIES = {
    textSizeSmall: "1.5rem",
    textSizeMedium: "2rem",
    textSizeBig: "3rem",
    accentColor: "#1854db",
    accentColorDisabled: "#3b5583",
    accentColorHover: "#1e5df6",
}

const THEME_DARK_PROPERTIES = {
    bgColorMain: "#1e1e1e",
    bgColorSecondary: "#252526",
    bgColorAdditional: "#3c3c3c",
    borderColor: "#444444",
    textColorMain: "#d4d4d4",
    textColorSecondary: "#f1f0f0",
}

const THEME_LIGHT_PROPERTIES = {
    bgColorMain: "#ffffff",
    bgColorSecondary: "#f3f3f3",
    bgColorAdditional: "#2c2c2c",
    borderColor: "#dcdcdc",
    textColorMain: "#000000",
    textColorSecondary: "#f3f3f3",
}

const THEME_ALT_PROPERTIES = {
    bgColorMain: "#ffffff",
    bgColorSecondary: "#cccccc",
    bgColorAdditional: "#444444",
    borderColor: "#444444",
    textColorMain: "#1f1f1f",
    textColorSecondary: "#ffffff",
}

export const theme_dark = Object.assign({}, COMMON_PROPERTIES, THEME_DARK_PROPERTIES);
export const theme_light = Object.assign({}, COMMON_PROPERTIES, THEME_LIGHT_PROPERTIES);
export const theme_alt = Object.assign({}, COMMON_PROPERTIES, THEME_ALT_PROPERTIES);
