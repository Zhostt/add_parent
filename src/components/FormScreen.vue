<template>
  <form class="form-container" @submit.prevent="submitHandler">
    <InputParent  @parent-change="parentInputHandler"/>
    <InputChildren  @children-change="childrenInputHandler"/>
    <input type="submit" value="Добавить" />
  </form>
</template>

<script setup>
import InputParent from "./InputParent.vue";
import InputChildren from "./InputChildren.vue";
import useFamilyStore from "../store/FamilyStore";

// Состояние форм - дочерних компонентов
let childrenState = [];
let parentState = {};
// Получаем из события children-input новое значение, присваиваем состоянию выше
// это отслеживани е изменений в инпутах
const childrenInputHandler = (newVal) => {
  childrenState = newVal;
};
//  аналогично
const parentInputHandler = (newVal) => {
  parentState = newVal;
};
// обработка сабмита обеих форм, работа с store
const familyStore = useFamilyStore();
const submitHandler = (e) => {
  familyStore.addFamily(parentState, childrenState);
  console.log('parents', familyStore.getParents);
  console.log('children', familyStore.getChildren);
  e.target.reset();
};

</script>

<style lang="scss" scoped></style>
