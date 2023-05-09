import { useState } from 'react';

function Photos() {
  const [photos, setPhotos] = useState([
    {
      src: 'https://resizer.otstatic.com/v2/photos/xlarge/1/28390405.jpg',
    },
    {
      src: 'https://resizer.otstatic.com/v2/photos/xlarge/1/28390405.jpg',
    },
    {
      src: 'https://resizer.otstatic.com/v2/photos/xlarge/1/28390405.jpg',
    },
    {
      src: 'https://resizer.otstatic.com/v2/photos/xlarge/1/28390405.jpg',
    },
    {
      src: 'https://resizer.otstatic.com/v2/photos/xlarge/1/28390405.jpg',
    },
    {
      src: 'https://resizer.otstatic.com/v2/photos/xlarge/1/28390405.jpg',
    },
    {
      src: 'https://resizer.otstatic.com/v2/photos/xlarge/1/28390405.jpg',
    },
  ]);

  return (
    <div>
      <header data-test="section-header">
        <div>
          <h2>{photos.length} Photos</h2>
        </div>
      </header>
      <div className="photos">
        {photos.slice(0, 5).map((photo) => (
          <button>
            <img src={photo.src} alt="restaurant image" />
            <div className="more">
              <p>+{photos.length - 5} More</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Photos;
