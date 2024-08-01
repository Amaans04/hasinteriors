// gsap.to("#nav", {
//     backgroundColor: "#fff",
//     color: "#000",
//     fontSize: "50px",
//     duration: 0.5,
//     height: "11vh",
//     scrollTrigger: {
//         trigger: "#nav",
//         scroller: "body",
//         markers:true,
//         start: "top -10%",
//         end: "top -11%",
//         scrub: 1,
//     },
// });

gsap.to("#nav", {
    backgroundColor: "#fff",
    color: "#000",
    duration: 0.5,
    height: "6vh",
    y: +10,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers:true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
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
