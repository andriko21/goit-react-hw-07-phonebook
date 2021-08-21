import axios from "axios";
const BASE = "http://localhost:4040/contacts";

// export const getContactsold = async () => {
//   try {
//     const fetchContacts = await axios(`${BASE}`);
//     // console.log(fetchContacts);
//     return fetchContacts.data;
//   } catch (error) {
//     console.log(error);
//   }
// };

export const getContacts = async () => {
  try {
    const getObject = await axios.get(`${BASE}`)
    return getObject.data;
  } catch (error) {
    console.log(error);
  }
};
