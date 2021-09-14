import React from "react";
import { Container, Input, ListItem } from "components";
import { usePeopleStore } from "store";

const App: React.FC = () => {
  const { peoples } = usePeopleStore();

  return (
    <Container>
      <Input />
      {peoples.map((person, index) => (
        <ListItem data={person} index={index} key={index} />
      ))}
    </Container>
  );
};

export default App;
