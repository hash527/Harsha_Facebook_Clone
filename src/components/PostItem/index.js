import React from "react";
import "./index.css";

const PostItem = ({ postText, id, gif }) => {
  console.log(gif);
  return (
    <div>
      <div className="feed">
        <img
          src="https://scontent.fhyd2-1.fna.fbcdn.net/v/t1.30497-1/84628273_176159830277856_972693363922829312_n.jpg?stp=c59.0.200.200a_dst-jpg_p200x200&_nc_cat=1&ccb=1-6&_nc_sid=12b3be&_nc_ohc=yc8i44iJCn8AX9-r_j-&_nc_ht=scontent.fhyd2-1.fna&edm=AHgPADgEAAAA&oh=00_AT8H02IMI6_3XkGZPD1lEtQ-ss8FOyMGosaPQzbgF6NqKA&oe=62A8C299"
          className="profile-img"
          alt="profile-img"
        />
        <p className="post-text">{postText}</p>

        <img className="gif-img" src={gif} />
      </div>
    </div>
  );
};

export default PostItem;
