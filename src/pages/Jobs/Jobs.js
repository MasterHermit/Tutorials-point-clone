import React from "react";
import { useFetchJobsQuery } from "../../store";

const Jobs = () => {
  const { data, error, isLoading } = useFetchJobsQuery();
  let jobs;
  if (isLoading) {
    jobs = <div>Loading..</div>;
  } else if (error) {
    jobs = <div>{error}</div>;
  } else {
    jobs = data;
    console.log(jobs);
  }
  return <div>Jobs</div>;
};

export default Jobs;
