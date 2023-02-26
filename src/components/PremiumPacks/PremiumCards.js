import { useFetchCoursesQuery } from "../../store";
import CourseCards from "./CourseCards";

const PremiumCards = () => {
  const { data, error, isLoading } = useFetchCoursesQuery();
  let content;
  if ( isLoading ) {
    content = <div>Loading..</div>;
  } else if ( error ) {
    content = <div>{ error }</div>;
  } else {
    content = data.map( ( category ) => {
      return <CourseCards key={ category.id } author={ category.author } />
    } );
  }
  return (
    <div>
      { content }
    </div>
  )
};

export default PremiumCards;
