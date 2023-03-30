<script setup>
import Photos from '../components/Photos.vue'
import { fetchPhotos } from '../functions/fetchData';

let page = 0
const { data } = fetchPhotos(page, 'music');
</script>

<template>
 <Photos :data="data"/>
</template>
