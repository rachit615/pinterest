import { useState } from "react";
import { Link, useNavigate } from "react-router";
import "./userButton.css";
import Image from "../Image/Image";

const UserButton = () => {
  const [open, setOpen] = useState(false);

  // TEMP
  const currentUser = true;

  const handleLogout = async () => {};

  return currentUser ? (
    <div className="userButton">
      <Image src="/general/noAvatar.png" alt="" />
      <div onClick={() => setOpen((prev) => !prev)}>
        <Image src="/general/arrow.svg" alt="" className="arrow" />
      </div>
      {open && (
        <div className="userOptions">
          <a href="">Profile</a>
          <div className="userOption">Setting</div>
          <div className="userOption" onClick={handleLogout}>
            Logout
          </div>
        </div>
      )}
    </div>
  ) : (
    <a href="/auth">Login / Sign Up</a>
  );
};

export default UserButton;
