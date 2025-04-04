document.getElementById("start-button").addEventListener("click", (e) => {
    e.preventDefault(); // Prevent immediate redirect
  
    const wrapper = document.getElementById("planet-wrapper");
    wrapper.classList.add("zoom-out");
  
    setTimeout(() => {
      window.location.href = "portfolio.html";
    }, 1000); // Match animation duration
  });
  