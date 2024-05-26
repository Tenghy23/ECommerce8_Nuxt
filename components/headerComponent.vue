<template>
    <header class="d-flex ">
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        <h1>{{ title }}</h1>
    </header>
</template>

<script>
export default {
    props: {
        title: String
    }
}
</script>

<style scoped>
header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000; /* make sure it's on top of other elements */
    background-color: #333;
    color: #fff;
    padding: 20px;
    text-align: center;
}

ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
}

li {
    margin-right: 20px;
}

a {
    color: #fff;
    text-decoration: none;
}

a:hover {
    color: #ccc;
}
</style>