<script setup>
import { ref } from 'vue';
import { searchValue } from '../functions/storeSearchValue';
import { router } from '../functions/router.js'

const inputValue = ref('');

function onEnterPressed() {
  searchValue.search = inputValue.value;
  router.push('/search/' + searchValue.search);
  inputValue.value = '';
}
</script>


<template>
    <header>
        <nav>
            <a href="/">
                <img src="../assets/pexels.ico" alt="pexels icon">
                Pexels
            </a>
        </nav>

        <section>
            <h1>The best free stock photos, royalty free images & videos shared by creators.</h1>
            <div class="input_container">
                <input type="text" placeholder="Search for free photos" v-model="inputValue" @keyup.enter="onEnterPressed">
                <button>
                    <i class="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>
        </section>
    </header>
</template>

<style scoped>

header {
    height: 500px;
    background: url(../assets/search-bg.jpeg);
    background-position: center;
    background-size: cover;
    padding: 30px;
    margin-bottom: 30px;
    position: relative;
}

header::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.242);
}

nav, section {
    position: relative;
    z-index: 1;
}

nav a {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1.2em;
    text-decoration: none;
    color: white;
    font-weight: 800;
}


section {
    max-width: 700px;
    margin: auto;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

section h1 {
    font-size: 2.2em;
    color: white;
}

section .input_container {
    width: 100%;
    height: 50px;
    position: relative;
    margin-top: 20px;
}

section .input_container input {
    width: 100%;
    height: 100%;
    font-size: 1.2em;
    font-weight: 600;
    padding-left: 20px;
    border: none;
    outline: none;
    border-radius: 8px;
}

section .input_container button {
    position: absolute;
    top: 0;
    right: 0;
    width: 50px;
    height: 50px;
    border-radius: 8px;
    border: none;
    outline: none;
    background: none
}

section .input_container button i {
    color: grey;
    font-size: 1.3em;
}

@media (max-width: 600px){
    section h1 {
        font-size: 1.8em;
    }
}
</style>