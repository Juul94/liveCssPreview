// Initialize CodeMirror on the editable CSS textarea
const editableCSS = CodeMirror.fromTextArea(
    document.getElementById("editable-css"),
    {
        mode: "css",
        lineNumbers: true,
        indentUnit: 2,
        theme: "default",
        value: "#preview {\n  padding: 20px 50px;\n  font-size: 25px;\n  background: teal;\n  color: white;\n}",
    }
);

// Get the preview element
const preview = document.getElementById("preview");

// Add event listener for input changes
editableCSS.on("change", () => {
    // Get the updated CSS code from CodeMirror
    const cssCode = editableCSS.getValue();

    // Create a new style element
    const styleElement = document.createElement("style");
    styleElement.textContent = cssCode;

    // Remove the existing style element from the preview
    const existingStyleElement = preview.querySelector("style");
    if (existingStyleElement) {
        existingStyleElement.remove();
    }

    // Add the new style element to the preview
    preview.appendChild(styleElement);
});
