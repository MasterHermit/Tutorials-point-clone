import { useFetchCoursesQuery } from "../../store";

const PremiumCards = () => {
  const { data, error, isLoading } = useFetchCoursesQuery();
  let content;
  if (isLoading) {
    content = <div>Loading..</div>;
  } else if (error) {
    content = <div>{error}</div>;
  } else {
    content = data.map((category) => {
      console.log(category);
    });
  }
  return <div></div>;
};

export default PremiumCards;
