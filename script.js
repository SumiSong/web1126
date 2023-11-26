//변수 선언 : var, const, let
// 변수에 값을 저장하는 것을 할당, 변수에 저장된 값을 읽어 들이는 것을 참조, 변수명을 
// 자바스크립트 엔진에 알리는 것을 선언

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
document.getElementById("buttonHomeLink").addEventListener("click", goHomeButton);
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

function Home() {
    window.location.href = "index.html";
}

function goHomeButton() {
    window.location.href = "About.html";
}

//Actitivy 페이지 모달창 

function openModal(ModalID) {
    if(ModalID === 'Modal1' || ModalID === 'Modal2'|| ModalID === 'Modal3'|| ModalID === 'Modal4'){
        document.getElementById(ModalID).style.display = 'block';
        document.body.classList.add('modal-open');
    }
    else{
        console.error("Invalid KEY");
    }
}

function closeModal(ModalID) {
    if(ModalID === 'Modal1'|| ModalID === 'Modal2'|| ModalID === 'Modal3'|| ModalID === 'Modal4'){
        document.getElementById(ModalID).style.display = 'none';
        document.body.classList.remove('modal-open');
    }
    else{
        console.error("Invalid KEY");
    }
}



