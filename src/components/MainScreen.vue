<template>
    <nav class="nav-container">
        <button class="nav-element" @click="setPreview(false)">Форма</button>
        <button class="nav-element" @click="setPreview(true)">Превью</button>
    </nav>
    <body class="body-container">
      <PreviewScreen v-if="familyStore.preview"/>
      <FormScreen v-else-if="!familyStore.preview"/>
    </body>
    <footer class="footer">All rights reserved</footer>
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
.nav-container {
  display: flex;
  justify-content: center;
  border: 1px solid red;
  list-style-type: none;
}

.nav-element {
  padding: 1em;
  margin: 1em;
}

.footer {
}
</style>
