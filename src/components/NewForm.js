import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


const NewForm = (props) => {

  const [date1, setDate1] = useState();

  function handleDate(e){
      setDate1(e.target.value);
      console.log(date1);
  }

  function handleSubmit(e){
      e.preventDefault();
      props.setDate(date1);
      console.log(props.date);
  }

  return (
    <Form inline>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="exampleEmail" className="mr-sm-2">DATE:</Label>
        <Input onChange =  {(e) => {handleDate(e)}} id = 'myDate' type = 'text' placeholder = "YYYY-MM-DD" />
        <button onClick = {(e) => {handleSubmit(e)}}>Submit</button>
      </FormGroup>
    </Form>
  )
}

export default NewForm;