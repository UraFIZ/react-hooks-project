import React from "react";
import { useForm, ErrorMessage } from "react-hook-form";
import _ from 'lodash';


const Step1 = ({onSubmit,onSelectItem, state, toggleCustomSelect, customSelectState}) => {
  
  const { handleSubmit, errors, register } = useForm();
  
  const customSelectOption = (item) => (
    <div onClick={() => onSelectItem(item)} key={item.id} className="custom-select" data={item.id}>
    <div className="custom-select-leftPart">
       <img className="custom-select-img" src={item.url} alt="this is something awesome"></img>
    </div>
    <div className="custom-select-rightPart">
        <div>{item.photoTitle}</div>
    </div>
  </div>
  )
  const renderPhotos = () => (
    <>
    <div onClick={() => toggleCustomSelect()} className="custom-select-box">
      {
        !_.isEmpty(customSelectState.selectedPhoto) ? customSelectOption(customSelectState.selectedPhoto) : null
      }
      <span className={customSelectState.showItems ? "custom-select-arrow--up": "custom-select-arrow--down"}></span>
    </div>
    <div className="custom-select-wrapper" style={{display: customSelectState.showItems ? 'block': 'none'}}>
      {
            state.photos.map(item => customSelectOption(item))
      }
    </div>
    </>
  )
   return (
    <div className="form-container">
        <h1 className="heading-secondary">First step to amazing article</h1>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="form-title">Step 1</h2>
      <label className="form-control-wrapper">
        Title:
        <input className="form-control" name="title" defaultValue={state.title} ref={register({ required: "This is required." })}/>
        <ErrorMessage errors={errors} name="title" as="p" />
      </label>
      <label className="form-control-wrapper">
        Subtitle:
        <input className="form-control" name="subtitle" ref={register({ required: "This is required." })}/>
        <ErrorMessage errors={errors} name="subtitle" as="p" />
      </label>
      <label className="form-control-wrapper">
        body:
        <textarea className="form-control form-control--area " name="body" defaultValue={state.body} ref={register({ required: "This is required." })}/>
        <ErrorMessage errors={errors} name="body" as="p" />
      </label>
      <label className="form-control-wrapper">
          Select photos
          {
            renderPhotos()
          }
      </label>
      <input className="form-btn" type="submit" value="Next step"/>
    </form>
    </div>
    )

};

export default Step1;
