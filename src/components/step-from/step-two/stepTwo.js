import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const Step2 = props => {
  const { handleSubmit } = useForm();
  const { push } = useHistory();
  const onSubmit = data => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Step 2</h2>
      <label>
        is active?:
        <input name="active" type="checkbox" />
      </label>
      <label>
        Date of publishing:
        <input name="date" type="date" />
      </label>
      <input type="submit" />
    </form>
  );
};

export default Step2;
