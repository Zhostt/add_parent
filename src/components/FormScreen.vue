<template>
  <form class="form-container" @submit.prevent="submitHandler">
    <InputParent />
    <InputChildren  @children-change="childrenInputHandler"/>
    <input type="submit" value="Добавить" />
  </form>
</template>

<script setup>
import { ref } from 'vue';
import InputParent from "./InputParent.vue";
import InputChildren from "./InputChildren.vue";
import useFamilyStore from "../store/FamilyStore";

// Состояние форм - дочерних компонентов
let childrenState = [];
const parentState = {};
// Получаем из события children-input новое значение, присваиваем состоянию выше
const childrenInputHandler = (newVal) => {
  console.log('children-input', newVal);
  childrenState = newVal;
};
//  аналогично
const parentInputHandler = () => {
  console.log('parent-input');
};
// обработка сабмита обеих форм, работа с store
const familyStore = useFamilyStore();
const submitHandler = () => {
  familyStore.addFamily(parentState, childrenState);
  console.log('parents', familyStore.getParents);
  console.log('children', familyStore.getChildren);
};

</script>

<style lang="scss" scoped></style>
