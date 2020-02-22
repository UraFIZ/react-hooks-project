import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { useSelector, connect, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { baseURL } from '../../api';
import { addArticleFromForm, catchErrorAction } from '../../redux/actions/articalsActions';
import { getInitialDataForForm, changeBtnStatuses } from '../../redux/actions/postsActions';
import StepOne from './step-one';
import StepTwo from './step-two';
import Spinner from '../../containers/spinner';
import ErrorIndicator from '../../containers/error-indicator';



const StepForm = ({ getInitialDataForForm, changeBtnStatuses, match }) => {
  const { push } = useHistory();
  const { params } = match;
  const id = Number(params.id);

  const dispatch = useDispatch();

  const formError = useSelector(state => state.posts.error);
  const loading = useSelector(state => state.posts.loading);
 
  const [stepForm, setState] = useState({
    title: '',
    subtitle: '',
    body: '',
    photos: [],
  });
  const [step, setStep] = useState(1);
  const [customSelectState, setCustomSelectState] = useState({
    showItems: false,
    selectedPhoto: {}
  });

  const toggleCustomSelect = () => setCustomSelectState({
    showItems: !customSelectState.showItems
  });

  const onSelectItem = (data) => {
    setCustomSelectState({
      selectedPhoto: data
    })
  };

  const promiseOfData = async () => {
    const data = await getInitialDataForForm();
    const { photos, title, body } = data;
    setState({
      ...stepForm,
      photos,
      title,
      body
    })
  };

  useEffect(() => {
    promiseOfData()
  }, [])

  const onSubmit = data => {
    if (step === 1) {
      setStep({
        step: step + 1
      })
      const { title, subtitle, body } = data;
      setState({
        ...stepForm, title, subtitle, body
      })
    } else {
      const { email, date, active } = data;
      const resultTwoSteps = {
        id,
        title: stepForm.title,
        subtitle: stepForm.subtitle,
        body: stepForm.body,
        currentPhoto: customSelectState.selectedPhoto,
        email,
        date,
        active
      };
      dispatch(addArticleFromForm(resultTwoSteps));
      try {
        baseURL.post('/articles', resultTwoSteps);
        changeBtnStatuses();
      } catch (error) {
        dispatch(catchErrorAction(error.message))
      }
      push("/")
    }
  };
  
  const getBack = () => {
    push("/")
  };

  const hasFormData = !(loading || formError);
  const errorMessage = formError ? <ErrorIndicator error={formError} /> : null;
  const spinner = loading ? <Spinner /> : null;
  const contentFirstStep = hasFormData && step === 1 ? <StepOne onSubmit={onSubmit} onSelectItem={onSelectItem} state={stepForm} toggleCustomSelect={toggleCustomSelect} customSelectState={customSelectState} /> : hasFormData ? <StepTwo onSubmit={onSubmit} /> : null;
  return (
    <div className="step-container">
      <div className="step-wrapper">
    <div className="step-item-wrapper">
      <div className={step === 1 ? "step-item step-item--active" : "step-item"}>1</div>
      <div className={step !== 1 ? "step-item step-item--active" : "step-item"}>2</div>
      <div className="step-item">Result</div>
    </div>
      {errorMessage}
      {spinner}
      {contentFirstStep}
      <div className="form-btn-back" onClick={getBack}>Get back</div>
    </div>
    </div>
  );
}
const mapDispatchToProps = (dispatch, props) => {
  const { match } = props;
  const { params } = match;
  return bindActionCreators({
    getInitialDataForForm: getInitialDataForForm(Number(params.id)),
    changeBtnStatuses: changeBtnStatuses(Number(params.id))
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(StepForm)

StepForm.propTypes = {
  getInitialDataForForm: PropTypes.func.isRequired,
  changeBtnStatuses: PropTypes.func.isRequired,
  match: PropTypes.object
}