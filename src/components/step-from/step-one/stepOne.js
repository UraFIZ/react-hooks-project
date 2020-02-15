import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux"
import { useForm } from "react-hook-form";
import _ from 'lodash';
import { useHistory, useParams } from "react-router-dom";
import {postUrl, photoUrl} from '../../../api';
import { addArticlesStep1 } from '../../../redux/actions/articalsActions'


const Step1 = props => {
  const { handleSubmit, errors, register } = useForm();
  const { push } = useHistory();
  const { id } = useParams();
  const [step1Form, setState] = useState({
    title: '',
    subtitle: '',
    body: '',
    photos: [],
  });
  const [dynamicState, setDynamicState] = useState({
    showItems: false,
    selectedPhoto: {}
  });
  const dispatch = useDispatch()
  const toggleCustomSelect = () => setDynamicState({
    showItems: !dynamicState.showItems
  })
  const onSelectItem = (data) => {
    setDynamicState({
      selectedPhoto: data
    })
  }
  const getInitialDataForForm = async () => {
    const currentPost = await postUrl.get(`/${id}`);
    const photosArr = await photoUrl.get(`?albumId=${id}`);
    const photos = photosArr.data.slice(0, 10).map(item => {
      return {
        url: item.url,
        id: item.id,
        photoTitle: item.title
      }
    })

    const {title, body} = currentPost.data;
    setState({
      ...step1Form,
      title,
      body,
      photos
    })
  }
  useEffect(()=> {
    getInitialDataForForm()
  }, [])
  
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
    <div onClick={toggleCustomSelect} className="custom-select-box">
      {
        !_.isEmpty(dynamicState.selectedPhoto) ? customSelectOption(dynamicState.selectedPhoto) : null
      }
      <span className={dynamicState.showItems ? "custom-select-arrow--up": "custom-select-arrow--down"}></span>
    </div>
    <div style={{display: dynamicState.showItems ? 'block': 'none'}}>
      {
            step1Form.photos.map(item => customSelectOption(item))
      }
    </div>
    </>
  )
  const onSubmit = data => {
    const currentPhoto = dynamicState.selectedPhoto;
    dispatch(addArticlesStep1({...data, currentPhoto, id}))
    push(`/step2/${id}`);
  };

  return (
    <div className="form-container">
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h2>Step 1</h2>
      <label className="form-control-wrapper">
        Title:
        <input className="form-control" name="title" defaultValue={step1Form.title} ref={register}/>
      </label>
      <label className="form-control-wrapper">
        Subtitle:
        <input className="form-control" name="subtitle" ref={register}/>
      </label>
      <label className="form-control-wrapper">
        body:
        <textarea className="form-control step-form-control--area " name="body" defaultValue={step1Form.body} ref={register}/>
      </label>
      <label className="form-control-wrapper">
          Select photos
          {
            renderPhotos()
          }
      </label>
      <input className="step-form-btn" type="submit" />
    </form>
    </div>

  );
};

export default Step1;
