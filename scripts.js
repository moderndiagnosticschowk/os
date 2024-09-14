// Utility function to show the next section
function goToSection(sectionNumber) {
    // Hide all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => section.classList.add('hidden'));
  
    // Show the selected section
    const selectedSection = sections[sectionNumber - 1];
    selectedSection.classList.remove('hidden');
  
    // Handle specific section behaviors
    if (sectionNumber === 5) {
      playBirthdayVideo(); // Play the video in the last section
    }
  }
  
  // Function to reveal the hidden note in the Notes Section
  function revealNote2() {
    const note = document.getElementById('note2');
    note.classList.remove('hidden');
  }
  
  // Function to play the birthday video
  function playBirthdayVideo() {
    const video = document.getElementById('surpriseVideo');
    video.play();
  }
  
  // Function to trigger confetti animation
  function celebrate() {
    const end = Date.now() + 5 * 1000;
  
    const colors = ['#ff1493', '#ff69b4', '#f0f8ff', '#ffb6c1'];
  
    (function frame() {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
      });
  
      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }
  
  // Initially, only the welcome section should be visible
  document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
      if (index === 0) {
        section.classList.remove('hidden');
      } else {
        section.classList.add('hidden');
      }
    });
  });
  