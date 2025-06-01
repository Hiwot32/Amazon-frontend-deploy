import React, { useContext } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import { VscThreeBars } from "react-icons/vsc";
import headerCss from "./header.module.css";
import { DataContext } from '../DataProvider/DataProvider';
import { Link } from 'react-router-dom';
import { auth } from '../../utilities/firebase';
import { signOut } from 'firebase/auth';
function Header() {
    const [{basket,user}, dispatch]=useContext(DataContext)
    const totalItem=basket?.reduce((amount,item)=>{
        return item.amount+amount
    }, 0)
  return (
    <div className={headerCss.fixed}>
    <div className={headerCss.header_container}>
        <div className={headerCss.left_side}>
            <a  href="/">
            <div className={headerCss.Logo}>
                <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazonLogo" />
            </div>
            </a>
            <a href="/">
            <div className={headerCss.deliver}>
                
                <span>
                <GrLocation className={headerCss.location} />
                </span>
                <div>
                <p>Deliver to</p>
                <span>Ethiopia</span>
                </div>
                
            </div>
            </a>

        </div>
        <div className={headerCss.searchBar}>
            <select>
                <option>All</option>
            </select>
            <input className={headerCss.search} type="text" placeholder='Search Amazon' />
            <IoSearchSharp size={28} />

        </div>
        <div className={headerCss.right_side}>
            <div className={headerCss.language}>
                <a href="/">
                <img src="https://pngimg.com/uploads/flags/flags_PNG14655.png" alt="usaFalg" />
                <select>
                <option>EN</option>
                </select>
                </a>
            </div>
             <Link to={!user && "/auth"}>
            <div className={headerCss.sign}>
                <div>
                    {
                        user?(
                            <>
                        <p>Hello, {user?.email?.split("@")[0]}</p>
                        <span onClick={()=>signOut(auth)}>Sign Out</span>
                            </>
                    
                    ):(
                    <>
                    <p>Hello, sign in</p>
                          <span>Account&Lists</span>

                          </>  
                        )
                        
                    }

                </div>
                
            </div>
            </Link>
            
            <Link to="/orders">
            <div>
                
                <p>Returns</p>
                <span>&Orders</span>
                
            </div>
            </Link>

            <Link to="/cart">
            <div className={headerCss.cart}>
                <BsCart2  size={39}/>
                <span>{totalItem}</span>

            </div>
            </Link>

        </div>
      
    </div>
    <div className={headerCss.lower_header}>
        <ul>
            <a href="/">
            <li>
                <VscThreeBars size={22}/>
                <p>All</p>
            </li>
            </a>
             <a href="/"><li>Today's Deals</li></a>
             <a href="/"><li>Registry</li></a>
             <a href="/"><li>Prime Video</li></a>
             <a href="/"><li>Gift Cards</li></a>
             <a href="/"><li>Customer Service</li></a>
             <a href="/"><li>Sell</li></a>
        </ul>

    </div>
    </div>

  )
}

export default Header
