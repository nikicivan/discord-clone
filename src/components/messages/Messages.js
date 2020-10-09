import React from "react";
import "./messages.css";

import { Avatar } from "@material-ui/core";

const Messages = ({ user, message, timestamp }) => {
  return (
    <div className="messages">
      <Avatar src={user?.photo} />
      <div className="messages__info">
        <h4>
          {user?.displayName}
          <span className="messages__timestamp">
            {new Date(timestamp?.toDate()).toUTCString()}
          </span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Messages;
