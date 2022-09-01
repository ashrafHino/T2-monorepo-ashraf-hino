import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import Axios from 'axios';
import './App.css';
import { json } from 'body-parser';

function App() {
  const url = ""
  const [data, setdata] = useState(
    {
      name: "",
      email: ""
    }
  )
  useEffect(() => {
    fetch("/").then(
      {
        method: "POST",
        Headers: { 'content-type': "application/json" },
        body: JSON.stringify(data)
      }
    )
      .then(
        Response => Response.json()
      ).then(
        data => { setdata(data) }
      )
  }, [])

  function submit(e: any) {

  }
  return (
    <div className="App">
      {(typeof data.users === 'undefined') ? (
        <p>loading...</p>
      ) : (
        <form onSubmit={(e) => submit(e)}>
          <input value={data.name} id="name" placeholder='name' type="text" ></input>
          <input value={data.email} id="email" placeholder='email' type="text" ></input>
          <button>submit</button>
        </form>
      )}
    </div>
  );
}

export default App;
