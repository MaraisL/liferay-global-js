import { addCSSDependencies, addJSDependenciesToHead, addJSDependenciesToBody } from "./dynamicImport.js";

// Base path specific to DSFR files
const DESIGN_SYSTEM_THEME_PATH = "/o/liferay-dsfr-theme-css/dsfr/";

/**
 * Adds DSFR CSS files to the head.
 * @param {string} requiredTxtCss - Comma-separated list of CSS files.
 */
export const addCSSDSDependencies = (requiredTxtCss) => {
    addCSSDependencies(requiredTxtCss, DESIGN_SYSTEM_THEME_PATH);
};

/**
 * Adds DSFR JS files to the head.
 * @param {string} requiredTxtJs - Comma-separated list of JS files.
 */
export const addJSDSDependenciesToHead = (requiredTxtJs) => {
    addJSDependenciesToHead(requiredTxtJs, DESIGN_SYSTEM_THEME_PATH);
};

/**
 * Adds DSFR JS files to the body.
 * @param {string} requiredTxtJs - Comma-separated list of JS files.
 */
export const addJSDSDependenciesToBody = (requiredTxtJs) => {
    addJSDependenciesToBody(requiredTxtJs, DESIGN_SYSTEM_THEME_PATH);
};

// Expose functions to the global scope for easier usage
window.addCSSDSDependencies = addCSSDSDependencies;
window.addJSDSDependenciesToHead = addJSDSDependenciesToHead;
window.addJSDSDependenciesToBody = addJSDSDependenciesToBody;
