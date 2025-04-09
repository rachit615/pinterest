import Image from "../Image/Image";

const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <Image path={"/general/noAvatar.png"} alt="" />
      <div className="commentContent">
        <span className="commentUsername">rachti</span>
        <p className="commentText">fjdlfdjlfdlfdjlfljdfld</p>
        <span className="commentTime">20:11</span>
      </div>
    </div>
  );
};

export default Comment;
