import Banner from './banner'
import Cart from './Cart'
import ShoppingList from './shoppinglist'
import '../Styles/Layout.css'
import { useState } from 'react'


function App() {
    const [cart, updateCart] = useState([])
    
    return (
        <div>
            <Banner>
                <h1 className='jh-title'>Jungle House</h1>
            </Banner>
            <div className='jh-layout-inner'>
                <Cart cart={cart} updateCart={updateCart} />
                <ShoppingList cart={cart} updateCart={updateCart} />
            </div>
        </div>
    )
}

export default App