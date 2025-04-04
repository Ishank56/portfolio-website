let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick=() => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active');
}

window.onload = function () {
  // Remove the hash from the URL without reloading the page
  if (window.location.hash) {
    history.replaceState(null, null, window.location.pathname);
  }

  // Scroll to the top of the page
  window.scrollTo(0, 0);
};

// document.addEventListener("DOMContentLoaded", () => {
//   const splineContainer = document.getElementById("spline-container");

//   const observer = new IntersectionObserver(
//     (entries, observer) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           // Dynamically add the Spline Viewer when it comes into view
//           const splineViewer = document.createElement("spline-viewer");
//           splineViewer.setAttribute(
//             "url",
//             "https://prod.spline.design/67ZSWQBovNzuR1qB/scene.splinecode"
//           );
//           splineViewer.classList.add("planet-3d");
//           splineContainer.appendChild(splineViewer);

//           // Stop observing once the Spline Viewer is loaded
//           observer.unobserve(splineContainer);
//         }
//       });
//     },
//     { threshold: 0.1 } // Trigger when 10% of the container is visible
//   );

//   observer.observe(splineContainer);
// });