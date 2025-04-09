/* used to go to what section you want*/
function goToAboutMe() {
    document.getElementById("section_aboutMe").scrollIntoView({ behavior: "smooth" });
}
function goToProjects() {
    document.getElementById("section_projects").scrollIntoView({ behavior: "smooth" });
}

function goToCertificate(){
    window.open("https://drive.google.com/file/d/1afv94BiWxjwecOMgxj2MrCcUTq7lUsf3/view?usp=sharing", "_blank");
}

function goToToefl(){
    window.open("https://drive.google.com/file/d/1jb3ySw3ysGklcR1QFCNK5yw2PM2BAjsf/view?usp=sharing", "_blank");
}

/* link it to your contact*/
function goToInstagram() {
    window.open("https://www.instagram.com/carelpcp", "_blank");
}
function goToWhatsapp(){
    window.open("https://wa.me/6285719657722", "_blank");
}
function goToEmail() {
    window.location.href = "mailto:carel.prianugra.cp@gmail.com";
}
function goToLinkedin() {
    window.open("https://www.linkedin.com/in/carel-prianugra-ceri-pratama","_blank");
}

function showProjectDetail(element) {
    let detail = element.nextElementSibling;
    
    detail.style.display = (detail.style.display === "none" || detail.style.display === "") ? "block" : "none";

    element.style.color = (element.style.color === "gray") ? "blue" : "gray";
}
