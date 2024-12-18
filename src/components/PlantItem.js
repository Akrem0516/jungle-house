import CareScale from './CareScale'
import '../Styles/PlanItem.css'



function PlantItem({ name, cover, water, light }) {

	return (
		<li  className='jh-plant-item' >
			<img className='jh-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}


export default PlantItem