import React from "react";
import { useForm, ErrorMessage } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"
import { addArticlesStep2 } from '../../../redux/actions/articalsActions'
import { getPostsFromJP } from '../../../redux/actions/postsActions'
import {baseURL} from '../../../api'

const Step2 = props => {
  const { handleSubmit, errors, register } = useForm();
const dispatch = useDispatch();
  const { push } = useHistory();
  const { id } = useParams();

  const onSubmit = data => {
    const resultTwoSteps = Object.assign({}, article, data);
    dispatch(addArticlesStep2({...data, id}));
    baseURL.post('/articles', resultTwoSteps);
    const selectAmout = JSON.parse(localStorage.getItem("select"));
    dispatch(getPostsFromJP(selectAmout, articles))
    push("/")
  };
  const article = useSelector(state => state.articles.find(item => item.id ===id));
  const articles = useSelector(state => state.articles)
  return (
    <div className="form-container">
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
      <label className="form-control-wrapper">
        Does make ad active?:
        <input  name="active" type="checkbox" ref={register}/>
      </label>
      <input className="form-btn" type="submit" />
    </form>
    </div>

  );
};

export default Step2;
