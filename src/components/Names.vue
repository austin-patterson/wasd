<script setup>
import { ref } from 'vue'

let names = []
const nameInput = ref('')

function fetchNames() {
    fetch('https://127.0.0.1:3000/api/names', {
        method: 'GET',
        headers: {'Access-Control-Allow-Origin': '*', 'Accept': '*'}
    })
    .then(res => {
        if (res.ok) { return res.json() }
        else { alert('API returned ' + res.status + ' : ' + res.statusText) }
    })
    .then(res => {
        this.names = (Array.isArray(res.names)) ? [...res.names] : []
    })
    .catch(err => {
        console.error(err)
        names = ['Jon Snow', 'Arietta LeNoire']
    })
}

function submitName() {
    names = [...names, nameInput.value]
    nameInput.value = ''
}

//////////

fetchNames();
</script>

<template>
    <input v-model="nameInput" v-on:keydown="$e => { if ($e.key === 'Enter') submitName() }">
    <br />
    <span v-text="nameInput" />
    <br />
    <ul id="list">
        <li v-for="name of names">{{ name }}</li>
    </ul>
</template>