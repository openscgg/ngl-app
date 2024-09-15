import React from "react";
import TopMenu from "./components/top/TopMenu";
import CardContainer from "./components/content/NglCard";
import ActionSteps from "./components/bottom/ActionSteps";

const App = () => {
  return (
    <>
      <TopMenu></TopMenu>
      <CardContainer></CardContainer>

      <ActionSteps></ActionSteps>
    </>
  );
};

export default App;
