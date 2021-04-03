import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import UpdateItemForm from './update-item';
import '../app.css';

class Items extends React.Component {

  render() {

    return (
      <section>
        <h2 className="reverseText">My Items</h2>
        <Row>
          {this.props.itemsList.map( (item,idx) =>
              <div key={item._id}>
                <Card style={{ width: '18rem' }}>
                  <Card.Header>{item.name}</Card.Header>
                  <Card.Body>
                  <Card.Text>
                    {item.description}
                  </Card.Text>
                  {item.notes && 
                  <>
                  <Card.Text>
                    {item.notes}
                  </Card.Text>
                  </>
                  }
                  <UpdateItemForm item={item} handleUpdate={this.props.handleUpdate}/>
                    <Button className="float-right mt-3" variant="secondary"
                      data-testid={`delete-button-${item.name}`}
                      onClick={ () => this.props.handleDelete(item._id) }
                    >Delete Item</Button>
                </Card.Body>
                </Card>
              </div>
            )
          }
        </Row>
      </section>
    );
  }
}

export default Items;
