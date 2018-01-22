document.addEventListener('DOMContentLoaded', function() {
   let btn = document.getElementById("fk-button");
   btn.addEventListener("click", goToLanding);
})

function goToLanding() {
 chrome.tabs.create({active: true, url: "friendkeeper.herokuapp.com"});
}
