import React from "react";
import PropTypes from 'prop-types';
import { useForm, ErrorMessage } from "react-hook-form";

const Step2 = ({onSubmit}) => {
  const { handleSubmit, errors, register } = useForm();
  return (
    <div className="form-container">
      <h1 className="heading-secondary">You are almost done</h1>
    <form className="form"  onSubmit={handleSubmit(onSubmit)}>
      <h2 className="form-title">Step 2</h2>
      <label className="form-control-wrapper">
        Email:
        <input className="form-control" type="email" name="email" ref={register({ required: "This is required." })}/>
        <ErrorMessage errors={errors} name="email" as="p" />
      </label>
      <label className="form-control-wrapper">
        Date of publishing:
        <input className="form-control"  name="date" type="date" ref={register} />
      </label>
      <div className="checkbox-wrapper">
          <input className="form-checkbox" id="checkbox" name="active" type="checkbox" ref={register}/>
          <label htmlFor="checkbox" className="checkbox-label">  Does make ad active?:</label>
      </div>
  
      <input className="form-btn" type="submit" />
    </form>
    </div>

  );
};

export default Step2;

Step2.propTypes = {
  onSubmit: PropTypes.func.isRequired
}
