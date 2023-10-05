<template>
  <form class="form-container" @submit.prevent="submitHandler">
    <InputParent v-model="parentInputs"/>
    <InputChildren  v-model="childrenInputs"/>
    <input class="btn btn-submit" type="submit" value="Сохранить" />
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

<style>

.form-container{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.input-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}

.input-block{
  width: 100%;
  border: 1px solid rgb(230, 226, 226);
  border-radius: 1em;
  margin-top: 1em;
  display: flex;
  justify-content: space-between;
}

input{
  height: 3em;
  margin: 0.5em;
  padding: 1em;
  border: 1px solid rgb(230, 226, 226);
  border-radius: 5px;
}

.input-block {
  display: flex;
  align-items: left;
}

.input-label{
  color: grey;
  text-align: start;
  margin: 0.5em 0.5em;
}

.btn{
  height: 100%;
  border: 1px solid #01A7FD;
  border-radius: 1.5em;
  background-color: #01A7FD;
  color: white;
}

.btn-submit{
  background-color: 0;
  width: 20%
}
</style>
