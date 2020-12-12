import React from 'react';

import ChannelList from './ChannelList';

const App = ({ channels }) => (
  <div>
    <ChannelList channels={channels} />
  </div>
);

export default App;
