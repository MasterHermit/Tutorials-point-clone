import { FaLaptopCode } from 'react-icons/fa'
import Card from './Card'

const StatsCard = () => {
    return (
        <div className='flex pl-10 space-x-6'>
            <Card title="Premium Courses" Icon={ FaLaptopCode } desc="5000+" />
            <Card title="Expert Tutors" Icon={ FaLaptopCode } desc="1200" />
            <Card title="Online Students" Icon={ FaLaptopCode } desc="30M+" />
            <Card title="Certificated Delivered" Icon={ FaLaptopCode } desc="1M+" />
        </div>
    )
}

export default StatsCard