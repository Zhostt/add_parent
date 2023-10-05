import { defineStore } from 'pinia';

export type Parent = {
    name: string,
    age: number | null,
    id: number,
}

export type Child = {
    name: string,
    age: number | null,
    parentId: number | undefined,
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
    addFamily(parent: Parent, children: Child[] = []) {
      // Ниже к данным формы мы добавляем необходимые id и пушим в основной хранилище
      console.log('adding', parent, children);
      this.parents.push(parent);
      this.children.push(...children as Child[]);
    },
    setPreviewState(previewState: boolean) {
      this.preview = previewState;
    },
  },

});

export default useFamilyStore;
