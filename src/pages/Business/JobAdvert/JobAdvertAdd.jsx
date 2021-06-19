import React, { useEffect, useState } from "react";
import { Formik, useFormik } from "formik";
import {
  Button,
  Dropdown,
  Header,
  Icon,
  Input,
  Segment,
} from "semantic-ui-react";
import JobAdvertService from "../../../services/jobAdvertService";
import EmployerService from "../../../services/employerService";
import CityService from "../../../services/cityService";
import TypeOfWorkService from "../../../services/typeOfWorkService";
import TypeOfWorkplaceService from "../../../services/typeOfWorkplaceService";
import WorkingTimeService from "../../../services/workingTime";
import * as Yup from "yup";

export default function JobAdvertAdd() {
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
    cityService
      .getCities()
      .then((result) => setCities(result.data.data));
      console.log(getCities)

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

  const formik = useFormik({
    initialValues: {
      description: "",
      salaryMin: "",
      salaryMax: "",
      openPositionCount: "",
      deadline: "",
      publishedAt: "",
      isOpen: "",
      employerId: "",
      cityId: "",
      typeOfWorkId: "",
      typeOfWorkplaceId: "",
      workingTimeId: "",
      userId: 12,
    },
    validationSchema: Yup.object({
      description: Yup.string().required("Boş geçilemez!"),
      salaryMin: Yup.number().required("Boş geçilemez!"),
      salaryMax: Yup.number().required("Boş geçilemez!"),
      openPositionCount: Yup.number().required("Boş geçilemez!"),
      deadline: Yup.date().required("Boş geçilemez!"),
      publishedAt: Yup.date().required("Boş geçilemez!"),
      isOpen: Yup.boolean().required("Boş geçilemez!"),
      employerId: Yup.number().required("Boş geçilemez!"),
      cityId: Yup.number().required("Boş geçilemez!"),
      typeOfWorkId: Yup.number().required("Boş geçilemez!"),
      typeOfWorkplaceId: Yup.number().required("Boş geçilemez!"),
      workingTimeId: Yup.number().required("Boş geçilemez!"),
    }),
    onSubmit: (values) => {
      let jobAdvert = {
        description: values.description,
        salaryMin: values.salaryMin,
        salaryMax: values.salaryMax,
        openPositionCount: values.openPositionCount,
        deadline: values.deadline,
        publishedAt: values.publishedAt,
        isOpen: values.isOpen,
        employer: { userId: values.userId },
        city: { cityId: values.cityId },
        typeOfWork: { typeOfWorkId: values.typeOfWorkId },
        typeOfWorkplace: { typeOfWorkplaceId: values.typeOfWorkplaceId },
        workingTime: { workingTimeId: values.workingTimeId },
      };
      console.log(jobAdvert);
      JobAdvertService.add(jobAdvert).then((result) =>
        console.log(result.data.message)
      );
    },
  });
  return (
    <div>
      <Header as="h2">
        <Icon name="edit outline" />
        <Header.Content>Job Advert Add</Header.Content>
      </Header>
      <Segment.Group>
        <Segment color="blue" key="blue"></Segment>
        <Segment>
          <form onSubmit={formik.handleSubmit}>
            <div
              style={{
                textAlign: "left",
                fontFamily: "Arial",
                fontWeight: "bold",
              }}
            >
              <div className="divStyle">
                <label>Şehir:</label>
                <Dropdown
                  style={{
                    marginRight: "1em",
                    marginTop: "1em",
                    fontWeight: "lighter",
                  }}
                  button
                  placeholder="Şehir Seçiniz..."
                  fluid
                  search
                  selection
                  id="cityId"
                  options={getCities}
                  onChange={(event, data) =>
                    formik.setFieldValue("cityId", data.value)
                  }
                  value={formik.values.cityId}
                />
                {formik.errors.cityId && formik.touched.cityId && (
                  <p style={{ color: "red" }}>{formik.errors.cityId}</p>
                )}
              </div>
              <div className="divStyle">
                <label>İş Pozisyonu:</label>
                <Dropdown
                  style={{
                    marginRight: "1em",
                    marginTop: "1em",
                    fontWeight: "lighter",
                  }}
                  button
                  placeholder="İş Pozisyonu Seçiniz..."
                  fluid
                  search
                  selection
                  id="typeOfWorkId"
                  options={getTypeOfWorks}
                  onChange={(event, data) =>
                    formik.setFieldValue("typeOfWorkId", data.value)
                  }
                  value={formik.values.typeOfWorkId}
                />
                {formik.errors.typeOfWorkId && formik.touched.typeOfWorkId && (
                  <p style={{ color: "red" }}>{formik.errors.typeOfWorkId}</p>
                )}
              </div>
              <div className="divStyle">
                <label>İş veren:</label>
                <Dropdown
                  style={{
                    marginRight: "1em",
                    marginTop: "1em",
                    fontWeight: "lighter",
                  }}
                  button
                  placeholder="İş veren..."
                  fluid
                  search
                  selection
                  id="employerId"
                  options={getEmployers}
                  onChange={(event, data) =>
                    formik.setFieldValue("employerId", data.value)
                  }
                  value={formik.values.employerId}
                />
                {formik.errors.employerId && formik.touched.employerId && (
                  <p style={{ color: "red" }}>{formik.errors.employerId}</p>
                )}
              </div>
              <div className="divStyle">
                <label>Çalışma Tipi:</label>
                <Dropdown
                  style={{
                    marginRight: "1em",
                    marginTop: "1em",
                    fontWeight: "lighter",
                  }}
                  button
                  placeholder="Çalışma Tipini Seçiniz..."
                  fluid
                  search
                  selection
                  id="typeOfWorkplaceId"
                  options={getTypeOfWorkplaces}
                  onChange={(event, data) =>
                    formik.setFieldValue("typeOfWorkplaceId", data.value)
                  }
                  value={formik.values.typeOfWorkplaceId}
                  required
                />
                {formik.errors.typeOfWorkplaceId &&
                  formik.touched.typeOfWorkplaceId && (
                    <p style={{ color: "red" }}>
                      {formik.errors.typeOfWorkplaceId}
                    </p>
                  )}
              </div>
              <div className="divStyle">
                <label>Çalışma Zamanı Tipi:</label>
                <Dropdown
                  style={{
                    marginRight: "1em",
                    marginTop: "1em",
                    fontWeight: "lighter",
                  }}
                  button
                  placeholder="Çalışma Zamanı Tipini Seçiniz..."
                  fluid
                  search
                  selection
                  id="workTimeTypeId"
                  options={getWorkingTimes}
                  onChange={(event, data) =>
                    formik.setFieldValue("workTimeTypeId", data.value)
                  }
                  value={formik.values.workTimeTypeId}
                />
                {formik.errors.workTimeTypeId &&
                  formik.touched.workTimeTypeId && (
                    <p style={{ color: "red" }}>
                      {formik.errors.workTimeTypeId}
                    </p>
                  )}
              </div>
              <div className="divStyle">
                <label>Minimum Maaş:</label>
                <Input
                  id="salaryMin"
                  placeholder="Minimum Maaş..."
                  fluid
                  style={{ marginRight: "1em", marginTop: "1em" }}
                  onChange={formik.handleChange}
                  value={formik.values.minSalary}
                ></Input>
                {formik.errors.salaryMin && formik.touched.salaryMin && (
                  <p style={{ color: "red" }}>{formik.errors.salaryMin}</p>
                )}
              </div>
              <div className="divStyle">
                <label>Maksimum Maaş:</label>
                <Input
                  id="salaryMax"
                  placeholder="Maksimum Maaş..."
                  fluid
                  style={{ marginRight: "1em", marginTop: "1em" }}
                  onChange={formik.handleChange}
                  value={formik.values.maxSalary}
                ></Input>
                {formik.errors.salaryMax && formik.touched.salaryMax && (
                  <p style={{ color: "red" }}>{formik.errors.salaryMax}</p>
                )}
              </div>
              <div className="divStyle">
                <label>Alınacak Personel Sayısı:</label>
                <Input
                  id="openPositionCount"
                  placeholder="Alınacak Personel Sayısı..."
                  fluid
                  style={{ marginRight: "1em", marginTop: "1em" }}
                  onChange={formik.handleChange}
                  value={formik.values.openPositionCount}
                ></Input>
                {formik.errors.openPositionCount &&
                  formik.touched.openPositionCount && (
                    <p style={{ color: "red" }}>
                      {formik.errors.openPositionCount}
                    </p>
                  )}
              </div>
              <div className="divStyle">
                <label>Son Başvuru Tarihi:</label>
                <Input
                  type="date"
                  id="deadline"
                  placeholder="Son Başvuru Tarihi..."
                  fluid
                  style={{ marginRight: "1em", marginTop: "1em" }}
                  onChange={formik.handleChange}
                  value={formik.values.deadline}
                ></Input>
                {formik.errors.deadline && formik.touched.deadline && (
                  <p style={{ color: "red" }}>{formik.errors.deadline}</p>
                )}
              </div>
              <div className="divStyle">
                <label>Açıklama:</label>
                <Input
                  id="description"
                  placeholder="Açıklama..."
                  fluid
                  style={{ marginRight: "1em", marginTop: "1em" }}
                  onChange={formik.handleChange}
                  value={formik.values.description}
                ></Input>
                {formik.errors.description && formik.touched.description && (
                  <p style={{ color: "red" }}>{formik.errors.description}</p>
                )}
              </div>
            </div>
            <Button
              type="submit"
              style={{
                backgroundColor: "#780000",
                color: "white",
                marginBottom: "0.001em",
              }}
            >
              EKLE
            </Button>
          </form>
        </Segment>
      </Segment.Group>
    </div>
  );
}
