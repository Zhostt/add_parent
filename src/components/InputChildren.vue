<template>
    <div>
      <button
        type="button"
        :class="{ btn: true, inactive: addFormInactive }"
        @click="addForm"
      >
        +
      </button>
      <div class="child-form-block" v-for="input in formInputs" :key="input.id">
        <label for="name">
          Имя
          <input type="text" name="name" required v-model="input.name">
        </label>
        <label for="children">
          Возраст
          <input type="text" name="children" required v-model="input.age">
        </label>
        <button class="btn delete-form-btn" @click="handleDelete(input.id)">Удалить</button>
      </div>
    </div>
  </template>

<script lang='ts' setup>
import { ref } from 'vue';

interface Input {
  name: string;
  age: number | null;
  id: number;
  parentId: number | undefined;
}

const formInputs = ref<Input[]>([]);
const addFormInactive = ref(false);

const addForm = () => {
  if (formInputs.value.length < 5) {
    const id = Date.now();
    const newInput: Input = {
      name: '', age: null, id, parentId: undefined,
    };
    formInputs.value.push(newInput);
  } else {
    addFormInactive.value = true;
    console.log(formInputs.value);
  }
};

const handleDelete = (id: number) => {
  formInputs.value = formInputs.value.filter((input) => input.id !== id);
};

</script>

  <style scoped>
  .inactive {
    background-color: grey;
  }
  .child-form-block {
    display: flex;
    border: 1px solid green;
    justify-content: center;
  }
  </style>
