import { Link } from "react-router-dom";
import { GiSoccerKick } from 'react-icons/gi';
import Header from "./Header";
import {BsFillBagHeartFill} from 'react-icons/bs';

const LoginSection = ({ isAuthenticated, user }) => (
    <div className="container">
      <Header />
      <div className="LoginInfo">
        <div className="icon">
          {isAuthenticated && (
            <div className="account">
              <div className="user_icon">
                <GiSoccerKick />
              </div>
              <p>Hello, {user.name}</p>
            </div>
          )}
          <div className="bag_icon">
            <Link to="/wishlist" className="link">
              <BsFillBagHeartFill />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

  export default LoginSection
  