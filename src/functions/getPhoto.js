export const getPhoto = (photo) => {
  const limit = 15;
  let title = '';
  let url = '';
  // If no alt text
  if (photo.alt) {
    title = photo.alt;
  } else {
    url = photo.url.slice(29, photo.url.length).split('-').join(' ');
    title = url;
  }

  // If title too long
  if (title.length > limit) {
    title = title.substring(0, limit) + '...';
  }

  return {
    medium: photo.src.medium,
    large: photo.src.large2x,
    splice: photo.url.slice(29, photo.url.length).split('-').join(' '),
    title: title,
    id: photo.id
  };
}


