import React from "react";
import { Grid, GridColumn, GridRow } from "semantic-ui-react";
import JobAdvertAdd from "../pages/Business/JobAdvert/JobAdvertAdd";
import JobAdvertList from "../pages/Business/JobAdvert/JobAdvertList";
import TypeOfWorkList from "../pages/Business/TypeOfWork/TypeOfWorkList";
import EmployerList from "../pages/Users/Employer/EmployerList";
import JobSeekerList from "../pages/Users/JobSeeker/JobSeekerList";
import SystemWorkerList from "../pages/Users/SystemWorker/SystemWorkerList";

export default function Section() {
  return (
    <div>
      <Grid>
      <GridRow>
          <GridColumn size={14}>{<JobAdvertAdd />}</GridColumn>
        </GridRow>
        {/* <GridRow>
          <GridColumn size={14}>{<JobSeekerList />}</GridColumn>
        </GridRow>
        <Grid.Row>
          <GridColumn size={14}>{<EmployerList />}</GridColumn>
        </Grid.Row>
        <Grid.Row>
          <GridColumn size={14}>{<JobAdvertList />}</GridColumn>
        </Grid.Row>
        <Grid.Row>
          <GridColumn size={14}>{<TypeOfWorkList />}</GridColumn>
        </Grid.Row>
        <Grid.Row>
          <GridColumn size={14}>{<SystemWorkerList />}</GridColumn>
        </Grid.Row> */}
      </Grid>
    </div>
  );
}
