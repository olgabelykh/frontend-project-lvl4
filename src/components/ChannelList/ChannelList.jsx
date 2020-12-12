import React from 'react';

const ChannelList = ({ channels = [] }) => {
  const renderChannels = () =>
    channels.map(({ id, name }) => (
      <li key={id} className="list-group-item">
        {name}
      </li>
    ));

  return <ul className="list-group">{renderChannels()}</ul>;
};

export default ChannelList;
