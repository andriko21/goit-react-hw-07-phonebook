import React from "react";
import style from "./Filter.module.css";
import { connect } from "react-redux";
import {changeFilter} from "../../redux/contacts-actions"

const Filter = ({ value, onChange }) => (
  <>
    <h3>Find contacts by name</h3>
    <input className={style.input} value={value} onChange={onChange} />
  </>
);

const mapStateToProps = (state) => ({
  value: state.contacts.filter,
})

const mapDispatchToProps = dispatch => ({
  onChange: (ev) => {
    return dispatch(changeFilter(ev.currentTarget.value))
  }
  
})

export default connect(mapStateToProps,mapDispatchToProps)(Filter);
