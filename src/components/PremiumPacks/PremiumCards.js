var data = require( '../../../db.json' )

const PremiumCards = () => {
    return (
        <div>
            { data.courses.aiml.c_name }
        </div>
    )
}

export default PremiumCards