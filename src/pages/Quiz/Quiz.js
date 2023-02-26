import React from "react";
import { useFetchQuizQuery } from "../../store";

const Quiz = () => {
  const { data, error, isLoading } = useFetchQuizQuery();
  let content;
  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (error) {
    content = <div>Error..</div>;
  } else {
    content = JSON.stringify(data);
    console.log(content);
  }
  return <div>{content}</div>;
};

export default Quiz;
