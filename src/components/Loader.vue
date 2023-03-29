<template>
    <span class="loader"></span>
</template>

<style scoped>
.loader {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    transform: rotateZ(45deg);
    perspective: 1000px;
    border-radius: 50%;
    width: 150px;
    height: 150px;
    color: white;
    display: block;
}

.loader:before,
.loader:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: inherit;
    height: inherit;
    border-radius: 50%;
    transform: rotateX(70deg);
    animation: 1s spin linear infinite;
}

.loader:after {
    color: black;
    transform: rotateY(70deg);
    animation-delay: .4s;
}

@keyframes spin {
    0% {
        box-shadow: 20px 0px 0 0;
    }

    12% {
        box-shadow: 20px 20px 0 0;
    }
    25% {
        box-shadow: 0 20px 0 0;
    }
    37% {
        box-shadow: -20px 20px 0 0;
    }
    50% {
        box-shadow: -20px 0 0 0;
    }
    62% {
        box-shadow: -20px -20px 0 0;
    }
    75% {
        box-shadow: 0px -20px 0 0;
    }
    87% {
        box-shadow: 20px -20px 0 0;
    }

    100% {
        box-shadow: 20px 0px 0 0;
    }
}
</style>