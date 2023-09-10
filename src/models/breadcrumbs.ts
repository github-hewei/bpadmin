export default {
  namespace: "breadcrumbs",
  state: {
    breadcrumbs: [],
  },
  reducers: {
    setBreadcrumbs( state: any, { payload }: any) {
      return {
        ...state,
        breadcrumbs: payload,
      };
    },
  },
};
