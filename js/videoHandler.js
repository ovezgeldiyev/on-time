const videoHanlder = () => {
    const myVideo = document.getElementById("myVideo");
    const sections = document.querySelectorAll(".featuresItem");
    myVideo.onclick = function () {
      if (myVideo.paused == true) {
        myVideo.play();
      } else {
        myVideo.pause();
      }
    };
    if (myVideo) {
      function updateSections(currentTime) {
        sections.forEach((section, index) => {
          const sectionData = section.dataset; // Assuming data attributes store durations
          const startTime = parseFloat(sectionData.startTime) || 0; // Default to 0 if not set
          const duration = startTime + parseFloat(sectionData.duration) || 0;
          if (currentTime >= startTime && currentTime < duration) {
            section.classList.add("active"); // Replace "active" with your desired class name
          } else {
            section.classList.remove("active");
          }
        });
      }
  
      myVideo.addEventListener("timeupdate", () => {
        const currentTime = Math.floor(myVideo.currentTime);
        const duration = Math.floor(myVideo.duration);
  
        sections.forEach((section) => {
          let startTime = section.getAttribute("data-start-time");
          startTime = parseInt(startTime);
          let dataDuration = section.getAttribute("data-duration");
          dataDuration = parseInt(dataDuration);
          const line = section.querySelector(".features__inner-line span");
  
          if (
            currentTime > startTime &&
            currentTime <= startTime + dataDuration
          ) {
            line.style.height = `${
              ((currentTime - startTime) * 100) / dataDuration
            }%`;
            if (((currentTime - startTime) * 100) / dataDuration === 80) {
              if (section.querySelector(".circle.addt")) {
                section.querySelector(".circle.addt").classList.add("passed");
              }
            } else if (((currentTime - startTime) * 100) / dataDuration === 100) {
              section.querySelector(".circle").classList.add("passed");
              if (section.querySelector(".circle.addt")) {
                section.querySelector(".circle.addt").classList.add("passed");
              }
            }
          }
        });
        updateSections(currentTime);
      });
  
      sections.forEach((section) => {
        const featuresItemSpan = section.querySelector(".circle");
        const featuresItemHead = section.querySelector(".featuresItem__head"); // Replace with your inner div class
        featuresItemHead.addEventListener("click", () => {
          const sectionData = section.dataset;
          const targetTime = parseFloat(sectionData.startTime) || 0;
          myVideo.currentTime = targetTime;
          const currentTime = Math.floor(myVideo.currentTime);
          myVideo.play(); // Play the video after seeking
          sections.forEach((section) => {
            let startTime = section.getAttribute("data-start-time");
            startTime = parseInt(startTime);
            let dataDuration = section.getAttribute("data-duration");
            dataDuration = parseInt(dataDuration);
            const line = section.querySelector(".features__inner-line span");
            if (currentTime > startTime + dataDuration) {
              line.style.height = `100%`;
              section.querySelector(".circle").classList.add("passed");
            } else {
              line.style.height = "0%";
              section.querySelector(".circle").classList.remove("passed");
              if (section.querySelector(".circle.addt")) {
                section.querySelector(".circle.addt").classList.remove("passed");
              }
            }
          });
        });
        featuresItemSpan.addEventListener("click", () => {
          const sectionData = section.dataset;
          const targetTime = parseFloat(sectionData.startTime) || 0;
          myVideo.currentTime = targetTime;
          const currentTime = Math.floor(myVideo.currentTime);
          myVideo.play(); // Play the video after seeking
          sections.forEach((section) => {
            let startTime = section.getAttribute("data-start-time");
            startTime = parseInt(startTime);
            let dataDuration = section.getAttribute("data-duration");
            dataDuration = parseInt(dataDuration);
            const line = section.querySelector(".features__inner-line span");
            if (currentTime > startTime + dataDuration) {
              line.style.height = `100%`;
              section.querySelector(".circle").classList.add("passed");
            } else {
              line.style.height = "0%";
              section.querySelector(".circle").classList.remove("passed");
              if (section.querySelector(".circle.addt")) {
                section.querySelector(".circle.addt").classList.remove("passed");
              }
            }
          });
        });
      });
  
      // Initially pause the video
      myVideo.pause();
    }
  };
  const videoHanlderMob = () => {
    const myVideo = document.getElementById("myVideo");
    const sections = document.querySelectorAll(".featuresItem");
    sections[0].classList.add("active");
    myVideo.onclick = function () {
      if (myVideo.paused == true) {
        myVideo.play();
      } else {
        myVideo.pause();
      }
    };
    if (myVideo) {
      function updateSections(currentTime) {
        const duration2 = Math.floor(myVideo.duration);
  
        sections.forEach((section, index) => {
          const sectionData = section.dataset; // Assuming data attributes store durations
          const startTime = parseFloat(sectionData.startTime) || 0; // Default to 0 if not set
          const duration = startTime + parseFloat(sectionData.duration) || 0;
          if (currentTime >= startTime && currentTime < duration) {
            section.classList.add("active"); // Replace "active" with your desired class name
          } else {
            if (currentTime !== duration2) {
              section.classList.remove("active");
            }
          }
        });
      }
  
      myVideo.addEventListener("timeupdate", () => {
        const currentTime = Math.floor(myVideo.currentTime);
  
        sections.forEach((section) => {
          let startTime = section.getAttribute("data-start-time");
          startTime = parseInt(startTime);
          let dataDuration = section.getAttribute("data-duration");
          dataDuration = parseInt(dataDuration);
          const line = section.querySelector(".features__inner-line span");
  
          if (
            currentTime > startTime &&
            currentTime <= startTime + dataDuration
          ) {
            line.style.width = `${
              ((currentTime - startTime) * 100) / dataDuration
            }%`;
            if (((currentTime - startTime) * 100) / dataDuration === 80) {
              if (section.querySelector(".circle.addt")) {
                section.querySelector(".circle.addt").classList.add("passed");
              }
            } else if (((currentTime - startTime) * 100) / dataDuration === 100) {
              section.querySelector(".circle").classList.add("passed");
              if (section.querySelector(".circle.addt")) {
                section.querySelector(".circle.addt").classList.add("passed");
              }
            }
          }
        });
        updateSections(currentTime);
      });
  
      sections.forEach((section) => {
        const featuresItemSpan = section.querySelector(".circle");
        const featuresItemHead = section.querySelector(".featuresItem__head"); // Replace with your inner div class
        featuresItemHead.addEventListener("click", () => {
          const sectionData = section.dataset;
          const targetTime = parseFloat(sectionData.startTime) || 0;
          myVideo.currentTime = targetTime;
          const currentTime = Math.floor(myVideo.currentTime);
          myVideo.play(); // Play the video after seeking
          sections.forEach((section) => {
            let startTime = section.getAttribute("data-start-time");
            startTime = parseInt(startTime);
            let dataDuration = section.getAttribute("data-duration");
            dataDuration = parseInt(dataDuration);
            const line = section.querySelector(".features__inner-line span");
            if (currentTime > startTime + dataDuration) {
              line.style.width = `100%`;
              section.querySelector(".circle").classList.add("passed");
            } else {
              line.style.width = "0%";
              section.querySelector(".circle").classList.remove("passed");
              if (section.querySelector(".circle.addt")) {
                section.querySelector(".circle.addt").classList.remove("passed");
              }
            }
          });
        });
        featuresItemSpan.addEventListener("click", () => {
          const sectionData = section.dataset;
          const targetTime = parseFloat(sectionData.startTime) || 0;
          myVideo.currentTime = targetTime;
          const currentTime = Math.floor(myVideo.currentTime);
          myVideo.play(); // Play the video after seeking
          sections.forEach((section) => {
            let startTime = section.getAttribute("data-start-time");
            startTime = parseInt(startTime);
            let dataDuration = section.getAttribute("data-duration");
            dataDuration = parseInt(dataDuration);
            const line = section.querySelector(".features__inner-line span");
            if (currentTime > startTime + dataDuration) {
              line.style.width = `100%`;
              section.querySelector(".circle").classList.add("passed");
            } else {
              line.style.width = "0%";
              section.querySelector(".circle").classList.remove("passed");
              if (section.querySelector(".circle.addt")) {
                section.querySelector(".circle.addt").classList.remove("passed");
              }
            }
          });
        });
      });
  
      // Initially pause the video
      myVideo.pause();
    }
  };
  if (window.innerWidth <= 750) {
    videoHanlderMob();
  } else {
    videoHanlder();
  }
  window.addEventListener("resize", () => {
    if (window.innerWidth <= 750) {
      videoHanlderMob();
    } else {
      videoHanlder();
    }
  });
  