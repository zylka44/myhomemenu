import React, { Component } from 'react';
import dishes from '../dishes';
import Banner from '../components/Banner';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import Footer from '../components/Footer';
import SearchBox from '../components/SearchBox';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            dishes: dishes,
            dishSearchField: '',
            mealSearchField: '',
            ingredientsSearchField: ''
        };
        window.onscroll = () => this.onScrollFunction();
    }

    onScrollFunction() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementById("banner").style.height = "50vh"
          } else {
            document.getElementById("banner").style.height = "100vh"
          }
    }

    onSearchDish = (event) => {
        this.setState({ dishSearchField: event.target.value});
    }

    onSearchMeal = (event) => {
        this.setState({ mealSearchField: event.target.value});
    }

    onSearchIngredients = (event) => {
        this.setState({ ingredientsSearchField: event.target.value});
    }

    render() {
        const sDish = this.state.dishSearchField.toLowerCase();
        const sMeal = this.state.mealSearchField.toLowerCase();
        const sIngs = this.state.ingredientsSearchField.split(' ').map(ing => ing.toLowerCase());
        const filterDishes = this.state.dishes.filter(dish => {
            return dish.name.toLowerCase().includes(sDish)
        }).filter(dish => {
            return dish.meal.toLowerCase().includes(sMeal)
        }).filter(dish => {
            return sIngs.every(ingS => dish.ingredients.some(ing => ing.includes(ingS)))
        });
        
        return (
            <div className='tc'>
                <Banner />
                <Scroll>
                    <CardList dinners={filterDishes} /> 
                </Scroll>
                <div className='flex justify-center'>
                    <SearchBox searchChange={this.onSearchDish} content={'search a dish'} />
                    <SearchBox searchChange={this.onSearchIngredients} content={'ingedients you have'} />
                    <SearchBox searchChange={this.onSearchMeal} content={'search a meal'} />
                </div>
                <Footer />
            </div>
        )
    }
}

export default App;