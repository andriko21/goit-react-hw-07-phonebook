import React from "react";
import { connect } from "react-redux";
import style from "./ContactList.module.css";
import { removeContact } from "../../redux/contacts-actions";

const ContactList = ({ itemsRender, deleteItem }) => (
  <div className={style.contacts__container}>
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
  </div>
);

const mapStateToProps = (state) => {
  const { filter, items } = state.contacts;
  const normalizedFilter = filter.toLowerCase();
  const visibleItems = items.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
  return {
    itemsRender: visibleItems,
  };
};

const mapDispatchToProps = (dispatch) => ({
  deleteItem: (id) => dispatch(removeContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
