<template>
  <div class="container">
    <img src="../../public/logo.svg" alt="company logo" class="logo">
    <nav class="nav-container">
        <button class="nav-element" @click="setPreview(false)">Форма</button>
        <button class="nav-element" @click="setPreview(true)">Превью</button>
    </nav>
    <body class="body-container">
      <PreviewScreen v-if="familyStore.preview"/>
      <FormScreen v-else-if="!familyStore.preview"/>
    </body>
    <footer class="footer">All rights reserved</footer>
  </div>

</template>

<script lang="ts" setup>
import useFamilyStore from '@/store/FamilyStore';
import PreviewScreen from './PreviewScreen.vue';
import FormScreen from './FormScreen.vue';

const familyStore = useFamilyStore();

const setPreview = (previewState: boolean) => {
  familyStore.setPreviewState(previewState);
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
  min-width: 100vw;
}
.nav-container {
  display: flex;
  justify-content: center;
  list-style-type: none;
}

.nav-element {
  padding: 1em;
  margin: 1em;
  color: rgb(160, 160, 160);
  background-color: white;
  border: 0;
  font-size: 1.2em;
}

.logo {
  position: absolute;
  top: 0;
  left: 0;
  height: 10vh;
  width: 10vw;
  padding: 1em;
  margin: 1em;
}

.body-container {
  min-width: 50%;
  display: flex;
  flex-direction: column;
}

.footer {
  background-color: rgb(230, 226, 226);
  width: 100vw;
  color: rgb(160, 160, 160);
}
</style>
