import "./profilePage.css";
import { useState } from "react";
import Gallery from "../../components/gallery/gallery";
import { useParams } from "react-router";
import Image from "../../components/Image/Image";

const ProfilePage = () => {
  const [type, setType] = useState("saved");

  const { username } = useParams();

  return (
    <div className="profilePage">
      <Image
        className="profileImg"
        w={100}
        h={100}
        path={"/general/noAvatar.png"}
        alt=""
      />
      <h1 className="profileName">{`Rachit Gupta`}</h1>
      <span className="profileUsername">@{`rachit615`}</span>
      <div className="followCounts">
        {`343`} followers · {`434`} followings
      </div>
      <div className="profileInteractions">
        <Image path="/general/share.svg" alt="" />
        <div className="profileButtons">
          <button>Message</button>
          {/* <FollowButton
            isFollowing={data.isFollowing}
            username={data.username}
          /> */}
        </div>
        <Image path="/general/more.svg" alt="" />
      </div>
      <div className="profileOptions">
        <span
          onClick={() => setType("created")}
          className={type === "created" ? "active" : ""}
        >
          Created
        </span>
        <span
          onClick={() => setType("saved")}
          className={type === "saved" ? "active" : ""}
        >
          Saved
        </span>
      </div>
      {type === "created" && <Gallery />}
    </div>
  );
};

export default ProfilePage;
