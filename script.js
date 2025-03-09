gsap.to("#nav", {
  backgroundColor: "#fff",
  color: "black",
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
    onUpdate: (self) => {
      const links = document.querySelectorAll("#nav a");
      links.forEach((link) => {
        if (self.progress > 0) {
          link.style.color = "#292929"; // Change to black when scrolling
          link.style.fontWeight = "bold";
        } else {
          link.style.color = "#fff"; // Revert to white when back to normal
        }
      });
    },
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
