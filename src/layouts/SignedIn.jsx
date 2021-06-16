import React from "react";
import { Dropdown, Image, Menu } from "semantic-ui-react";

export default function SignedIn({signOut}) {
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src="https://avatars.githubusercontent.com/u/77584301?v=4"
        />
        <Dropdown pointing="top left" text="Yahya Erdoğan">
          <Dropdown.Menu>
            <Dropdown.Item text="My Information" icon="info" />
            <Dropdown.Item
              onClick={signOut}
              text="Sign Out"
              icon="sign-out"
            />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
