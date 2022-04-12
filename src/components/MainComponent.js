
import { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import Contact from'./ContactComponent';
import Header from './HeaderComponent'
import DishDetail from './DishdetailComponent';
import Footer from './FooterComponent';
import {Switch,Route,Redirect} from 'react-router-dom';
class Main extends Component {
  constructor(props) {
    super(props);

    this.state={
      dishes: DISHES,
      comments:COMMENTS,
      promotions:PROMOTIONS,
      leaders:LEADERS
    };

}

  render(){

    const HomePage = () => {
      return(
        <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
        promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
        leader={this.state.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    }
  return (

    <div>
      <Header/>
      <Switch>
        <Route path="/home" component={HomePage}/>
        <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes}/>} />
        <Route exact path="/contactus" component={Contact}/>
        <Redirect to='/home'></Redirect>
      </Switch>
      <Footer/>
    </div>
  );
}
}

export default Main;
