import React from "react";
import { Grid, GridColumn, GridRow } from "semantic-ui-react";
import Section from "./Section";
import SideBar from "./SideBar";
import { Route } from "react-router";
import JobAdvertList from "../pages/Business/JobAdvert/JobAdvertList";
import JobAdvertDetail from "../pages/Business/JobAdvert/JobAdvertDetail";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <GridRow>
          <GridColumn width={2}>
            <SideBar />
          </GridColumn>
          <GridColumn width={14}>
            {/* <Route exact path="/" component={JobAdvertList}/> */}
            <Route exact path="/jobAdverts" component={JobAdvertList}/>
            <Route path="/jobAdverts: id" component={JobAdvertDetail}/>

            <Section />
          </GridColumn>
        </GridRow>
      </Grid>
    </div>
  );
}
