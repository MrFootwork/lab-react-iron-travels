import FavouritesListCard from "./FavouritesListCard";

const FavouritesList = ({ favouritePlans }) => {
	return (
		<ul id='favouritesList'>
			{favouritePlans
				.filter(plan => plan.isFavourite)
				.map(plan => <FavouritesListCard key={plan.id} plan={plan}/>)}
		</ul>
	);
};

export default FavouritesList;
