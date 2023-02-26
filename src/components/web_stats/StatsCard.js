import { FaLaptopCode, FaUserTie, FaUserGraduate, FaCertificate } from 'react-icons/fa'
import Card from './Card'

const StatsCard = () => {
    return (
        <div className='flex pl-20 space-x-6 my-12'>
            <Card title="Premium Courses" Icon={ FaLaptopCode } desc="5000+" color="#fef7e0" iconColor="#e9c950" />
            <Card title="Expert Tutors" Icon={ FaUserTie } desc="1200" color="#e6eaee" iconColor="#435463" />
            <Card title="Online Students" Icon={ FaUserGraduate } desc="30M+" color="#f0ecfa" iconColor="#6b44b7" />
            <Card title="Certificated Delivered" Icon={ FaCertificate } desc="1M+" color="#e7f7f8" iconColor="#2a9ca4" />
        </div>
    )
}

export default StatsCard