const tab = Array.from(document.getElementsByClassName("tab"));
const content= Array.from(document.getElementsByClassName("tab__content"));

tab.forEach(element => element.addEventListener("click", tabClick));

function tabClick(event) {
    document.querySelector(".tab_active").classList.remove("tab_active");
    document.querySelector(".tab__content_active").classList.remove("tab__content_active");

    event.currentTarget.classList.add("tab_active");
    content[tab.indexOf(event.currentTarget)].classList.add("tab__content_active");

}