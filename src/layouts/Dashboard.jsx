import React from "react";
import { Grid, GridColumn, GridRow } from "semantic-ui-react";
import Section from "./Section";
import SideBar from "./SideBar";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <GridRow>
          <GridColumn width={2}>
            <SideBar />
          </GridColumn>
          <GridColumn width={14}>
            <Section />
          </GridColumn>
        </GridRow>
      </Grid>
    </div>
  );
}
