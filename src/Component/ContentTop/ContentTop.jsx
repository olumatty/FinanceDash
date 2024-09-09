import { BsSearch, BsChat, BsBell } from "react-icons/bs";
import './ContentTop.css'
const ContentTop = () => {
    return (
        <div className="main-content-top">
            <div className="content-top-left">
                <BsSearch className="icon" />
                <input type ="text" placeholder="Search" className="input-field"/>
            </div>

            <div className="content-top-btns">
                <button className="search-btn content-top-btn" type = "button">
                <BsChat className="icons" />
                <span className="notification-btn-dot"></span>
                </button>
                <button className="search-btn content-top-btn" type = "button">
                <BsBell  className="icons"/>
                <span className="notification-btn-dot"></span>   
                </button>
            </div>
        </div>
    );
}
 
export default ContentTop;