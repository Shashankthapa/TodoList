import { useState } from "react";

const page = (prop) => { 
    let [task,setTask] = useState("");
    let [date,setDate] = useState("");
  
    return(
        <>
            <h1 className = "text-2xl font-bold text-center">TODO LIST</h1>
            <form style = {{margin : "20px"}} onSubmit={(event) => {event.preventDefault(); }}>
                <section className="inline-block mx-2">
                  <span className="font-bold text-xl">Task : </span>
                  <input 
                    type="text"
                    className="border-2 px-5 py-3" 
                    placeholder = "Enter the task."
                    onChange = {(event) => {
                      setTask(event.target.value);
                    }}/>
                </section>
                <section className="inline-block mx-2">
                  <span className="font-bold text-xl">
                  Date : 
                  </span>
                  <input 
                    type="text" 
                    className="border-2 px-5 py-3" 
                    onChange = {(event) => setDate(event.target.value)}
                    placeholder = "Enter the date."/>
                </section>
                <section className = "inline-block mx-2"><input 
                  className="border-2 border-cyan-400 p-2"     
                  type="submit" 
                  value = "SUBMIT"/>
                </section>

            </form>
        </>
    );
}

export default page;