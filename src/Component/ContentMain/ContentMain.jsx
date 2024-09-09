import Card from "../Card/Card";
import Wallet from "../Wallet/Wallet";
import "./ContentMain.css"
const ContentMain = () => {
    return ( 
        <div className="content-main-holder">
            <h2> Dashboard </h2>
            <div className="grid-one">
                <Card/>
                <Wallet/>
            </div>
        </div>
     );
}
 
export default ContentMain;