import './CourseCard.css'
const CourseCards = ( { author } ) => {
    return (
        <div className="course-card " style={ { display: 'flex' } }>
            <div className="thumbnail">
                <div className="course-card-image">
                    <a href="/">
                        <img className="not-img img-res" src="https://assets.entrepreneur.com/content/3x2/2000/20141031174145-15-free-online-learning-sites.jpeg" alt="pic1" />
                    </a>
                </div>
                <div className="caption">
                    <div className="course-title">
                        <h3 className="course-title-heading">
                            <a className="not-a" href="/"> Course Name 1</a>
                        </h3>
                    </div>
                    <div className="course-fav-cost row">
                        <div className="course-rating-star">
                            <small>Rating</small>
                            <br />
                            <div className="course-rating">
                                <span><span> ☆</span><span className="active"> ☆</span><span> ☆</span><span> ☆</span><span> ☆</span></span>
                            </div>
                        </div>
                        <div className="course-fav-price text-right">
                            <small>Price</small>
                            <div className="price-dollar">₹01234.50</div>
                        </div>
                    </div>
                    <div className="course-card-foot">
                        <img align="left" className="not-img course-card-foot-img" src="http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640-300x300.png" alt="pic" />
                        <div className="course-card-foot-name main-name">
                            Full Name
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseCards