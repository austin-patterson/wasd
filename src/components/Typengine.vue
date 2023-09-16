<script setup>
import fs from 'fs';


/**
 * Reads whitespace separated words from a file and returns them as an array of strings.
 * @param {string} filePath - The path to the file to read.
 * @returns {string[]} An array of strings representing the words in the file.
 */
function readWordsFromFile(filePath) {
    const fileContents = fs.readFileSync(filePath, 'utf-8');
    const words = fileContents.split(/\s+/);
    return words;
}

</script>

<template>
    <div>
        <h1>Typengine.Vue</h1>
    </div>

    <!-- layout -->
    <div class="header">
        <!-- TODO: score and timer -->
    </div>

    <div class="body">
        <div class="container f-center">
            <div class="word-box scrolling-animation-container">
                <p class="line">
                    

                    <!-- if word is not focussed, unset the background color for the span so it defaults to the word-box background color -->
                    <!-- if word is focused, give word span a rounded background color of green -->
                    <!-- if letter has not been attempted, set the font color to black -->
                    <!-- else if letter has been attempted -->
                    <!-- and the letter is correct -->
                    <!-- give letter span a font color of white -->
                    <!-- else if letter is incorrect -->
                    <!-- give letter span a font color of red -->

                    <!-- START WITH STATIC LOREM IPSUM TEXT AND A NON-SCROLLING WINDOW -->
                </p>
            </div>
        </div>
    </div>

    <div class="footer"></div>
</template>

<style>
.container {
    background-color: #b29544;
    border: 4px solid black;
    border-radius: 0.5em;
}

.f-center {
    display: flex;
    justify-content: center;
    align-items: center;
}

.word-box {
    font-family: 'Fira Code';
    padding: 1em 2em;
}

.focus-word {
    background-color: #3f773f;
    padding: 0.5em;
}

.next-word {
    background-color: unset;
    color: black;
}

.correct-word {
    background-color: unset;
    color: #1313a2;
}

.incorrect-word {
    background-color: unset;
    color: #a21313;
}

/* .text-input {} */
</style>