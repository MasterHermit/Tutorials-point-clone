import { React, useState } from 'react'
import './DropDown.css'

const Dropdown = () => {
    const [ open, setOpen ] = useState( false );

    const handleOpen = () => {
        setOpen( !open );
    };

    const handleMenuOne = () => {
        // do something
        console.log( 'clicked one' );
    };

    const handleMenuTwo = () => {
        // do something
        console.log( 'clicked two' );
    };

    return (
        <Drop
            trigger={ <button>Dropdown</button> }
            menu={ [
                <button onClick={ handleMenuOne }>Menu 1</button>,
                <button onClick={ handleMenuTwo }>Menu 2</button>,
            ] }
        />
    );
};

const Drop = ( { trigger, menu } ) => {
    const [ open, setOpen ] = React.useState( false );

    const handleOpen = () => {
        setOpen( !open );
    };

    return (
        <div className="dropdown">
            { React.cloneElement( trigger, {
                onClick: handleOpen,
            } ) }
            { open ? (
                <ul className="menu">
                    { menu.map( ( menuItem, index ) => (
                        <li key={ index } className="menu-item">
                            { React.cloneElement( menuItem, {
                                onClick: () => {
                                    menuItem.props.onClick();
                                    setOpen( false );
                                },
                            } ) }
                        </li>
                    ) ) }
                </ul>
            ) : null }
        </div>
    );
};
export default Dropdown