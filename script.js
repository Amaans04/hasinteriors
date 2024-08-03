gsap.to("#nav", {
    backgroundColor: "#fff",
    color: "#000",
    duration: 0.5,
    height: "7vh",
    y: +10,
    // scrollTrigger : normalizeScroll(true),
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers:true,
        start: "top -15%",
        end: "top -11%",
        scrub: 2,
    },
});




function showSidebar() {
    const sideBar = document.querySelector(".sidebar");
    sideBar.style.display = "flex";
}

function hideSidebar() {
    const sideBar = document.querySelector(".sidebar");
    sideBar.style.display = "none";
}
