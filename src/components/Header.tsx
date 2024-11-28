import  { useState } from 'react'
import logo from "/BrandLogo.svg"
import searchIcon from "/SearchIcon.svg"
 
const Header = () => {
    const [search, setSearch] = useState<string>("");
  return (
    <>
    <div className="header">
        <div className="">
            <img src={logo} className='logo' alt='brand logo'/>
        </div>
        <div className="search-box">

            <input type="text" className='inputSearch' placeholder='Search a album of your choice' value={search} onChange={(e)=>setSearch(e.target.value)}/>
            <img src={searchIcon} className='search' alt="searchIcon"/>
        </div>
        <div className="">
            <button className='btn'>Give Feedback</button>
        </div>
    </div>
    </>
  )
}

export default Header