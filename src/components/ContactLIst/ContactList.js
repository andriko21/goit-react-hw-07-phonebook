import React, { useEffect } from "react";
import { connect } from "react-redux";
import style from "./ContactList.module.css";
import { useDispatch } from "react-redux";
import { removeContact } from "../../redux/contacts/contacts-actions";
import * as contactsOperations from '../../redux/contacts/contacts-operations'
import { getVisibleItems } from "../../redux/contacts/contacts-selectors";

const ContactList = ({ itemsRender, deleteItem }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts())
  },[dispatch])
  return(
    <>
      {itemsRender && <div className={style.contacts__container}>
      <h2>Contacts</h2>
      <ul className={style.list}>
        {itemsRender.map(({ name, id, number }) => (
          <li className={style.item} key={id}>
            <p className={style.userName}>{name}: </p>
            <p>{number}</p>
            <button
              type="button"
              className={style.button}
              onClick={() => deleteItem(id)}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>}
      </>
  )
};

const mapStateToProps = (state) => {
  return {
    itemsRender: getVisibleItems(state),
  };

};

const mapDispatchToProps = (dispatch) => ({
  deleteItem: (id) => dispatch(removeContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
// export default ContactList
