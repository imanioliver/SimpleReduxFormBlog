import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'

class PostsNew extends Component {

  renderField(field){
    return(
      <div className="form-group">
        <label>{field.bloop}</label>
        <input
          className="form-control"
          type="text"
            {...field.input}

        />
        {field.meta.error}
      </div>
    );
  }


  renderContentField(field){
    return(
      <div className="form-group">
        <label>{field.bloop}</label>
        <input
          className="form-control"
          type="text"
            {...field.input}

        />
        {field.meta.error}
      </div>
    );
  }


  render() {
    return (
      <form >
        <Field
          bloop="Title"
          name="title"
          component={this.renderField}
        />

        <Field
          bloop="Categories"
          name="categories"
          component={this.renderField}
        />

        <Field
          bloop="Post Content"
          name="content"
          component={this.renderContentField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

function validate(values){
  //console.log(values); -> {title: 'asas', cateories: 'sdfad', content:'asdasd'}
  const errors = {};

  //validate the inputs from 'values'
  if(!values.title || values.title.length < 3) {
    errors.title = 'Please enter a title with at least three characters!';
  }

  if (!values.categories) {
    errors.categories = 'Please enter at least one category!';
  }

  if (!values.content) {
    errors.content = 'Please enter some content!';
  }

  //if errors is empty, the form is fine to submit.
  //if errors has any properties, redux form assumes form is invalid

  return errors;
}


export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(PostsNew);
