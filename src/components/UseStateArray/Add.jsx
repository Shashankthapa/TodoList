import { useState } from "react";
import MainPage from "./MainPage";
import ListPage from "./ListPage";

export default function () {
    let [emp,setEmp] = useState([{}]);  
    let [id, setId] = useState(0);  
    return(
        <>
            <MainPage id = {id} setId = {setId} emp = {emp} setEmp = {setEmp}/>
            <ListPage showEmp = {emp}/>
        </>
    );

}