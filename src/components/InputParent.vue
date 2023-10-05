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
          v-model="value.name"
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
          v-model="value.age"
          autocomplete="off"
        />
      </label>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { computed, defineEmits, defineProps } from 'vue';

const props = defineProps(['modelValue']);
const emit = defineEmits(['update:modelValue']);

const value = computed({
  get() {
    return props.modelValue;
  },
  set(val) {
    emit('update:modelValue', val);
  },
});

</script>

<style lang="scss" scoped></style>
