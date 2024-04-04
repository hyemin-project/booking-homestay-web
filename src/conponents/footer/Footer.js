import "./footer.css";
import { LoremIpsum } from 'lorem-ipsum';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Footer = () => {



    return (
        <div className="footer">
            <div className="footerContainer">
                <div className="fLists">
                    <ul className="colomn">
                        <h5 >BookMyHomestay</h5>
                        <li className="fListItem">Find homestay for your accommodation</li>
                    </ul>
                    <ul className="colomn">
                        <h5 >Company</h5>
                        <li className="fListItem">About</li >
                        <li className="fListItem">Jobs</li >
                        <li className="fListItem">Newsroom</li >
                        <li className="fListItem">Advertising</li >
                        <li className="fListItem">Contact Us</li>
                    </ul>
                    <ul className="colomn">
                        <h5>Explore</h5>
                        <li className="fListItem">Central</li >
                        <li className="fListItem">West Side</li >
                        <li className="fListItem">East Side</li >
                        <li className="fListItem">South Vancouver</li >
                        <li className="fListItem">North Vancouver</li >
                    </ul>
                    <ul className="colomn">
                        <h5>Terms and Policies</h5>
                        <li className="fListItem">Privacy policy</li>
                        <li className="fListItem">Terms of use</li >
                        <li className="fListItem">Accessibility</li >
                        <li className="fListItem">Reward system policy</li >
                    </ul>
                    <ul className="colomn">
                        <h5>Help</h5>
                        <li className="fListItem">Support</li >
                        <li className="fListItem">Cancel your Homestay</li>
                        <li className="fListItem">Use Coupon</li >
                        <li className="fListItem">Refund policies</li >
                        <li className="fListItem">FAQ</li >
                    </ul>
                </div>
                <div className="fBottom">
                    &copy; BookMyHomestay 2024 All rights reserved
                </div>
            </div>
        </div>
    )
}

export default Footer;