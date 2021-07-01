import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import {
  Button,
  Card,
  CardContent,
  FormField,
  Header,
  Icon,
  Label,
  Segment,
} from "semantic-ui-react";
import * as Yup from "yup";
import HrmsTexInput from "../../../utilities/customFormControls/HrmsTexInput";

export default function TypeOfWorkAdd() {
  const initialValues = { title: "", description: "" };
  const schema = Yup.object({
    title: Yup.string().required("Başlık alanı boş bırakılamaz!"),
    description: Yup.string().required("Açıklama alanı boş bırakılamaz!"),
  });
  return (
    <div>
      <Header as="h2">
        <Icon name="edit outline" />
        <Header.Content>Type Of Work Add</Header.Content>
      </Header>
      <Segment.Group>
        <Segment color="blue" key="blue"></Segment>
        <Card fluid>
          <CardContent>
            <Formik
              initialValues={initialValues}
              validationSchema={schema}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              <Form className="ui form">
                  <HrmsTexInput></HrmsTexInput>
                <FormField>
                  <label>Title</label>
                  <Field name="title" placeholder="title"></Field>
                  <ErrorMessage
                    name="title"
                    render={(error) => (
                      <Label pointing basic color="red" content={error}></Label>
                    )}
                  ></ErrorMessage>
                </FormField>
                <FormField>
                  <label>Description</label>
                  <Field name="description" placeholder="description"></Field>
                  <ErrorMessage
                    name="description"
                    render={(error) => (
                      <Label pointing basic color="red" content={error}></Label>
                    )}
                  ></ErrorMessage>
                </FormField>
                <Button color="green" type="submit">
                  Ekle
                </Button>
              </Form>
            </Formik>
          </CardContent>
        </Card>
      </Segment.Group>
    </div>
  );
}
