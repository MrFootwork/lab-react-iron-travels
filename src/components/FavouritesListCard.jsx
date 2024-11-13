const FavouritesListCard = ({ plan }) => {
	return (
		<li>
			<div id="favourites-image-container">
				<img src={plan.image} alt='' />
			</div>
			<div id="favourites-info-container">
				<h6>
					{plan.destination} ({plan.days} Days)
				</h6>
				<p>
					<span>{plan.totalCost}€</span>
				</p>
			</div>
		</li>
	);
};

export default FavouritesListCard;
