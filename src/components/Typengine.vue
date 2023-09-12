<script setup>

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
        <div class="container center">
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