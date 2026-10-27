function upDate(previewPic) {
    console.log("Mouse over or focus on image");
    console.log(previewPic.alt);
    console.log(previewPic.src);

    var imageDiv = document.getElementById("image");

    imageDiv.textContent = previewPic.alt;
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
    var imageDiv = document.getElementById("image");

    imageDiv.style.backgroundImage = "url('')";
    imageDiv.textContent =
        "Hover over an image below to display here.";
}

function addTabindex() {
    console.log("Adding tabindex to images");

    var images = document.querySelectorAll(".preview");

    for (var i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
    }
}

window.addEventListener("load", addTabindex);
