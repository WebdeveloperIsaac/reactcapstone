
import { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import Header from './HeaderComponent'
import DishDetail from './DishdetailComponent';
import Footer from './FooterComponent';
import {Switch,Route,Redirect} from 'react-router-dom';
class Main extends Component {
  constructor(props) {
    super(props);

    this.state={
      dishes: DISHES,
    };

}

  render(){

    const HomePage = () => {
      return(
        <Home/>
      );
    }
  return (

    <div>
      <Header/>
      <Switch>
        <Route path="/home" component={Home}/>
        <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes}/>} />
        <Redirect to='/home'></Redirect>
      </Switch>
      <Footer/>
    </div>
  );
}
}

export default Main;
