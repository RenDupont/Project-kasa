import Classes from '../styles/DropDown.module.css'
import Arrow from '../assets/arrow_back_ios-24px 2.svg'
import { useState } from 'react';

function Dropdown({item}) {
    const [isActive, setIsActive] = useState(false);

    const toggleDropdown = () => {
        setIsActive(!isActive);
    };
    const changeArrow = isActive ? Classes.kasaDropdown_active : Classes.kasaDropdown_notActive;
    const dropContent = isActive ? Classes.kasaDropdown_description_active : Classes.kasaDropdown_description

    return (
        <div className={Classes.kasaDropdown}>
            <div className={Classes.kasaDropdown_title}>
                {item.title}
                <img className={changeArrow} src={Arrow} alt='arrow down' onClick={toggleDropdown}></img>
            </div>
            <div className={dropContent}>
                <p>{item.description}</p>
            </div>
        </div>
    );
}

export default Dropdown;