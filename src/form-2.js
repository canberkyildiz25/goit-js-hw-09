const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

if (form) {
  // Save only the field that triggered the input event so other saved fields are not overwritten
  function onInputSave(event) {
    const { name, value } = event.target;
    if (!name) return;

    try {
      const saved = JSON.parse(localStorage.getItem(localStorageKey)) || {};
      // store trimmed value (remove leading/trailing spaces)
      saved[name] = value.trim();
      localStorage.setItem(localStorageKey, JSON.stringify(saved));
    } catch (err) {
      console.error('Error saving form state:', err);
    }
  }

  // Load saved state safely (don't set 'undefined' into inputs)
  function loadFormState() {
    try {
      const saved = JSON.parse(localStorage.getItem(localStorageKey));
      if (saved && typeof saved === 'object') {
        if (typeof saved.email === 'string') {
          form.elements.email.value = saved.email;
        }
        if (typeof saved.message === 'string') {
          form.elements.message.value = saved.message;
        }
      }
    } catch (err) {
      console.error('Error loading form state:', err);
    }
  }

  // Listen for input on the whole form (delegation)
  form.addEventListener('input', onInputSave);

  // Handle form submission
  form.addEventListener('submit', event => {
    event.preventDefault();

    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();

    if (!email || !message) {
      // You can show user-facing validation here if desired
      return;
    }

    // Both fields are present — log object, clear storage and reset form
    console.log({ email, message });
    localStorage.removeItem(localStorageKey);
    form.reset();
  });

  // Populate form on load
  document.addEventListener('DOMContentLoaded', loadFormState);
}
