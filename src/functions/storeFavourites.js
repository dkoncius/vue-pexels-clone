import { reactive } from 'vue';

const STORAGE_KEY = 'favourites';

let storedFavourites;

try {
  storedFavourites = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  if (!Array.isArray(storedFavourites)) {
    throw new Error("Stored favourites is not an array");
  }
} catch (error) {
  console.error('Error parsing stored favourites:', error);
  storedFavourites = [];
  localStorage.removeItem(STORAGE_KEY);
}

export const store = reactive({
  favourites: storedFavourites,
  addToFavourites(id) {
    if (this.favourites.includes(id)) {
      this.favourites.splice(this.favourites.indexOf(id), 1);
    } else {
      this.favourites.push(id);
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.favourites));
  }
});

export const clearFavourites = () => {
  store.favourites = [];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(store.favourites));
}
