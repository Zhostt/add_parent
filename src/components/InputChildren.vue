<template>
  <div class="input-container">
    <div class="children-header">
      <h4>Дети (макс.5)</h4>
      <button
        type="button"
        :class="{ btn: true, 'btn-primary':true, 'btn-add-child': true, inactive: addFormInactive }"
        @click="addForm"
      >
        +
      </button>
    </div>

    <div class="child-form-block input-block" v-for="input in childrenInputs" :key="input.id">
      <label for="name">
        <div class="input-label">Имя</div>
        <input type="text" name="name" required v-model="input.name" autocomplete="off">
      </label>
      <label for="age">
        <div class="input-label">Возраст</div>
        <input type="number" name="age" required v-model="input.age" autocomplete="off">
      </label>
      <button
        class="btn btn-danger delete-form-btn"
        @click="handleDelete(input.id)">
        Удалить
      </button>
    </div>
  </div>
</template>

<script lang='ts' setup>

import {
  computed, defineEmits, defineProps, ref,
} from 'vue';
import { Child } from "../store/FamilyStore";

// Пляски ниже для того, чтобы увязать пропс v-model с не-примитивом
const props = defineProps(['modelValue']);
const emit = defineEmits(['update:modelValue']);

const childrenInputs = computed({
  get() {
    return props.modelValue;
  },
  set(val) {
    emit('update:modelValue', val);
  },
});

// Состояние кнопки добавления формы
const addFormInactive = ref<boolean>(false);

// Обработка добавления формы. Пушим в массив объект формы, увязанной с темплейтом
// Останавливаем добавление новых форм на 5, переключаем кнопку
const addForm = () => {
  if (childrenInputs.value.length < 5) {
    const id = Date.now();
    const newInput: Child = {
      name: '', age: undefined, id, parentId: undefined,
    };
    childrenInputs.value.push(newInput);
  }
  if (childrenInputs.value.length >= 5) {
    addFormInactive.value = true;
  } else {
    addFormInactive.value = false;
  }
};

// Обработка удаления формы через id + включаем обратно кнопку
const handleDelete = (id: number) => {
  childrenInputs.value = childrenInputs.value.filter((input:Child) => input.id !== id);
  addFormInactive.value = false;
};
</script>

<style scoped>

.child-form-block{
  display: flex;
  align-items: center;
}
.children-header{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 3em;
  align-items: center;
  width: 100%;
}

.btn-add-child{
  width: 11vw;
  color: #01A7FD;
  background-color: white;
  height: 3em;
}

.inactive {
  color: grey;
  border: 1px solid grey;
}

.delete-form-btn{
  margin: 0.5em 1.5em;
  align-self: self-end;
  background-color: white;
  color: #01A7FD;
  border: 0;
}
</style>
