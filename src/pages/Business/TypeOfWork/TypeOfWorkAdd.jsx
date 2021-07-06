import {Form, Formik } from "formik";
import React from "react";
import {
  Button,
  Card,
  CardContent, 
  Header,
  Icon,  
  Segment,
} from "semantic-ui-react";
import * as Yup from "yup";
import HrmsTexInput from "../../../utilities/customFormControls/HrmsTexInput";
import TypeOfWorkService from "../../../services/typeOfWorkService";
import swal from "sweetalert";

export default function TypeOfWorkAdd() {

  let typeOfWorkService = new TypeOfWorkService()

  const TypeOfWorkSchema = Yup.object({
    title: Yup.string().required("Başlık alanı boş bırakılamaz!"),
    description: Yup.string().required("Açıklama alanı boş bırakılamaz!"),
  });
  
  const initialValues = { title: "", description: "" };

  
  
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
              validationSchema={TypeOfWorkSchema}
              onSubmit={(values) => {
                typeOfWorkService.add(values).then((result)=> console.log(result.data.message));
                swal("Başarılı!", "İş ilanı eklendi!", "success");
              }}
            >
              <Form className="ui form">
                <label><b>Title</b></label>
                <HrmsTexInput name="title" placeholder="title"></HrmsTexInput>
                <label><b>Description</b></label>
                <HrmsTexInput name="description" placeholder="description"></HrmsTexInput>
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
