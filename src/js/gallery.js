const gallery = document.querySelector('.gallery');

gallery.addEventListener('click', event => {
  // Prevent default link behavior
  event.preventDefault();

  // Check if clicked element is an image
  if (event.target.classList.contains('gallery-image')) {
    // Get the large image source and alt text
    const largeImageSrc = event.target.dataset.source;
    const imageDescription = event.target.getAttribute('alt');

    // Create and show the lightbox
    const instance = basicLightbox.create(
      `
            <div class="lightbox-content">
                <img src="${largeImageSrc}" width="800" height="600">
                <div class="lightbox-description">${imageDescription}</div>
            </div>
        `,
      {
        onShow: instance => {
          // Add keyboard listener when lightbox opens
          document.addEventListener('keydown', onEscKeyPress);

          // Show description after 250ms
          setTimeout(() => {
            const description = document.querySelector('.lightbox-description');
            if (description) {
              description.classList.add('visible');
            }
          }, 250);
        },
        onClose: instance => {
          // Remove keyboard listener when lightbox closes
          document.removeEventListener('keydown', onEscKeyPress);
        },
      }
    );

    instance.show();

    // Function to handle ESC key press
    function onEscKeyPress(event) {
      if (event.code === 'Escape') {
        instance.close();
      }
    }
  }
});
