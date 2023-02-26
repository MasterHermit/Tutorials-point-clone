import { useFetchCoursesQuery } from "../../store";


const PremiumCards = () => {
  const { data, error, isLoading } = useFetchCoursesQuery();
  let apiData
  let content;
  if ( isLoading ) {
    content = <div>Loading..</div>;
  } else if ( error ) {
    content = <div>{ error }</div>;
  } else {
    content = data
    apiData = Object.keys( content )
    apiData.map( ( category ) => {
      return category
    } )
  }
  return (
    <div>
      { apiData }
    </div>
  )
};

export default PremiumCards;
