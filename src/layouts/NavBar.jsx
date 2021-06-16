import React, { useState } from "react";
import { Button, Container, Icon, Menu } from "semantic-ui-react";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";

export default function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  function handleSignOut(params){
    setIsAuthenticated(false)
  }
  function handleSignIn(params){
    setIsAuthenticated(true)
  }
  return (
    <div>
      <Menu inverted fixed="top" size="large">
        <Container>
          <Menu.Item name="building outline">
            <Icon name="building outline" size="large" />
            HRMS
          </Menu.Item>
          <Menu.Item name="Home" />
          <Menu.Item name="Job Advert" />
          <Menu.Item name="Companies" />
          <Menu.Menu position="right">
            <Menu.Item>
              {isAuthenticated ? <SignedIn signOut={handleSignOut}/> : <SignedOut signIn={handleSignIn}/>}
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
