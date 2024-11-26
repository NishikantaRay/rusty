import React, { useState } from 'react';
import TabPane from './TabPane';

const TabsContainer = () => {
  const [activeTab, setActiveTab] = useState('pills-home'); 

  const tabs = [
    { id: 'pills-home', label: 'Home' },
    { id: 'pills-profile', label: 'Profile' },
    { id: 'pills-contact', label: 'Contact' },
    { id: 'pills-four', label: 'Four' },
    { id: 'pills-five', label: 'Five' }
  ];

  return (
    <div>
      <div className="tab-content" id="pills-tabContent">
        {tabs.map((tab) => (
          <TabPane
            key={tab.id}
            id={tab.id}
            label={tab.label}
            isActive={activeTab === tab.id}
          />
        ))}
      </div>
    </div>
  );
};

export default TabsContainer;
