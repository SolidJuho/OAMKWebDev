import React from "react";
import Title from './components/Title';
import ShoppingList from './components/ShoppingList';
import styles from './App.module.css';
import './App.css';
import AddButtons from "./components/AddButtons";

/* A ES6 class style stateful component for the shopping list application */
class App extends React.Component {
  constructor(props)
  {
    /* You should call super(props) before any other statement. 
       Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
    */
    super(props);

    this.state = {
      items: [
        { id: 1, value: 'Milk', qty: 5, unit: 'ltr' },
        { id: 2, value: 'Bananas', qty: 6, unit: 'pcs' },
        { id: 3, value: 'Bread', qty: 3, unit: 'x' },
        { id: 4, value: 'Eggs', qty: 16, unit: 'x' }
      ]
    };

  }

  addNewItem = (pr) => {
    var ranQty = 1+Math.floor(Math.random()*20);
    var newItems = [...this.state.items];
    console.log(newItems)
    var exists;
    newItems.forEach(element => {
      if(element.value === pr.value){
        console.log("Found!")
        exists = true;
      }
    });
    console.log(exists);
    if(exists){
      var index = newItems.findIndex(newItems => newItems.value=== pr.value);
      newItems[index].qty +=  ranQty;
    }else{
      console.log("no contain")
      newItems.push({
        id: newItems.length+1,
        value: pr.value,
        qty: ranQty,
        unit: pr.unit
  
      })
    }
    this.setState({items: newItems})
  }



  render()
  {
    const { applicationDescription, applicationName } = this.props;
    return <div className={ styles.shoppingList }>
      <Title 
        applicationDescription={ applicationDescription }
        applicationName={ applicationName }
      />
      <ShoppingList items={ this.state.items } />
      <AddButtons react={this}/>
    </div>
  }
}

export default App;