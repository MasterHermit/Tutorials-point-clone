import { FaCubes } from 'react-icons/fa'
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
      return <CourseCards />
    } );
  }
  return (
    <div>
      <div className='flex pl-20'>
        <FaCubes className='h-16 w-16 mr-3' />
        <div className='flex flex-col'>
          <p className='text-6xl'>Premium <span className='text-teal-300'>Packs</span></p>
          <p>Curated courses Packed together from expert tutors</p>
        </div>
      </div>
      <div>
        <CourseCards />
      </div>
    </div>
  )
};

export default PremiumCards;
