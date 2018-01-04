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
      </div>
    );
  }


  render() {
    return (
      <form>
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
      </form>
    );
  }
}

function validate(){
  //console.log(values); -> {title: 'asas', cateories: 'sdfad', content:'asdasd'}
  const errors = {};

  //validate the inputs from 'values'
  if(!values.title) {
    errors.title = 'Please enter a title!';
  }

  //if errors is empty, the form is fine to submit.
  //if errors has any properties, redux form assumes form is invalid

  return errors;
}


export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(PostsNew);
