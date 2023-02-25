import React from 'react'

const Card = ( { title, desc, Icon } ) => {
    return (
        <div className='class="box-border h-28 w-72 p-4 border-4 flex'>
            <Icon className="h-8 w-8 pr-2" />
            <h5>{ title }</h5>
            <span>{ desc }</span>
        </div>
    )
}

export default Card