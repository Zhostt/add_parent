<template>
  <div>
    <div class="input-block">
      <label for="name">
        Имя
        <input
          type="text"
          placeholder="Имя"
          name="name"
          required
          v-model = "parentInputs.name"
          autocomplete="off"
        />
      </label>
    </div>
    <div class="input-block">
      <label for="age">
        Возраст
        <input
          type="number"
          placeholder="Возраст"
          name="age"
          required
          v-model = "parentInputs.age"
          autocomplete="off"
        />
      </label>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { ref, watch, defineEmits } from 'vue';

const parentInputs = ref({
  name: '' as string,
  age: null as number | null,
});
// Эмит на вочере за состоянием форм
// для отправки данных в родительский компонент при любом изменении
const emits = defineEmits(['parent-change']);
watch(parentInputs.value, (newVal) => {
  emits('parent-change', newVal);
  parentInputs.value = newVal;
});
</script>

<style lang="scss" scoped></style>
