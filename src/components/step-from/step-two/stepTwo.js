import React from "react";
import { useForm } from "react-hook-form";
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
    dispatch(addArticlesStep2({...data, id}));
    baseURL.post('/articles', article);
    const selectAmout = JSON.parse(localStorage.getItem("select"));
    dispatch(getPostsFromJP(selectAmout, articles))
    push("/")
  };
  const article = useSelector(state => state.articles.find(item => item.id ===id));
  const articles = useSelector(state => state.articles)
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Step 2</h2>
      <label>
        is active?:
        <input name="active" type="checkbox" ref={register}/>
      </label>
      <label>
        Date of publishing:
        <input name="date" type="date" ref={register} />
      </label>
      <input type="submit" />
    </form>
  );
};

export default Step2;
