import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const Step1 = props => {
  const { handleSubmit, errors, register } = useForm();
  const { push } = useHistory();
  const onSubmit = data => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Step 1</h2>
      <label>
        Title:
        <input name="title" />
      </label>
      <label>
        Subtitle:
        <input name="subtitle" />
      </label>
      <label>
          Select photos
        <select name="photos" ref={register}>
            <option value="photo1">Photo1</option>
            <option value="female">Photo2</option>
        </select>
      </label>
      <input type="submit" />
    </form>
  );
};

export default Step1;
