import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import UpdateItemForm from './update-item';

class Items extends React.Component {

  render() {

    return (
      <section>
        <h2>Items...</h2>
        <>
          {
            this.props.itemsList.map( (item,idx) =>
              <div key={item._id}>
                <Card style={{ width: '18rem' }}>
                  <Card.Header>{item.name}</Card.Header>
                  <Card.Body>
                    <Card.Title>{item.description}</Card.Title>
                    <Card.Text>{item.notes}</Card.Text>
                    <UpdateItemForm item={item} handleUpdate={this.props.handleUpdate} />
                    <Button
                      style={{ margin: '20px' }}
                      className="float-left mt-3"
                      data-testid={`delete-button-${item.name}`}
                      onClick={ () => this.props.handleDelete(item._id) }
                    >Delete Item</Button>
                  </Card.Body>
                </Card>
              </div>
            )
          }
        </>
      </section>
    );
  }
}

export default Items;
