import axios from "axios";
import React from "react";
import * as lodash from 'lodash'

const projectAURL = "http://localhost:3000";
const projectBURL = "http://localhost:3001";

export default function App() {
  const [postA, setPostA] = React.useState(null);
  const [postB, setPostB] = React.useState(null);

  React.useEffect(() => {
console.log('userEffect')
    axios.get(projectAURL).then((response) => {
      setPostA(response.data);
    });

    axios.get(projectBURL).then((response) => {
      setPostB(response.data);
    });

  }, []);
  
  if (lodash.isEmpty(postA)) return null;
  if (lodash.isEmpty(postB)) return null;

  return (
    <><div>
      <h1>{postA.title}</h1>
      <p>{postA.body}</p>
    </div>
    <div>
    <h1>{postB.title}</h1>
    <p>{postB.body}</p>
  </div></>
  );
}