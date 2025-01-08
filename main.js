const bars = document.querySelector("#bars"); 

const toggleNav = () => {
    document.querySelector("header > nav").classList.toggle("show");
    bars.classList.toggle("fa-bars");
    bars.classList.toggle("fa-xmark");
}

bars.addEventListener("click", toggleNav);

document.addEventListener("DOMContentLoaded", onLoad);

function onLoad() {
    setupDialogs();
}

function setupDialogs() {
    document.querySelectorAll("dialog .close").forEach(setupDialogCloseButton);
    document.querySelectorAll("button.dialog-trigger").forEach(setupDialogOpenButton);
}

function setupDialogCloseButton(closeButton) {
    closeButton.addEventListener("click", closeDialog(closeButton.closest("dialog")))
}

function setupDialogOpenButton(openButton) {
    openButton.addEventListener("click", openDialog(document.getElementById(openButton.dataset.dialog)))
}

function closeDialog(dialog) {
    return function() {
        dialog.close();
    }
}

function openDialog(dialog) {
    return function() {
        dialog.show();
    }
}