<template>
  <form class="form-container" @submit.prevent="submitHandler(formsState)">
    <InputParent @parent-change="updateParent" />
    <InputChildren @children-change="updateChildren" />
    <input type="submit" value="Добавить" />
  </form>
</template>

<script setup>
import InputParent from "./InputParent.vue";
import InputChildren from "./InputChildren.vue";
import useFamilyStore from "../store/FamilyStore";

// inner form state
const formsState = {
  parent: {},
  children: [],
};
// recieving data from forms
const updateParent = (parent) => {
  formsState.parent = { ...parent };
  console.log("parent updated", formsState.parent);
};
const updateChildren = (children) => {
  formsState.children = [...children];
};

// working with main state - submit
const familyStore = useFamilyStore();
const submitHandler = (formState) => {
  const { parent, children } = formState;
  familyStore.addFamily(parent, children);
  console.log("Parents", familyStore.getParents);
};
</script>

<style lang="scss" scoped></style>
