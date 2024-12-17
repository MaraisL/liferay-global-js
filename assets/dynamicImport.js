/**
 * Generic function to add CSS or JS dependencies to a specific target.
 * @param {string} dependencies - Comma-separated list of files to import.
 * @param {string} type - File type: "css" or "js".
 * @param {string} target - Target location: "head" or "body".
 * @param {string} basePath - Base path for the files.
 */
export const addDependencies = (dependencies, type, target, basePath) => {
    const dependencyArray = dependencies.split(",");
    const targetElement = target === "body" ? document.body : document.head;

    const onLoad = () => {
    dependencyArray.forEach((dependency) => {
        if (!dependency) return;

        const url = `${basePath}${dependency}`;
        if (targetElement.innerHTML.includes(url)) {
            console.log(`${dependency} already exists.`);
            return;
        }

        const element = document.createElement(type === "css" ? "link" : "script");

        if (type === "css") {
            element.rel = "stylesheet";
            element.type = "text/css";
            element.href = url;
        } else {
            element.src = url;
            if (dependency.includes(".module.")) {
                element.type = "module";
            } else if (dependency.includes(".nomodule.")) {
                element.setAttribute("nomodule", "");
                element.type = "text/javascript";
            } else {
                element.type = "text/javascript";
            }
        }

        targetElement.appendChild(element);
        console.log(`${dependency} added.`);
    });
};

    if (type === "js" && target === "body") {
        document.addEventListener("DOMContentLoaded", onLoad);
    } else {
        onLoad();
    }
};

/**
 * Adds CSS dependencies to the head.
 * @param {string} dependencies - Comma-separated list of CSS files.
 * @param {string} basePath - Base path for the CSS files.
 */
export const addCSSDependencies = (dependencies, basePath) => {
    addDependencies(dependencies, "css", "head", basePath);
};

/**
 * Adds JS dependencies to the head.
 * @param {string} dependencies - Comma-separated list of JS files.
 * @param {string} basePath - Base path for the JS files.
 */
export const addJSDependenciesToHead = (dependencies, basePath) => {
    addDependencies(dependencies, "js", "head", basePath);
};

/**
 * Adds JS dependencies to the body.
 * @param {string} dependencies - Comma-separated list of JS files.
 * @param {string} basePath - Base path for the JS files.
 */
export const addJSDependenciesToBody = (dependencies, basePath) => {
    addDependencies(dependencies, "js", "body", basePath);
};