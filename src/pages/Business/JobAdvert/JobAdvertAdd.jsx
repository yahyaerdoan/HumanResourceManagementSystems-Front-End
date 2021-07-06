import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import {
  Button,
  Card,
  Dropdown,
  Header,
  Icon,
  Input,
  Segment,
  TextArea,
  Form,
  Grid,
} from "semantic-ui-react";
import JobAdvertService from "../../../services/jobAdvertService";
import EmployerService from "../../../services/employerService";
import CityService from "../../../services/cityService";
import TypeOfWorkService from "../../../services/typeOfWorkService";
import TypeOfWorkplaceService from "../../../services/typeOfWorkplaceService";
import WorkingTimeService from "../../../services/workingTime";

export default function JobAdvertAdd() {

  let jobAdvertService = new JobAdvertService();
  const JobAdvertAddSchema = Yup.object().shape({
    description: Yup.string().required("Boş geçilemez!"),
    salaryMin: Yup.number()
      .min(0, "0'dan az olamaz")
      .required("Boş geçilemez!"),
    salaryMax: Yup.number()
      .min(0, "0'dan az olamaz")
      .required("Boş geçilemez!"),
    openPositionCount: Yup.number()
      .required("Boş geçilemez!")
      .min(1, "Posizyon sayısı 1 den küçük olamaz"),
    deadline: Yup.date().required("Boş geçilemez!"),
    publishedAt: Yup.date().required("Boş geçilemez!"),
    //isOpen: Yup.boolean().required("Boş geçilemez!"),
    //employerId: Yup.string().required("Boş geçilemez!"),
    cityId: Yup.string().required("Boş geçilemez!"),
    typeOfWorkId: Yup.string().required("Boş geçilemez!"),
    typeOfWorkplaceId: Yup.string().required("Boş geçilemez!"),
    workingTimeId: Yup.string().required("Boş geçilemez!"),
  });

  const formik = useFormik({
    initialValues: {
      description: "",
      salaryMin: "",
      salaryMax: "",
      openPositionCount: "",
      deadline: "",
      publishedAt: "",
      //isOpen: "",
      employerId: "",
      cityId: "",
      typeOfWorkId: "",
      typeOfWorkplaceId: "",
      workingTimeId: "",
    },
    validationSchema: JobAdvertAddSchema,
    onSubmit: (values) => {  
       values.employerId= 11
        jobAdvertService.add(values)
        .then((result) => console.log(result.data.message))
      alert("İş ilanı eklendi, personelin onayı ardından listelenecektir");
      console.log(values);
    },
  });

  const [jobAdverts, setJobAdverts] = useState([]);
  const [employers, setEmployers] = useState([]);
  const [cities, setCities] = useState([]);
  const [typeOfWorks, setTypeOfWorks] = useState([]);
  const [typeOfWorkplaces, setTypeOfWorkplaces] = useState([]);
  const [workingTimes, setWorkingTimes] = useState([]);

  useEffect(() => {
    let jobAdvertService = new JobAdvertService();
    jobAdvertService
      .getJobAdverts()
      .then((result) => setJobAdverts(result.data.data));

    let employerService = new EmployerService();
    employerService
      .getEmployers()
      .then((result) => setEmployers(result.data.data));

    let cityService = new CityService();
    cityService.getCities().then((result) => setCities(result.data.data));
    console.log(getCities);

    let typeOfWorkService = new TypeOfWorkService();
    typeOfWorkService
      .getTypeOfWorks()
      .then((result) => setTypeOfWorks(result.data.data));

    let typeOfWorkplaceService = new TypeOfWorkplaceService();
    typeOfWorkplaceService
      .getTypeOfWorkplaces()
      .then((result) => setTypeOfWorkplaces(result.data.data));

    let workingTimeService = new WorkingTimeService();
    workingTimeService
      .getWorkingTimes()
      .then((result) => setWorkingTimes(result.data.data));
  }, []);

  const getJobAdverts = jobAdverts.map((jobAdvert, index) => ({
    key: index,
    text: jobAdvert.name,
    value: jobAdvert.id,
  }));
  const getEmployers = employers.map((employer, index) => ({
    key: index,
    text: employer.companyName,
    value: employer.id,
  }));
  const getCities = cities.map((city, index) => ({
    key: index,
    text: city.name,
    value: city.id,
  }));
  const getTypeOfWorks = typeOfWorks.map((typeOfWork, index) => ({
    key: index,
    text: typeOfWork.title,
    value: typeOfWork.id,
  }));
  const getTypeOfWorkplaces = typeOfWorkplaces.map(
    (typeOfWorkplace, index) => ({
      key: index,
      text: typeOfWorkplace.typeOfWorkplace,
      value: typeOfWorkplace.id,
    })
  );
  const getWorkingTimes = workingTimes.map((workingTime, index) => ({
    key: index,
    text: workingTime.workingTime,
    value: workingTime.id,
  }));

  const handleChangeSemantic = (value, fieldName) => {
    formik.setFieldValue(fieldName, value);
  };

  return (
    <div>
      <Header as="h2">
        <Icon name="edit outline" />
        <Header.Content>Job Advert Add</Header.Content>
      </Header>
      <Segment.Group>
        <Segment color="blue" key="blue"></Segment>
        <Card fluid>
          <Card.Content>
            <Form onSubmit={formik.handleSubmit}>
            <Form.Field>
                <label >İş Pozisyonu</label>
                <Dropdown
                  clearable
                  item
                  placeholder="İş pozisyonu"
                  search
                  selection
                  onChange={(event, data) =>
                    handleChangeSemantic(data.value, "typeOfWorkId")
                  }
                  onBlur={formik.onBlur}
                  id="typeOfWorkId"
                  value={formik.values.typeOfWorkId}
                  options={getTypeOfWorks}
                />
                {formik.errors.typeOfWorkId && formik.touched.typeOfWorkId && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.typeOfWorkId}
                  </div>
                )}
              </Form.Field>
              <Form.Field>
                <label>Şehir</label>
                <Dropdown
                  clearable
                  item
                  placeholder="Şehir"
                  search
                  selection
                  onChange={(event, data) =>
                    handleChangeSemantic(data.value, "cityId")
                  }
                  onBlur={formik.onBlur}
                  id="cityId"
                  value={formik.values.cityId}
                  options={getCities}
                />
                {formik.errors.cityId && formik.touched.cityId && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.cityId}
                  </div>
                )}
                 </Form.Field>
                 <Form.Field>
                <label>İş yeri adı</label>
                <Dropdown
                  clearable
                  item
                  placeholder="iş yeri adı"
                  search
                  selection
                  onChange={(event, data) =>
                    handleChangeSemantic(data.value, "employerId")
                  }
                  onBlur={formik.onBlur}
                  id="employerId"
                  value={formik.values.employerId}
                  options={getEmployers}
                />
                {formik.errors.employerId && formik.touched.employerId && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.employerId}
                  </div>
                )}                
              </Form.Field>

              <Form.Field>
                <label>Çalışma yeri</label>
                <Dropdown
                  clearable
                  item
                  placeholder="Çalışma yeri"
                  search
                  selection
                  onChange={(event, data) =>
                    handleChangeSemantic(data.value, "typeOfWorkplaceId")
                  }
                  onBlur={formik.onBlur}
                  id="typeOfWorkplaceId"
                  value={formik.values.typeOfWorkplaceId}
                  options={getTypeOfWorkplaces}
                />
                {formik.errors.typeOfWorkplaceId &&
                  formik.touched.typeOfWorkplaceId && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.typeOfWorkplaceId}
                    </div>
                  )}
              </Form.Field>

              <Form.Field>
                <label>Çalışma Süresi</label>
                <Dropdown
                  clearable
                  item
                  placeholder="Çalışma Süresi"
                  search
                  selection
                  onChange={(event, data) =>
                    handleChangeSemantic(data.value, "workingTimeId")
                  }
                  onBlur={formik.onBlur}
                  id="workingTimeId"
                  value={formik.values.workingTimeId}
                  options={getWorkingTimes}
                />
                {formik.errors.workingTimeId &&
                  formik.touched.workingTimeId && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.workingTimeId}
                    </div>
                  )}
              </Form.Field>
              <Form.Field>
                <Grid stackable>
                  <Grid.Column width={8}>
                    <label style={{ fontWeight: "bold" }}>
                      Maaş aralığı MİNİMUM
                    </label>
                    <Input
                      style={{ width: "100%" }}
                      type="number"
                      placeholder="Maaş aralığı MİNİMUM"
                      value={formik.values.salaryMin}
                      name="salaryMin"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    ></Input>
                    {formik.errors.salaryMin && formik.touched.salaryMin && (
                      <div className={"ui pointing red basic label"}>
                        {formik.errors.salaryMin}
                      </div>
                    )}
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <label style={{ fontWeight: "bold" }}>
                      Maaş aralığı MAKSİMUM
                    </label>
                    <Input
                      style={{ width: "100%" }}
                      type="number"
                      placeholder="Maaş aralığı MAKSİMUM"
                      value={formik.values.salaryMax}
                      name="salaryMax"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    ></Input>
                    {formik.errors.salaryMax && formik.touched.salaryMax && (
                      <div className={"ui pointing red basic label"}>
                        {formik.errors.salaryMax}
                      </div>
                    )}
                  </Grid.Column>
                </Grid>
              </Form.Field>

              <Form.Field>
                <Grid stackable>
                  <Grid.Column width={8}>
                    <label style={{ fontWeight: "bold" }}>
                      Açık Posisyon sayısı
                    </label>
                    <Input
                      style={{ width: "100%" }}
                      id="openPositionCount"
                      name="openPositionCount"
                      error={Boolean(formik.errors.openPositionCount)}
                      onChange={formik.handleChange}
                      value={formik.values.openPositionCount}
                      onBlur={formik.handleBlur}
                      type="number"
                      placeholder="Açık Posisyon sayısı"
                    />
                    {formik.errors.openPositionCount &&
                      formik.touched.openPositionCount && (
                        <div className={"ui pointing red basic label"}>
                          {formik.errors.openPositionCount}
                        </div>
                      )}
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <label style={{ fontWeight: "bold" }}>
                      Son başvuru tarihi
                    </label>
                    <Input
                      style={{ width: "100%" }}
                      type="date"
                      error={Boolean(formik.errors.deadline)}
                      onChange={(event, data) =>
                        handleChangeSemantic(data.value, "deadline")
                      }
                      value={formik.values.deadline}
                      onBlur={formik.handleBlur}
                      name="deadline"
                      placeholder="Son başvuru tarihi"
                    />
                    {formik.errors.deadline && formik.touched.deadline && (
                      <div className={"ui pointing red basic label"}>
                        {formik.errors.deadline}
                      </div>
                    )}
                  </Grid.Column>

                  <Grid.Column width={8}>
                    <label style={{ fontWeight: "bold" }}>
                      Yayınlanma tarihi
                    </label>
                    <Input
                      style={{ width: "100%" }}
                      type="date"
                      error={Boolean(formik.errors.publishedAt)}
                      onChange={(event, data) =>
                        handleChangeSemantic(data.value, "publishedAt")
                      }
                      value={formik.values.publishedAt}
                      onBlur={formik.handleBlur}
                      name="publishedAt"
                      placeholder="yayınlanma tarihi"
                    />
                    {formik.errors.publishedAt && formik.touched.publishedAt && (
                      <div className={"ui pointing red basic label"}>
                        {formik.errors.publishedAt}
                      </div>
                    )}
                  </Grid.Column>
                </Grid>
              </Form.Field>

              <Form.Field>
                <label>Açıklama</label>
                <TextArea
                  placeholder="Açıklama"
                  style={{ minHeight: 100 }}
                  error={Boolean(formik.errors.description).toString()}
                  value={formik.values.description}
                  name="description"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.description && formik.touched.description && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.description}
                  </div>
                )}
              </Form.Field>
              <Button
                content="Ekle"
                labelPosition="right"
                icon="add"
                positive
                type="submit"
                style={{ marginLeft: "20px" }}
              />
            </Form>
          </Card.Content>
        </Card>
      </Segment.Group>
    </div>
  );
}
