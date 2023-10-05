<template>
  <div class="input-container">
    <h4>Персональные данные</h4>
    <div class="input-block parent-form-block">
      <label for="name">
        <div class="input-label">Имя</div>
        <input
          type="text"
          name="name"
          required
          v-model="parentInputs.name"
          autocomplete="off"
        />
      </label>
    </div>
    <div class="input-block parent-form-block">
      <label for="age">
        <div class="input-label">Возраст</div>
        <input
          type="number"
          name="age"
          required
          v-model="parentInputs.age"
          autocomplete="off"
        />
      </label>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { computed, defineEmits, defineProps } from 'vue';

// Аналогично детским инпутам, это прием v-model с объектом,
// Позволяющий динамично с ним обращаться, хоть он и в род. компоненте
const props = defineProps(['modelValue']);
const emit = defineEmits(['update:modelValue']);

const parentInputs = computed({
  get() {
    return props.modelValue;
  },
  set(val) {
    emit('update:modelValue', val);
  },
});

</script>

<style scoped>
.parent-form-block{
  width: 100%;
}
</style>
