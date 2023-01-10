interface iExcuses {
  [index: string]: { title: string; image: string; };
}

const list:iExcuses = {
  one: {
    title: 'I haven’t touched that module in weeks!',
    image: 'https://preview.redd.it/0q9k35rs52461.jpg?width=1920&format=pjpg&auto=webp&s=28a96947814b6207c596c34b4e623bc6c9683692',
  },
  two: {
    title: 'It must be a hardware problem.',
    image: 'https://preview.redd.it/0q9k35rs52461.jpg?width=1920&format=pjpg&auto=webp&s=28a96947814b6207c596c34b4e623bc6c9683692',
  },
  three: {
    title: 'Somebody must have changed my code.',
    image: 'https://preview.redd.it/0q9k35rs52461.jpg?width=1920&format=pjpg&auto=webp&s=28a96947814b6207c596c34b4e623bc6c9683692',
  },
};

export default list;
