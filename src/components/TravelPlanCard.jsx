const TravelPlanCard = ({ plan, stateTravelList: [list, setList] }) => {
	let labels = [];

	if (plan.totalCost < 350) {
		labels.push(
			<label key={plan.id + '-great-deal'} className='label-great-deal'>
				Great Deal
			</label>
		);
	}

	if (plan.totalCost > 1500) {
		labels.push(
			<label key={plan.id + '-premium'} className='label-premium'>
				Premium
			</label>
		);
	}

	if (plan.allInclusive) {
		labels.push(
			<label key={plan.id + '-all-inclusive'} className='label-all-inclusive'>
				All-Inclusive
			</label>
		);
	}

	function handleDelete(id) {
		setList(list.filter(item => item.id !== id));
	}

	// FIXME add add to favourites button
	return (
		<li>
			<div>
				<img src={plan.image} alt='' srcSet='' />
			</div>

			<div id='travelInfo'>
				<h3>
					{plan.destination} ({plan.days} Days)
				</h3>
				<p id='description'>{plan.description}</p>
				<p id='price'>
					Price: <span>{plan.totalCost}€</span>
				</p>
				<div id='labels'>{labels}</div>
				<button onClick={() => handleDelete(plan.id)}>Delete</button>
			</div>
		</li>
	);
};

export default TravelPlanCard;