document.querySelectorAll('.accordion').forEach((accordion) => {
  accordion.addEventListener('click', function () {
    const panel = this.nextElementSibling;

    // Toggle max-height
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }

    // Toggle active class for chevron rotation
    this.classList.toggle('active');
    const chevron = this.querySelector('i:last-child');
    if (this.classList.contains('active')) {
      chevron.style.transform = 'rotate(180deg)';
      chevron.style.transition = 'transform 0.3s ease';
    } else {
      chevron.style.transform = 'rotate(0deg)';
    }
  });
});