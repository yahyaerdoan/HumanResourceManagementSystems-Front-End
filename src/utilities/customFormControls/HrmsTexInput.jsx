import { useField } from "formik";
import React from "react";
import { FormField, Label } from "semantic-ui-react";

export default function HrmsTexInput({ ...props }) {
  //console.log(props)
  const [field, meta] = useField(props);
  //console.log(field); Nesnler var mu yok mu bilgisini getiriyor.
  //console.log(meta); Hata var mı yok mu bilgisini veriyor.

  return (
    <FormField error={meta.touched && !!meta.error}>
    <input {...field} {...props} />
    {meta.touched && !!meta.error ? (
      <Label pointing basic color="red" content={meta.error}></Label>
    ) : null}
  </FormField>
  );
}
