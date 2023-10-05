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
          <input type="text" name="children" required v-model="input.age" autocomplete="off">
        </label>
        <button class="btn delete-form-btn" @click="handleDelete(input.id)">Удалить</button>
      </div>
    </div>
  </template>

<script lang='ts' setup>
import { ref, watch, defineEmits } from 'vue';

interface Input {
  name: string;
  age: number | null;
  id: number;
  parentId: number | undefined;
}
// Состояние - массив данных с форм + статус кнопки добавления формы
const childrenInputs = ref<Input[]>([]);
const addFormInactive = ref<boolean>(false);

// Обработка добавления формы. Пушим в массив объект формы, увязанной с темплейтом
// Останавливаем добавление новых форм на 5
const addForm = () => {
  if (childrenInputs.value.length < 5) {
    const id = Date.now();
    const newInput: Input = {
      name: '', age: null, id, parentId: undefined,
    };
    childrenInputs.value.push(newInput);
  } else {
    addFormInactive.value = true;
  }
};

// Обработка удаления формы через id
const handleDelete = (id: number) => {
  childrenInputs.value = childrenInputs.value.filter((input) => input.id !== id);
};
// Эмит на вочере за состоянием форм
// для отправки данных в родительский компонент при любом изменении
const emits = defineEmits(['children-change']);
watch(childrenInputs.value, (newVal) => {
  emits('children-change', newVal);
});

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
