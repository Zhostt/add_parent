<template>
  <form class="form-container" @submit.prevent="submitHandler">
    <InputParent v-model="parentInputs"/>
    <InputChildren  @children-change="childrenInputHandler"/>
    <input type="submit" value="Добавить" />
  </form>
</template>

<script lang='ts' setup>
import { ref } from 'vue';
import InputParent from "./InputParent.vue";
import InputChildren from "./InputChildren.vue";
import useFamilyStore from "../store/FamilyStore";

// Состояние форм - дочерних компонентов
let childrenState = [];
const parentInputs = ref({
  name: '' as string,
  age: null as number | null,
});
// Получаем из события children-input новое значение, присваиваем состоянию выше
// это отслеживани е изменений в инпутах
const childrenInputHandler = (newVal) => {
  childrenState = newVal;
};

// обработка сабмита обеих форм, работа с store
const familyStore = useFamilyStore();
const submitHandler = (e) => {
  familyStore.addFamily(parentInputs.value, childrenState);
  parentInputs.value = {
    name: '',
    age: null,
  };
  console.log('parents', familyStore.getParents);
  console.log('children', familyStore.getChildren);
};

</script>

<style lang="scss" scoped></style>
