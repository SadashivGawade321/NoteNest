document.addEventListener("DOMContentLoaded", function () {
  // 1. Accordion Toggle
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const infoList = header.nextElementSibling;
      const arrow = header.querySelector('.accordion-arrow');
      const isOpen = infoList.style.display === 'block';

      // Close all others
      document.querySelectorAll('.info-list').forEach(list => list.style.display = 'none');
      document.querySelectorAll('.accordion-arrow').forEach(a => a.setAttribute('aria-expanded', 'false'));

      if (!isOpen) {
        infoList.style.display = 'block';
        arrow.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // 2. Completion Checkbox: Enable corresponding "Next" button
  document.querySelectorAll('.complete-checkbox').forEach((checkbox, index) => {
    checkbox.addEventListener('change', () => {
      const nextBtn = checkbox.closest('.course-module').querySelector('.next-btn');
      if (checkbox.checked && nextBtn) {
        nextBtn.disabled = false;
      } else if (nextBtn) {
        nextBtn.disabled = true;
      }
    });
  });

  // 3. Navigation (Next/Previous buttons)
  document.querySelectorAll('.course-module').forEach(currentModule => {
    const currentId = currentModule.id.replace('module', '');

    const nextBtn = currentModule.querySelector('.next-btn');
    const prevBtn = currentModule.querySelector('.prev-btn');

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        const nextId = parseInt(currentId) + 1;
        const nextModule = document.querySelector(`#module${nextId}`);
        if (nextModule) {
          currentModule.style.display = 'none';
          nextModule.style.display = 'block';
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        const prevId = parseInt(currentId) - 1;
        const prevModule = document.querySelector(`#module${prevId}`);
        if (prevModule) {
          currentModule.style.display = 'none';
          prevModule.style.display = 'block';
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    }
  });
});
document.getElementById('live-editor').addEventListener('input', function () {
  const outputFrame = document.getElementById('live-preview');
  const htmlContent = this.value;
  outputFrame.srcdoc = htmlContent;
});




document.getElementById('toModule7').addEventListener('click', () => {
  // Hide all modules
  document.querySelectorAll('.course-module').forEach(module => {
    module.style.display = 'none';
  });

  // Show certificate module
  const certModule = document.getElementById('module7');
  if (certModule) {
    certModule.style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});
