import React, { useState } from "react";
import EmojiPicker from "emoji-picker-react";

const CommentForm = () => {
  const [open, setOpen] = useState(false);
  const [desc, setDesc] = useState("");
  return (
    <form className="commentForm">
      <input type="text" placeholder="Add a comment" onChange={(e) => {}} />
      <div className="emoji">
        <div onClick={() => setOpen((prev) => !prev)}>😊</div>
        {open && (
          <div className="emojiPicker">
            <EmojiPicker onEmojiClick={() => {}} />
          </div>
        )}
      </div>
    </form>
  );
};

export default CommentForm;
