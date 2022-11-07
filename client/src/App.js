import axios from "axios";
import React from "react";
import * as lodash from "lodash";

const projectAURL = "http://localhost:3000";
const projectBURL = "http://localhost:3001";
const serverlessURL = "http://localhost:4000/dev/test";

export default function App() {
  const [projectA, setProjectA] = React.useState(null);

  const [projectB, setProjectB] = React.useState(null);

  const [serverlessMessage, setServerlessMessage] = React.useState(null);

  React.useEffect(() => {
    axios.get(projectAURL).then((response) => {
      setProjectA(response.data);
    });

    axios.get(projectBURL).then((response) => {
      setProjectB(response.data);
    });

    axios.get(serverlessURL).then((response) => {
      setServerlessMessage(response.data);
    });
  }, []);

  if (lodash.isEmpty(projectA)) return null;

  if (lodash.isEmpty(projectB)) return null;

  if (lodash.isEmpty(serverlessMessage)) return null;

  return (
    <>
      <div>
        <h1>{projectA.name}</h1>
        <p>{projectA.email}</p>
      </div>

      <div>
        <h1>{projectB.name}</h1>
        <p>{projectB.email}</p>
      </div>

      <div>
        <h1>{serverlessMessage.name}</h1>
        <p>{serverlessMessage.email}</p>
      </div>
    </>
  );
}
