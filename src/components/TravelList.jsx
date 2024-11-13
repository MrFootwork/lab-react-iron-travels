import TravelPlanCard from "./TravelPlanCard";

const TravelList = ({ stateTravelList: [list, setList] }) => {
  
	return (
		<ul id="travelList">
			{list.map(plan => {
				return (
          <TravelPlanCard key={plan.id} plan={plan} stateTravelList={[list, setList]}/>
				);
			})}
		</ul>
	);
};

export default TravelList;
