import * as contactsActions from "./contacts-actions";
import * as api from "../../helpers/contactsApi";

export const fetchContacts = () => async (dispatch) => {
  contactsActions.fetchContactsRequest();

  try {
    const contacts = await api.getContacts();
    dispatch(contactsActions.fetchContactsSuccess(contacts));
  } catch (error) {
    console.log(error);
  }
};
