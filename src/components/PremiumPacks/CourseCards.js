import { FaUser, FaExternalLinkAlt, FaPlayCircle } from 'react-icons/fa'

import './CourseCard.css'


const CourseCards = ( { category } ) => {
    return (
        <div className='main_card ml-20 rounded-md '>
            <div className='thumb'>
                <img src={ category.thumb } alt='coursePic' />
            </div>
            <div className='pl-3'>
                <div className='flex flex-initial items-center justify-between'>
                    <h2 className='font-medium mb-8 mt-2 text-xl'>{ category.c_name }</h2>
                    <h2 className='font-medium mb-8 mt-2 text-xl pr-3'>{ category.value }</h2>
                </div>
                <div className='flex flex-initial items-center'>
                    <FaUser />
                    <span className='mx-2 font-semibold '>{ category.author }</span>
                    <FaExternalLinkAlt />
                </div>
            </div>
            <div className='my-3'>
                <hr />
            </div>
            <div className='flex flex-row items-center pl-3 pb-3'>
                <FaPlayCircle />
                <p className='mx-2'>{ category.no_of_lec } Lecture</p>
                <p className='ml-20'>rating</p>
            </div>
        </div>
    )
}

export default CourseCards