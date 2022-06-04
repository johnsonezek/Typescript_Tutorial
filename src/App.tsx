import React from "react";
import "./App.css";
// import { CustomButton } from "./components/html/Button";
// import { Private } from "./components/auth/Private";
// import { Profile } from "./components/auth/Profile";
// import { List } from "./components/generics/List";
// import { RandomNumber } from "./components/restriction/RandomNumber";
// import { Toast } from "./components/templateliterals/Toast";
// import { Box } from "./components/context/Box";
// import { ThemeContextProvider } from "./components/context/ThemeContext";
// import { UserContextProvider } from "./components/context/UserContext";
// import { User } from "./components/context/User";
// import { LoggedIn } from "./components/state/LoggedIn";
// import { User } from "./components/state/User";
// import { Button } from "./components/Button";
// import { Container } from "./components/Container";
// import { Input } from "./components/Input";
// import { Greet } from './components/Greet';
// import { Heading } from './components/Heading';
// import { Oscar } from './components/Oscar';
// import { Person } from './components/Person';
// import { PersonList } from './components/PersonList';
// import { Status } from './components/Status';
import { Text } from "./components/polymorphic/Text";

function App() {
  // const personName = {
  //   firstName: "Johnson",
  //   lastName: "Ezek",
  // };

  // const nameList =[ {
  //   firstName: "Ranjith",
  //   lastName: "Kumar"
  // },
  // {
  //   firstName: "Sathish",
  //   lastName: "Kumar"
  // },
  // {
  //   firstName: "Dinesh",
  //   lastName: "Kumar"
  // }]
  return (
    <div className="App">
      {/* {<Greet name="Johnson" isLoggedIn={true} />
     <Person name={personName} />
     <PersonList Names={nameList} />
     <Status status='loading' />
     <Status status='success' />
     <Status status='error' />
     <Heading>Placeholder text</Heading>
     <Oscar>
       <Heading>Oscar goes to Johnson</Heading>
     </Oscar>}
      <Button
        handleClick={(event, id) => {
          console.log("Button clicked", event, id);
        }}
      />
      <Input value="" handleChange={(event)=> console.log(event)} /> 
      <Container styles={{border: '1px solid black', padding: '1rem'}} />
      <LoggedIn />
      <User />
      <ThemeContextProvider>
        <Box/>
      <UserContextProvider>
        <User />
      </UserContextProvider>
      </ThemeContextProvider>
      <Private isLoggedin={true} component={Profile} />
      <List items={['Johnson', 'Nandhini','Bala']} onClick={(item)=> console.log(item)} />
      <List items={[1,2,3,4,5]} onClick={(item)=> console.log(item)} />
      <List
        items={[
          {
            id: 1,
            firstName: "Ranjith",
            lastName: "Kumar",
          },
          {
            id: 2,
            firstName: "Sathish",
            lastName: "Kumar",
          },
          {
            id: 3,
            firstName: "Dinesh",
            lastName: "Kumar",
          },
        ]}
        onClick={(item) => console.log(item)}
      />
      <Toast position='center'/>
      <CustomButton variant="primary" onClick={() => console.log("Clicked")}>
        Primary Button
      </CustomButton>
      <RandomNumber value={10} isPositive={true} />*/}
      <Text as='h1' size="lg">Heading</Text>
      <Text as='p' size="md">Paragraph</Text>
      <Text as='label' htmlFor='someId' size="sm" color="secondary">
        Label
      </Text>
    </div>
  );
}

export default App;
