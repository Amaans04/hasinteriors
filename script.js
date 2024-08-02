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

// gsap.to("#nav", {
//     backgroundColor: "#fff",
//     color: "#000",
//     duration: 0.5,
//     height: "6vh",
//     y: +10,
//     // scrollTrigger : normalizeScroll(true),
//     scrollTrigger: {
//         trigger: "#nav",
//         scroller: "body",
//         markers:true,
//         start: "top -15%",
//         end: "top -11%",
//         scrub: 2,
//     },
// });

gsap.registerPlugin(ScrollTrigger);

const hobbyElements = [
    {name: "keyboard", x: 50 * 1.73, y: 25},
    {name: "window1", x: -25 * 1.73, y: 25},
    {name: "window2", x: 25 * 1.73, y: -25},
    {name: "screen", x: -25 * 1.73, y: -25}
];

for (hobbyElement of hobbyElements) {
    gsap.to("#nav", {
        backgroundColor: "#fff",
        color: "#000",
        duration: 0.5,
        height: "6vh",
        y: +10,
        // scrollTrigger : normalizeScroll(true),
        scrollTrigger: {
            trigger: "#nav",
            scroller: "body",
            markers: true,
            start: "top -15%",
            end: "top -11%",
            scrub: 2,
        },
    });
}


function showSidebar() {
    const sideBar = document.querySelector(".sidebar");
    sideBar.style.display = "flex";
}

function hideSidebar() {
    const sideBar = document.querySelector(".sidebar");
    sideBar.style.display = "none";
}
