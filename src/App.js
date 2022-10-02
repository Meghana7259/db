import React from 'react';
import data from './data'
import List from './List'
import { useState } from 'react';

function App() {
const [people,setPeople]=useState(data)


  return (
    <main>
    <section className="container">
      <h3>{people.length} birthday remainder</h3>
      <List people={people}/>
      <button onClick={()=> console.log("hyy you clicked me")}>clear all</button>
    </section>
    </main>
  );
}

export default App;