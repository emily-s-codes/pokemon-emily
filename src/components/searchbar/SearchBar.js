import './SearchBar.css';
import { Link } from 'react-router-dom';
import headingPic from '../../assets/img/heading.svg';
import daynight from '../../assets/img/daynight.svg';
import hamburger from '../../assets/img/hamburger.svg';

export default function SearchBar({ search, darkmode, setDarkMode }) {

    return (
        <div className='searchBarContainer'>
            <Link to={"/"}><img alt='pokemon' className='logoImg' src={headingPic}></img></Link>
            <div className='flexContainer'>
                <Link to={"/menu"}><img alt='' src={hamburger}></img></Link>
                <input placeholder='Pokemon name' onChange={(e) => search(e.target.value)}></input>
                <img alt='' onClick={() => darkmode ? setDarkMode(false) : setDarkMode(true)} src={daynight}></img>
            </div>
        </div >
    );
}
