import { createSelector } from "reselect";

export const getItemsRender = (state) => state.contacts.items;

export const getFilter = (state) => state.contacts.filtered;

export const getVisibleItems = createSelector([getItemsRender, getFilter], (items, filter) => {
    const normalizedFilter = filter.toLowerCase();
  return items.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
})
