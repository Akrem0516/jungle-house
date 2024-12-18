import { plantList } from "../datas/plantList"
import '../Styles/ShoppingList.css'
import PlantItem from "./PlantItem";





function ShoppingList({cart, updateCart}) {


    
    const categories = [];
    plantList.forEach((plant) => {
        if (!categories.includes(plant.category)) {
            categories.push(plant.category);
        }
    });
    function addToCart(name, price) {
		const currentPlantSaved = cart.find((plant) => plant.name === name)
		if (currentPlantSaved) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)            
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantSaved.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}

	return (
		<div className='jh-shopping-list'>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className='jh-plant-list'>
				{plantList.map(({ id, cover, name, water, light, price }) => (
					<div key={id} onClick={() => addToCart(name, price)}>
						<PlantItem cover={cover} name={name} water={water} light={light} price={price} />
					</div>
				))}
			</ul>
		</div>
	)
}

export default ShoppingList