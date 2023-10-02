<template>
  <div>
    <div class="input-block">
      <label for="name">
        Имя
        <input
          type="text"
          placeholder="Имя"
          name="name"
          v-model="parent.name"
          @change="emitChange"
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
          v-model="parent.age"
          @change="emitChange"
        />
      </label>
    </div>
  </div>
</template>

<script setup>
import { defineEmits } from "vue";

const emits = defineEmits(["parent-change"]);
const id = Date.now();
const parent = {
  name: "",
  age: null,
  id,
};

const emitChange = () => {
  emits("parent-change", parent);
};
</script>

<style lang="scss" scoped></style>
