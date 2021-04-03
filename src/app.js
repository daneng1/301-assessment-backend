import React from 'react';

import axios from 'axios';

import AddNewItem from './components/add-item.js';
import Items from './components/items.js';

const API_SERVER = 'http://localhost:3001';

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
    } catch(error) {
      console.log(error.messgae);
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
    } catch(error) {
      console.log(error.message);
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
      <div>
        <h1>Our Items</h1>
        <AddNewItem handleAddItem={this.addItem} />
        <hr />
        <Items 
        selectedItem={this.state.selectedItem}
          handleUpdate={this.updateItem} 
          handleDelete={this.deleteItem} 
          itemsList={this.state.items} />
      </div>
    );
  }
}

export default App;
