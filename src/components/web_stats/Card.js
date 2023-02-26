import React from 'react'

const Card = ( { title, desc, Icon, color, iconColor } ) => {
    return (
        <div className='class="box-border h-24 w-80 p-4 flex' style={ { backgroundColor: color } }>
            <Icon className="h-16 w-16 pr-2" style={ { color: iconColor } } />
            <div className='flex-col'>
                <h4 className='font-semibold font-sans'>{ desc }</h4>
                <h7 className='font-serif'>{ title }</h7>
            </div>
        </div>
    )
}

export default Card