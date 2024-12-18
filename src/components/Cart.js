import { useState } from 'react'
import '../Styles/cart.css'

function Cart({ cart, updateCart }) {
	const [isOpen, setIsOpen] = useState(true)
	const total = cart.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.price,
		0
	)

	function CreateNewArray(name) {
		let currentPlantSaved = cart.find((plant) => plant.name === name);
	  
		if (currentPlantSaved.amount === 1) {
		  const cartFilteredCurrentPlant = cart.filter(
			(plant) => plant.name !== name
		  );
		  return cartFilteredCurrentPlant;
		} else {
		  const cartFilteredCurrentPlant = cart.map(p => {
			if (p.name === currentPlantSaved.name) {
			  return { ...p, amount: p.amount - 1 }; 
			}
			return p;
		  });
		  return cartFilteredCurrentPlant;
		}
	  }
	  
	return isOpen ? (
		<div className='jh-cart'>
			<button
				className='jh-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Close
			</button>
			{cart.length > 0 ? (
				<div>
					<h2>Cart</h2>
					<ul>
						{cart.map(({ name, price, amount }, index) => (
							<li key={`${name}-${index}`}>
								{name} {price}€ x {amount}
								<button onClick={() => updateCart(CreateNewArray(name))}>Remove</button>
							</li>
						))}
						
					</ul>
					<h3>Total :{total}€</h3>
					<button onClick={() => updateCart([])}>Empty the cart</button>
				</div>
			) : (
				<div>Your cart is empty</div>
			)}
		</div>
	) : (
		<div className='jh-cart-closed'>
			<button
				className='jh-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Open Cart
			</button>
		</div>
	)
}

export default Cart