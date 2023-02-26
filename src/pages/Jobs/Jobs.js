import React from "react";
import JobsCard from "../../components/Jobs_components/JobsCard";
import JobsSideBar from "../../components/Jobs_components/JobsSideBar";
import { useFetchJobsQuery } from "../../store";

const Jobs = () => {
  const { data, error, isLoading } = useFetchJobsQuery();
  let jobs;
  if ( isLoading ) {
    jobs = <div>Loading..</div>;
  } else if ( error ) {
    jobs = <div>{ error }</div>;
  } else {
    jobs = data.map( ( job ) => {
      return <JobsCard key={ job.id } job={ job } />
    } )

  }
  return (
    <div className="flex flex-row">
      <JobsSideBar />
      <div className="flex flex-col">
        { jobs }
      </div>
    </div>
  )
};

export default Jobs;
