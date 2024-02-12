import { useState } from "react";
import "../../mainPage.css";

export default function MainPage(prop) {
  let [name, setName] = useState();
  let [age, setAge] = useState();
  let [no, setNo] = useState();

  return (
    <>
      <h1 className="header">Todo</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          prop.setEmp([
            ...prop.emp,
            { id: prop.id, name: name, age: age, no: no },
          ]);
        }}
      >
        Name :
        <input
          style={{ border: "1px solid black" }}
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter the name."
        />
        Age :
        <input
          style={{ border: "1px solid black" }}
          type="text"
          onChange={(e) => setAge(e.target.value)}
          placeholder="Enter the age."
        />
        Phone no :
        <input
          style={{ border: "1px solid black" }}
          type="text"
          onChange={(e) => setNo(e.target.value)}
          placeholder="Enter the phone no."
        />
        <input
          style={{ border: "1px solid black" }}
          onClick={() => {
            let propID = prop.id;
            propID++;
            prop.setId(propID);
          }}
          type="submit"
          value="Submit"
        />
      </form>
    </>
  );
}
