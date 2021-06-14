import React from "react";
import { useState, useEffect } from "react";
import { Header, Icon, Table } from "semantic-ui-react";
import TypeOfWorkService from "../../../services/typeOfWorkService";

export default function TypeOfWorkList() {
  const [typeOfWorks, setTypeOfWorks] = useState([]);
  useEffect(() => {
    let typeOfWorkService = new TypeOfWorkService();
    typeOfWorkService
      .getTypeOfWorks()
      .then((result) => setTypeOfWorks(result.data.data));
  }, []);

  return (
    <div>
      <Header as="h2">
        <Icon name="list alternate outline" />
        <Header.Content>Type Of Work List</Header.Content>
      </Header>
      <Table color="blue" key="blue">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Work Title</Table.HeaderCell>
            <Table.HeaderCell>Work Description</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {typeOfWorks.map((work) => (
            <Table.Row key={work.id}>
              <Table.Cell>{work.title}</Table.Cell>
              <Table.Cell>{work.description}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
