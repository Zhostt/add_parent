<template>
  <div>
    <button
      type="button"
      :class="{ btn: true, inactive: addFormInactive }"
      @click="addForm"
    >
      +
    </button>
    <div class="child-form-block" v-for="input in childrenInputs" :key="input.id">
      <label for="name">
        Имя
        <input type="text" name="name" required v-model="input.name" autocomplete="off">
      </label>
      <label for="children">
        Возраст
        <input type="number" name="children" required v-model="input.age" autocomplete="off">
      </label>
      <button class="btn delete-form-btn" @click="handleDelete(input.id)">Удалить</button>
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
    if (childrenInputs.value.length === 5) {
      addFormInactive.value = true;
    }
  } else {
    addFormInactive.value = true;
  }
};

// Обработка удаления формы через id + включаем обратно кнопку
const handleDelete = (id: number) => {
  childrenInputs.value = childrenInputs.value.filter((input:Child) => input.id !== id);
  addFormInactive.value = false;
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
