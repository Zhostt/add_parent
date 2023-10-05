<template>
  <form class="form-container" @submit.prevent="submitHandler">
    <div class="parent-input">
      <h4>Персональные данные</h4>
      <InputParent v-model="parentInputs"/>
    </div>
    <InputChildren  v-model="childrenInputs"/>
    <input type="submit" value="Добавить" />
  </form>
</template>

<script lang='ts' setup>
import { ref } from 'vue';
import InputParent from "./InputParent.vue";
import InputChildren from "./InputChildren.vue";
import useFamilyStore, { Parent, Child } from "../store/FamilyStore";

// Состояние форм - дочерних компонентов
// Пустой массив детей
// Объект родителя с заранее заданным id
const childrenInputs = ref<Child[]>([]);
const parentInputs = ref<Parent>({
  name: '',
  age: undefined,
  id: Date.now(),
});

// обработка сабмита обеих форм, работа с store
const familyStore = useFamilyStore();
const submitHandler = () => {
  // Трим имен, присваивание родительского ИД детям
  const parent = { ...parentInputs.value, name: parentInputs.value.name.trim() };
  const children = [...childrenInputs.value]
    .map((child) => ({ ...child, name: child.name.trim(), parentId: parent.id }));
  // собсна сабмит методом из стора
  familyStore.addFamily(parent, children);
  // очистка форм
  parentInputs.value = {
    name: '',
    age: undefined,
    id: Date.now(),
  };
  childrenInputs.value = [];
};

</script>

<style lang="scss" scoped></style>
