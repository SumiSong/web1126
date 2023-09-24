window.onload = function(){
    Particles.init({
    selector: '.background',
    maxParticles: 150,
    connectParticles: 'true',
    speed:0.5,
    minDistance: 100,
    sizeVariations: 4,
    color: "#000000"
    });
}

//이벤트 리스너 정리
document.getElementById("AboutLink").addEventListener("click", navigateToAbout);
document.getElementById("MemberLink").addEventListener("click", navigateToMember);
document.getElementById("PublicationsLink").addEventListener("click", navigateToPublications);
document.getElementById("ActivityLink").addEventListener("click", navigateToActivity);
document.getElementById("ScheduleLink").addEventListener("click", navigateToSchedule);
document.getElementById("goHomeButton").addEventListener("click", goHomeButton);
document.getElementById("AI&DE-Home").addEventListener("click", Home);

function navigateToAbout() {
    window.location.href = "About.html";
}

function navigateToMember() {
    window.location.href = "Member.html";
}

function navigateToPublications() {
    window.location.href = "Publications.html";
}

function navigateToActivity() {
    window.location.href = "Activity.html";
}

function navigateToSchedule() {
    window.location.href = "Schedule.html";
}

function Home() {
    window.location.href = "main.html";
}

function goHomeButton() {
    window.location.href = "About.html";
}



