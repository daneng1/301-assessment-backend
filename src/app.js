import React from 'react';
import axios from 'axios';
import AddNewItem from './components/add-item.js';
import Items from './components/items.js';
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

const API_SERVER = 'https://git.heroku.com/m301-assessment-api.git';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      selectedItem: {}
    }
  }

  addItem = async (item) => {
    try {
      console.log(item);
      await axios.post(`${API_SERVER}/items`, { name: item.name, description: item.description });
      this.getItems();
    } catch(err) {
      console.log(err.messgae);
    }
  }

  deleteItem = async (id) => {
    await axios.delete(`${API_SERVER}/items/${id}`);
    this.getItems();
  }

  updateItem = async (item) => {
    try {
      await axios.put(`${API_SERVER}/items/${item._id}`, item);
      this.getItems();
    } catch(err) {
      console.log(err.message);
    }
  }

  getItems = async () => {
    try{
      const response = await axios.get(`${API_SERVER}/items`);
      const items = response.data;
      console.log('response', response);
      this.setState({items});
    } catch(err){
      console.log(err.message);
    }
  }

  async componentDidMount() {
    await this.getItems();
  }

  render() {
    return (
      <>
        <Container>
          <div>
            <h1 className="header">Our Items</h1>
            <AddNewItem handleAddItem={this.addItem} />
            <hr />
            {this.state.items.length > 0 &&
            <Items         
              handleUpdate={this.updateItem} 
              handleDelete={this.deleteItem} 
              itemsList={this.state.items}
              selectedItem={this.state.selectedItem}
            />
            }
          </div>
        </Container>
      </>
    );
  }
}

export default App;
