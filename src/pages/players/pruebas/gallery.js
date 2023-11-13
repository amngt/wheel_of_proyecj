
const images = [
    { id: 'image-1', src: 'image1.jpg', name: 'Image 1' },
    { id: 'image-2', src: 'image2.jpg', name: 'Image 2' },
    { id: 'image-3', src: 'image3.jpg', name: 'Image 3' },
    { id: 'image-4', src: 'image4.jpg', name: 'Image 4' },
    { id: 'image-5', src: 'image5.jpg', name: 'Image 5' },
    { id: 'image-6', src: 'image6.jpg', name: 'Image 6' },
    { id: 'image-7', src: 'image7.jpg', name: 'Image 7' },
    { id: 'image-8', src: 'image8.jpg', name: 'Image 8' },
    { id: 'image-9', src: 'image9.jpg', name: 'Image 9' },
    { id: 'image-10', src: 'image10.jpg', name: 'Image 10' },

    { id: 'image-11', src: 'image11.jpg', name: 'Image 11' },
    { id: 'image-25', src: 'image25.jpg', name: 'Image 25' }
  ];
  
const gallery = document.querySelector('.gallery');

images.forEach(image => {
  const imageCard = document.createElement('div');
  imageCard.className = 'image-card';
  imageCard.id = image.id;

  const img = document.createElement('img');
  img.src = image.src;
  img.alt = image.name;
  img.className = 'image';

  const imageInfo = document.createElement('div');
  imageInfo.className = 'image-info';

  const deleteIcon = document.createElement('i');
  deleteIcon.className = 'delete-icon';
  deleteIcon.textContent = 'X';

  const editIcon = document.createElement('i');
  editIcon.className = 'edit-icon';
  editIcon.textContent = 'E';

  const imageName = document.createElement('span');
  imageName.className = 'image-name';
  imageName.textContent = image.name;

  imageInfo.appendChild(deleteIcon);
  imageInfo.appendChild(editIcon);
  imageInfo.appendChild(imageName);

  imageCard.appendChild(img);
  imageCard.appendChild(imageInfo);

  gallery.appendChild(imageCard);
});
