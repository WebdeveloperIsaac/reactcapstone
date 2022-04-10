
import { Component } from 'react';
import { Navbar, NavbarBrand  } from 'reactstrap';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import DishDetail from './DishdetailComponent';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state={
      dishes: DISHES,
      selectedDish: null
    };
  }
  onDishSelect(dishId){

    this.setState({
        selectedDish: dishId
    });

}

  render(){
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Isaac Restuarant</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)}></Menu>
      <DishDetail dish={this.state.dishes.filter((dish)=> dish.id===this.state.selectedDish)[0]}></DishDetail>
    </div>
  );
}
}

export default Main;
