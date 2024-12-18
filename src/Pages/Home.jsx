import { Desc } from "../components/Desc/Desc";
import { Profile } from "../components/profile/Profile";

export const Home = () => {
  return (
    <div className="Home">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2">
          <div className="col">
            <Profile />
          </div>
          <div className="col">
            <Desc />
          </div>
        </div>
      </div>
    </div>
  );
};
