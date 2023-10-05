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
    addFamily(parent: Parent, children: object[] = []) {
      // Ниже к данным формы мы добавляем необходимые id и пушим в основной хранилище
      const parentId = Date.now();
      const readyParent = { ...parent, id: parentId };
      const readyChildren = children.map((child) => ({ ...child, parentId }));
      this.parents.push(readyParent);
      this.children.push(...readyChildren as Child[]);
    },
    setPreviewState(previewState: boolean) {
      this.preview = previewState;
    },
  },

});

export default useFamilyStore;
