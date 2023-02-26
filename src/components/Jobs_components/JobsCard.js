import { FaHome, FaPlayCircle, FaWallet } from 'react-icons/fa'
import { SlCalender } from 'react-icons/sl'
import { GoQuestion } from 'react-icons/go'

const JobsCard = ( { job } ) => {
    return (
        <div className='class="box-border h-[258px] w-[568px] mb-6 p-4 bg-slate-500 justify-center ' >
            <div className='flex flex-col mb-4'>
                <h1 className='text-2xl font-bold'>{ job.title }</h1>
                <h3 className='text-lg'>{ job.company }</h3>
            </div>
            <div>
                <div className='flex flex-row items-center mb-4'>
                    <FaHome className='h-4 w-4 mr-2' />
                    <p>{ job.work_mode }</p>
                </div>
                <div className='flex flex-row'>
                    <div className='flex flex-col mr-4'>
                        <div className='flex flex-row items-center'>
                            <FaPlayCircle className='mr-2' />
                            <p>Start Date</p>
                        </div>
                        <p>{ job.start_date }</p>
                    </div>
                    <div className='flex flex-col mr-4'>
                        <div className='flex flex-row items-center'>
                            <SlCalender className='mr-2' />
                            <p>Duration</p>
                        </div>
                        <p>1 Month</p>
                    </div>
                    <div className='flex flex-col mr-4'>
                        <div className='flex flex-row items-center'>
                            <FaWallet className='mr-2' />
                            <p>Stipend</p>
                        </div>
                        <div className='flex flex-row items-center'>
                            <p className='mr-1'>${ job.salary } + Incentives</p>
                            <GoQuestion />
                        </div>
                    </div>
                </div>
            </div>
            <hr className='my-2' />
            <div className='flex flex-row item-center justify-end space-x-4'>

                {/* Link need to be added here */ }

                <p>View Details</p>
                <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold">Apply now</button>
            </div>
        </div>
    )
}

export default JobsCard