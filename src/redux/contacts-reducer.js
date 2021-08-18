import { combineReducers } from "redux";
import { v4 as uuidv4 } from "uuid";
import { createReducer } from "@reduxjs/toolkit";
// import * as actions from "./contacts-actions"

import {addContact, removeContact, changeFilter} from "./contacts-actions"

const initialState = [
  { id: uuidv4(), name: "Rosie Simpson", number: "459-12-56" },
  { id: uuidv4(), name: "Hermione Kline", number: "443-89-12" },
  { id: uuidv4(), name: "Eden Clements", number: "645-17-79" },
  { id: uuidv4(), name: "Annie Copeland", number: "227-91-26" },
];

const items = createReducer(initialState, {
  [addContact]: (state, { payload }) => [payload, ...state],

  [removeContact]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});

const filter = createReducer("", {
  [changeFilter]: (state, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
