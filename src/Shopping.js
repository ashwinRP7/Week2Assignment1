import React from "react";
import './Shopping.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
  import Navbar from './Navbar';
  import Seller from './Seller';
  import Product from './Product';

  class Shopping extends React.Component{
    constructor(props){
        super(props);
        this.state={
            cartItem:[]
        }
    }

    addToCart(newItem){
        this.setState({
            cartItem:[...this.state.cartItem,newItem]
        })
        
    }

    removeFromCart(ind){
        this.setState({
            cartItem:[...this.state.cartItem].filter((item)=> item.id!=ind.i)
        });
        //console.log(ind);
    }
    render(){
        return(
            <Router>
                <div>
                    <Navbar></Navbar>
                    <Switch>
                        <Route path='/' exact>
                            <Seller></Seller>
                        </Route>
                        <Route path='/seller/:sid' children={<Product obj={{array:this.state.cartItem,addToCart:this.addToCart.bind(this),removeFromCart:this.removeFromCart.bind(this)}}/>}>
                            
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
  }

  export default Shopping;