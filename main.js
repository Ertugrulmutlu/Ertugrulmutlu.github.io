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

  if (progress >= 100) {
    const progressBar_display = document.getElementById('display_progresbar');
    progressBar_display.style.display = 'none'; // Hide the progress bar
    const somethingElse = document.getElementById('elevator');
    somethingElse.style.display = 'block'; // Display something else
  }
}


const sectionIds = ['0', '1', '2', '3', '4','5'];
let currentIndex = 0;

function scrollThroughSections() {
  if (currentIndex < sectionIds.length) {
    scrollToSection(sectionIds[currentIndex]);
    currentIndex++;
    updateProgressBar();

    if (currentIndex < sectionIds.length) {
      setTimeout(scrollThroughSections, 4500); // Scroll every 4 seconds
    }
  }
}

// Start scrolling
setTimeout(scrollThroughSections, 0);
