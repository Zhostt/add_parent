<template>
    <div>
        <div v-for="parent in parents" :key="parent.id">
            <div class="family-card">
                <h4>Персональные данные</h4>
                <div>{{ `${parent.name}, ${getYearDescription(parent.age)}` }}</div>
                <h4>Дети</h4>
                <ul class="children-list">
                    <li v-if="getChildren(parent.id).length === 0">Нет</li>
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
    border: 1px solid grey;
    text-align: left;
    padding: 1em;
    margin: 1em;
}
</style>
