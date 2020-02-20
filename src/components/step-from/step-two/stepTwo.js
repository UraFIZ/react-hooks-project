import React, {useEffect} from "react";
import { bindActionCreators } from 'redux'
import { useForm, ErrorMessage } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";
import {useDispatch, useSelector, connect} from "react-redux"
import { addArticlesStep2, catchErrorAction } from '../../../redux/actions/articalsActions'
import {  changeBtnStatuses } from '../../../redux/actions/postsActions'
import {baseURL} from '../../../api'

const Step2 = props => {
  const { handleSubmit, errors, register } = useForm();
const dispatch = useDispatch();
  const { push } = useHistory();
  const { id } = useParams();



  const onSubmit = data => {
    const resultTwoSteps = Object.assign({}, article, data);
    dispatch(addArticlesStep2({...data, id}));
    try {
      baseURL.post('/articles', resultTwoSteps);
      props.changeBtnStatuses();
    } catch (error) {
      dispatch(catchErrorAction(error.message))
    }
 
    push("/")
  };
  const article = useSelector(state => state.articles.articles.find(item => item.id ===id));
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
const mapDispatchToProps = (dispatch, props) => {
  const {match} = props;
  const {params} = match;
  return bindActionCreators({
      changeBtnStatuses: changeBtnStatuses(params.id)
  }, dispatch)
}
export default connect(null, mapDispatchToProps)(Step2);
