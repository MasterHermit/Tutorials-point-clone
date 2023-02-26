import { FaUser, FaExternalLinkAlt } from 'react-icons/fa'

import './CourseCard.css'


const CourseCards = ( { category } ) => {
    return (
        <div className='main_card ml-20'>
            <div className='thumb'>
                <img src='https://images.unsplash.com/photo-1655720840699-67e72c0909d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' alt='coursePic' />
            </div>
            <div className='pl-3'>
                <h2 className='font-medium mb-8'>Course title</h2>
                <div className='flex flex-initial items-center'>
                    <FaUser />
                    <span className='mx-2 font-normal'>Ankush Das</span>
                    <FaExternalLinkAlt />
                </div>
            </div>
            <hr />
            <div className='flex flex-row justify-between'>
                <p className='ml-3'>6 Lecture</p>
                <p className='mr-3'>rating</p>
            </div>
            <div className='pb-3'>
                <p className='font-bold'>Paid</p>
            </div>
        </div>
    )
}

export default CourseCards