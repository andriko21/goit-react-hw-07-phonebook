import { createAction } from "@reduxjs/toolkit";

const addContact = createAction("contacts/ADD");
const removeContact = createAction("contacts/REMOVE");
const changeFilter = createAction("contacts/FILTER");

export { addContact, removeContact, changeFilter };
