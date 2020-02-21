import React, {useEffect, useState} from "react";
import { bindActionCreators } from 'redux'
import {useDispatch, useSelector, connect} from "react-redux"
import { useForm, ErrorMessage } from "react-hook-form";
import _ from 'lodash';
import { useHistory, useParams } from "react-router-dom";
import { addArticlesStep1 } from '../../../redux/actions/articalsActions'
import { getInitialDataForForm } from '../../../redux/actions/postsActions'
import Spinner from '../../../containers/spinner'
import ErrorIndicator from '../../../containers/error-indicator'


const Step1 = ({getInitialDataForForm}) => {
  const { handleSubmit, errors, register } = useForm();
  const { push } = useHistory();
  const { id } = useParams();
  const dispatch = useDispatch();
  //data from the redux store
  const formError = useSelector(state => state.posts.error);
  const loading = useSelector(state => state.posts.loading);

  
  const [step1Form, setState] = useState({
    title: '',
    subtitle: '',
    body: '',
    photos: []
  });
  const [dynamicState, setDynamicState] = useState({
    showItems: false,
    selectedPhoto: {}
  });
  const toggleCustomSelect = () => setDynamicState({
    showItems: !dynamicState.showItems
  })
  const onSelectItem = (data) => {
    setDynamicState({
      selectedPhoto: data
    })
  }
  const promiseOfData = async() => {
    const data  =  await getInitialDataForForm();
    const {photos,title,body} =  data;
    setState({
      ...step1Form,
      photos,
      title,
      body
    })
  }
  
  useEffect(()=> {
    promiseOfData()
  },[])
  
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
    <div className="custom-select-wrapper" style={{display: dynamicState.showItems ? 'block': 'none'}}>
      {
            step1Form.photos.map(item => customSelectOption(item))
      }
    </div>
    </>
  )
  const onSubmit = data => {
    const currentPhoto = dynamicState.selectedPhoto;
    dispatch(addArticlesStep1({...data, currentPhoto, id}))
    // push({
    //   pathname: `/step2/${id}`,
    //   state: {...data, currentPhoto, id}
    // });
    push(`/step2/${id}`);
  };
  const getBack = () => {
    push("/")
  }

  const onStepForm = () => (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="form-title">Step 1</h2>
      <label className="form-control-wrapper">
        Title:
        <input className="form-control" name="title" defaultValue={step1Form.title} ref={register({ required: "This is required." })}/>
        <ErrorMessage errors={errors} name="title" as="p" />
      </label>
      <label className="form-control-wrapper">
        Subtitle:
        <input className="form-control" name="subtitle" ref={register({ required: "This is required." })}/>
        <ErrorMessage errors={errors} name="subtitle" as="p" />
      </label>
      <label className="form-control-wrapper">
        body:
        <textarea className="form-control form-control--area " name="body" defaultValue={step1Form.body} ref={register({ required: "This is required." })}/>
        <ErrorMessage errors={errors} name="body" as="p" />
      </label>
      <label className="form-control-wrapper">
          Select photos
          {
            renderPhotos()
          }
      </label>
      <input className="form-btn" type="submit" />
    </form>
  )
  const hasFormData = !(loading || formError);
  const errorMessage = formError ? <ErrorIndicator error={formError}/> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = hasFormData ? onStepForm() : null
  return ( 
<     div className="form-container">
      <h1 className="heading-secondary">First step to amazing article</h1>
        {errorMessage}
        {spinner}
        {content}
        <div className="form-btn-back" onClick={getBack}>Get back</div>
     </div>
  );
};
const mapDispatchToProps = (dispatch, props) => {
  const {match} = props;
  const {params} = match;
  return bindActionCreators({
    getInitialDataForForm: getInitialDataForForm(params.id)
  }, dispatch)
}
export default connect(null, mapDispatchToProps)(Step1);
