import { useState, useEffect } from 'react';
import List from "./List";
import Form from "./Form";

function Contacts() {

  const [contacts, setContacts] = useState([
    {
      fullname: "bert",
      phone_number: 552
    }, {
      fullname: "tugba",
      phone_number: 537,
    }, {
      fullname: "jojo",
      phone_number: 212
    }
  ]);

  useEffect(()=> {
    console.log(contacts);
  }, [contacts])

  return (
    <div>
        <List contacts={contacts} />
        <Form addContact={setContacts} contacts={contacts}/>
    </div>
  )
}

export default Contacts