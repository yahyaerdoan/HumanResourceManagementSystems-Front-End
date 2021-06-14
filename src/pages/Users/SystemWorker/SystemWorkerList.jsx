import React, { useState, useEffect } from "react";
import { Button, Header, Icon, Table } from "semantic-ui-react";
import SystemWorkerService from "../../../services/systemWorkerService";

export default function SystemWorkerList() {
  const [systemWorkers, setSystemWorkers] = useState([]);
  useEffect(() => {
    let systemWorkerService = new SystemWorkerService();
    systemWorkerService
      .getSystemWorkers()
      .then((result) => setSystemWorkers(result.data.data));
  }, []);
  return (
    <div>
      <Header as="h2">
        <Icon name="list alternate outline" />
        <Header.Content>System Worker List</Header.Content>
      </Header>
      <Table color="blue" key="blue">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>System Worker Name</Table.HeaderCell>
            <Table.HeaderCell>Email Address</Table.HeaderCell>
            <Table.HeaderCell>Detail</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {systemWorkers.map((systemWorker) => (
            <Table.Row key={systemWorker.id}>
              <Table.Cell>{systemWorker.firstName}</Table.Cell>
              <Table.Cell>{systemWorker.lastName}</Table.Cell>
              <Table.Cell>{systemWorker.systemWorkerName}</Table.Cell>
              <Table.Cell>{systemWorker.emailAddress}</Table.Cell>
              <Table.Cell>
                <Button>View</Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
