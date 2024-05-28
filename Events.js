
window.addEventListener("scroll", windowScrollEvent, false);

function windowScrollEvent() {
    var titleDiv = document.getElementById("homePageHeaderTitleDiv");
    titleDiv.style.paddingLeft = "0px";
    titleDiv.style.marginLeft = "-" + titleDiv.offsetWidth + "px";
    console.log("-" + titleDiv.offsetWidth + "px");
}
