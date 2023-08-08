// Function to scroll to a specific section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
  function updateProgressBar() {
    const progressBar = document.getElementById('progressbarr');
    const progress = (currentIndex / sectionIds.length) * 100;
    progressBar.style.width = `${progress}%`;
  }
  // Scroll through sections every 4 seconds
  const sectionIds = ['1', '2', '3'];
  let currentIndex = 0;
  
  function scrollThroughSections() {
    if (currentIndex < sectionIds.length) {
      scrollToSection(sectionIds[currentIndex]);
      currentIndex++;
      updateProgressBar()
  
      if (currentIndex < sectionIds.length) {
        setTimeout(scrollThroughSections, 6000); // Adjust the delay to your preference
      }
    }
  }
  
  // Start scrolling
  setTimeout(scrollThroughSections, 6000);
  
  // Update the progress bar based on the current index
