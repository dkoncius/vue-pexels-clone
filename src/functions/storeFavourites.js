import { reactive } from 'vue';

// Get data from local storage
const STORAGE_KEY = 'favourites';
const storedFavourites = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');

export const store = reactive({
  favourites: storedFavourites,
  addToFavourites(id) {
    if (this.favourites.includes(id)) {
      this.favourites.splice(this.favourites.indexOf(id), 1);
    } else {
      this.favourites.push(id);
    }

    // Add data to local storage
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.favourites));
  }
});


export const clearFavourites = () =>  {
    store.favourites = []
    localStorage.setItem(STORAGE_KEY, JSON.stringify(store.favourites))
  }
