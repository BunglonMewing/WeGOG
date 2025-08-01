document.addEventListener('DOMContentLoaded', () => {
  fetch('/api/photos')
    .then(res => res.json())
    .then(photos => {
      const feed = document.getElementById('photoFeed');
      photos.forEach(photo => {
        feed.innerHTML += `
          <div class="col-md-4 mb-4">
            <div class="card">
              <div class="card-body">
                <h5>${photo.title}</h5>
              </div>
            </div>
          </div>
        `;
      });
    });
});
