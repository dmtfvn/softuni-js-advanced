function lockedProfile() {
  document.querySelector('main').addEventListener('click', (e) => {
    if (e.target.nodeName === 'BUTTON') {
      const profile = e.target.closest('.profile');

      const state = profile.querySelector('input[type="radio"]:checked').value;

      if (state === 'unlock') {
        const hiddenFieldEl = profile.querySelector('[id*="HiddenFields"]');

        if (hiddenFieldEl.style.display === 'block') {
          e.target.textContent = 'Show more';

          hiddenFieldEl.style.display = 'none';
        } else {
          e.target.textContent = 'Hide it';

          hiddenFieldEl.style.display = 'block';
        }
      }
    }
  });
}