import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'

class PostsNew extends Component {

  renderField(field){

    const { meta: { touched, error } } = field;  //es6 destructuring: field.meta.touched and field.meta.error

    const className= `form-group ${ touched && error ? 'has-danger' : ''}` //ternary, if there's an error and it's been touched, show the box in red

    return(
      <div className={className}>
        <label>{field.bloop}</label>
        <input
          className="form-control"
          type="text"
            {...field.input}

        />
        <div className="text-help" style={{color: "red"}}>{ touched ? error : ''}</div>
      </div>
    );
  }


  renderContentField(field){

    const { meta: { touched, error } } = field;  //es6 destructuring: field.meta.touched and field.meta.error

    const className= `form-group ${ touched && error ? 'has-danger' : ''}` //ternary, if there's an error and it's been touched, show the box in red

    return(
      <div className={className}>
        <label>{field.bloop}</label>
        <input
          className="form-control"
          type="text"
            {...field.input}

        />
        <div className="text-help" style={{color: "red"}}>{field.meta.touched ? field.meta.error : ''}</div>
      </div>
    );
  }

  formSubmit(values){
    console.log(values);
  }

  render() {

    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.formSubmit.bind(this))}>
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
