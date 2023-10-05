<template>
  <div class="container">
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
  color: grey;
  background-color: white;
  border: 0;
  font-size: 1.2em;
}

.body-container {
  min-width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

}

.footer {
  background-color: rgb(230, 226, 226);
  width: 100vw;
}
</style>
