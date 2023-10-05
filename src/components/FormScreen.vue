<template>
  <form class="form-container" @submit.prevent="submitHandler">
    <InputParent v-model="parentInputs"/>
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
  name: '' as string,
  age: null as number | null,
  id: Date.now(),
});

// обработка сабмита обеих форм, работа с store
// Присваивание родительского ИД детям
// очистка форм
const familyStore = useFamilyStore();
const submitHandler = () => {
  const parent = { ...parentInputs.value };
  const children = [...childrenInputs.value]
    .map((child) => ({ ...child, parentId: parent.id }));
  familyStore.addFamily(parent, children);
  parentInputs.value = {
    name: '',
    age: null,
    id: Date.now(),
  };
  childrenInputs.value = [];
  console.log('parents', familyStore.getParents);
  console.log('children', familyStore.getChildren);
};

</script>

<style lang="scss" scoped></style>
