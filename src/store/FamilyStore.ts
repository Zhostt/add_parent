import { defineStore } from 'pinia';

export type Parent = {
    name: string,
    age: number,
    id: number,
}

export type Child = {
    name: string,
    age: number,
    parentId: number,
    id: number,
}

const useFamilyStore = defineStore({
  id: 'family',
  state: () => ({
    preview: false,
    parents: [] as Parent[],
    children: [] as Child[],
  }),
  getters: {
    getParents: (state) => state.parents,
    getChildren: (state) => state.children,
  },
  actions: {
    addFamily(parent: Parent, children: Child[]) {
      this.parents.push(parent);
      this.children.push(...children);
    },
    setPreviewState(previewState: boolean) {
      this.preview = previewState;
    },
  },

});

export default useFamilyStore;
