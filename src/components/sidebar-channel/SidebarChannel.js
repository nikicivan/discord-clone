import React from "react";
import { useDispatch } from "react-redux";
import "./sidebarChannel.css";

import { setChannelInfo } from "../../features/appSlice";

const SidebarChannel = ({ channel }) => {
  const dispatch = useDispatch();

  return (
    <div
      className="sidebarChannel"
      onClick={() =>
        dispatch(
          setChannelInfo(
            { channelId: channel.id, channelName: channel.data.channelName },
          ),
        )}
    >
      <h4>
        <span className="sidebarChannel__hash">#</span>
        {channel.data.channelName}
      </h4>
    </div>
  );
};

export default SidebarChannel;
