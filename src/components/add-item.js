import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button} from 'react-bootstrap';
import '../app.css';

class AddNewItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formData: {}
    };
  }

  handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const formData = this.state.formData;
    formData[field] = value;
    this.setState({formData});
    // console.log('formData', formData);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAddItem(this.state.formData)
    // console.log('in handleSubmit', this.state.formData);
  }

  render() {

    return (
      <Form data-testid="add-form" onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Label className="reverseText">Item</Form.Label>
          <Form.Control type="text" placeholder="Name" data-testid="add-form-name" name="name" onChange={this.handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label className="reverseText">Description</Form.Label>
          <Form.Control type="text" placeholder="Description" data-testid="add-form-description" name="description" onChange={this.handleChange} />
        </Form.Group>
        <Button variant="secondary" type="submit">
          Add Item
        </Button>
      </Form>
    );
  }
}

export default AddNewItem;
