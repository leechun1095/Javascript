function openPop() {
    var newWin = window.open("popup.html", "", "width=400, height=400");
    if(newWin == null) {
        alert("팝업이 차단되어 있습니다. 팝업 차단을 해제하고 새로고침을 해주세요.");
    }
}
// onload : 브라우저 창이 열리자마자 실행되는 것
window.onload = openPop;