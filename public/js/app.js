document.addEventListener('DOMContentLoaded', () => {
  // Data dummy (ganti dengan API fetch di production)
  const photos = [
    {
      id: 1,
      title: "Sunset di Pantai",
      imageUrl: "https://source.unsplash.com/random/600x400/?sunset",
      likes: 42,
      comments: 8,
      description: "Momen indah saat matahari terbenam"
    },
    {
      id: 2,
      title: "Gunung Hijau",
      imageUrl: "https://source.unsplash.com/random/600x400/?mountain",
      likes: 35,
      comments: 5,
      description: "Pemandangan hijau yang menyejukkan"
    }
  ];

  const feed = document.getElementById('photoFeed');
  
  photos.forEach(photo => {
    feed.innerHTML += `
      <div class="col-md-6 col-lg-4">
        <div class="photo-card">
          <img src="${photo.imageUrl}" class="photo-img" alt="${photo.title}">
          <div class="card-body">
            <h5 class="photo-title">${photo.title}</h5>
            <p class="photo-description">${photo.description}</p>
            <div class="d-flex justify-content-between">
              <button class="btn btn-like">
                <i class="fas fa-heart me-1"></i> ${photo.likes}
              </button>
              <button class="btn btn-comment">
                <i class="fas fa-comment me-1"></i> ${photo.comments}
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  });

  // Like button functionality
  document.querySelectorAll('.btn-like').forEach(btn => {
    btn.addEventListener('click', function() {
      this.classList.toggle('liked');
      const icon = this.querySelector('i');
      if (this.classList.contains('liked')) {
        icon.classList.remove('fa-heart');
        icon.classList.add('fa-heart-circle-check');
      } else {
        icon.classList.add('fa-heart');
        icon.classList.remove('fa-heart-circle-check');
      }
    });
  });
});
