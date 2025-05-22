import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { MdShoppingCartCheckout } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { VscThreeBars } from "react-icons/vsc";
import headerCss from "./header.module.css";

function Header() {
  return (
    <div>
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
             <a href="/">
            <div className={headerCss.sign}>
               
                <p>Hello, sign in</p>
                <select>
                <option>Account&Lists</option>
                </select>
                
            </div>
            </a>
            
            <a href="/">
            <div>
                
                <p>Returns</p>
                <span>&Orders</span>
                
            </div>
            </a>

            <a href="/">
            <div className={headerCss.cart}>
                <MdShoppingCartCheckout  size={39}/>
                <span>0</span>

            </div>
            </a>

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
