import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import BookDetails from './components/BookDetails'


import ShoppingCart from './components/ShoppingCart'
import WishList from './components/WishList'
import UserReview from './components/UserReview'
import BookBrowsingTab from './components/BookBrowsing';

function App() {
  return (
    <BrowserRouter> 

    <div className="grid-container">
    <header className="header">
        <div className="brand">
            <a class = "Title " href="/">Geek Text</a>
        </div>
        <Route path ="/" component={BookBrowsingTab}/>
        <div className="header-links"> 

<Route path="/ShoppingCart/:id?" component={ShoppingCart}/>
<a class = "cart-btn"href="ShoppingCart">Cart 🛒</a>
<div class = "cart-items">{}</div>

        <Route path="/WishList/" component={WishList}/>
                <a href="WishList">Wish List ⭐</a>

        <Route path="/UserReview/" component={UserReview}/>
                <a href="UserReview">Reviews 📝</a>        
                
        <a href="signin">Sign in</a>
    </div>
    </header>
    
    <main className="main">
        <div className="content">
        <Route path="/product/:bookid" component={BookDetails}/>
        <Route path="/" exact={true} component={Home} />
        </div>
        

    </main>

    <footer className="footer">
        Copyright © 2020 
    </footer>

</div>
</BrowserRouter>
  );
}

export default App;
