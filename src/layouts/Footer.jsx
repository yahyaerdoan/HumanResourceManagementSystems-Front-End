import React from "react";
import {
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Segment,
  Button,
} from "semantic-ui-react";

export default function footer() {
  return (
    <div>
      <Segment
        inverted
        vertical
        style={{ margin: "10em 0em 0em", padding: "5em 0em", bottom: "0em" }}
      >
        <Container textAlign="center">
          <Grid divided inverted stackable>
            <Grid.Column width={6}>
              <Header
                inverted
                as="h4"
                content="Human Resource Management Systems"
              />
              <p>Java - React Yazılım Geliştirici Yetiştirme Kampı</p>
            </Grid.Column>

            <Grid.Column width={6}>
              <Header inverted as="h4" content="Follow Us" />
              <br />
              <Button circular color="facebook" icon="facebook" />

              <Button circular color="instagram" icon="instagram" />

              <Button circular color="twitter" icon="twitter" />

              <Button circular color="linkedin" icon="linkedin" />

              <Button
                circular
                color="github"
                icon="github"
                target="blank"
                href="https://github.com/yahyaerdoan/HumanResourceManagementSystems-Front-End"
              />

              <Button circular color="google plus" icon="google plus" />
            </Grid.Column>

            <Grid.Column width={3}>
              <Image src="" size="small" />
            </Grid.Column>
          </Grid>

          <Divider inverted section />
          <List horizontal inverted divided link size="small">
            <List.Item as="a" href="#">
              Site Map
            </List.Item>
            <List.Item as="a" href="#">
              Contact Us
            </List.Item>
            <List.Item as="a" href="#">
              Terms and Conditions
            </List.Item>
            <List.Item as="a" href="#">
              Privacy Policy
            </List.Item>
          </List>
        </Container>
      </Segment>
    </div>
  );
}
