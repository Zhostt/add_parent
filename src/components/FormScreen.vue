<template>
  <form class="form-container" @submit.prevent="submitHandler">
    <InputParent />
    <InputChildren  />
    <input type="submit" value="Добавить" />
  </form>
</template>

<script setup>
import ref from 'vue';
import InputParent from "./InputParent.vue";
import InputChildren from "./InputChildren.vue";
import useFamilyStore from "../store/FamilyStore";

// inner form state
// РЕШИ ЗДЕСЬ КАК ЛУЧШЕ УПРАВЛЯТЬСЯ С СОСТОЯНИЕМ,
// МБ В-МОДЕЛЬ от общего состояния (отдельные состояни форм в общем сторе).
// Либо передача в-модел как пропса https://vuejs.org/guide/components/v-model.html#v-model-arguments
// Просто сабмит дефолтный в котороый прилетает ивент, и в ивенте найти?

// working with main state - submit
const familyStore = useFamilyStore();
const submitHandler = () => {
  console.log('submitted');
};

</script>

<style lang="scss" scoped></style>
