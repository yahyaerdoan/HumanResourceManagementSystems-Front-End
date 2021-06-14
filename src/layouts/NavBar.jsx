import React from 'react'
import { Button, Container, Icon, Menu } from 'semantic-ui-react'

export default function Navbar() {
    return (
        <div>
        <Menu inverted fixed="top" size="large">
          <Container>
            <Menu.Item name="building outline">
              <Icon name="building outline" size="large"/>
              HRMS
            </Menu.Item>
            <Menu.Item name="Home" />
            <Menu.Item name="Job Advert" />
            <Menu.Item name="Companies" />
            <Menu.Menu position="right">
              {/* <Dropdown item text="Language">
                <Dropdown.Menu>
                  <Dropdown.Item>English</Dropdown.Item>
                  <Dropdown.Item>Russian</Dropdown.Item>
                  <Dropdown.Item>Spanish</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown> */}
  
              <Menu.Item>
                <Button.Group>
                  <Button inverted color='red'>Sign Up</Button>
                  <Button.Or />
                  <Button inverted color='green'>Sign In</Button>
                </Button.Group>
              </Menu.Item>
            </Menu.Menu>
          </Container>
        </Menu>
      </div>
    )
}
