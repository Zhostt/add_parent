<template>
    <div class="preview-container">
        <div v-for="parent in parents" :key="parent.id">
            <div class="family-card">
                <h4>Персональные данные</h4>
                <div class="parent">{{ `${parent.name}, ${getYearDescription(parent.age)}` }}</div>
                <h4>Дети</h4>
                <ul class="children-list">
                    <li class="child" v-if="getChildren(parent.id).length === 0">Нет</li>
                    <li class="child" v-for="child in getChildren(parent.id)" :key="child.id">
                        {{ `${child.name}, ${getYearDescription(child.age)}` }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import useFamilyStore, { Parent, Child } from "../store/FamilyStore";
import { getYearDescription } from '../utils/utils';

const familyStore = useFamilyStore();

const { parents, children } = familyStore;

const getChildren = (parentId:number) => children.filter((child) => child.parentId === parentId);
</script>

<style scoped>
.family-card {
    border: 1px solid rgb(230, 226, 226);
    border-radius: 1em;
    text-align: left;
    padding: 1em;
    margin: 1em;
}

h4 {
    font-weight: 400;
    font-size: 20px;
}
.parent, .child {
    font-weight: 700;
    font-size: 20px;
    padding: 1em;
}

.parent {
    margin: 0 0 1em 0;
}
</style>
