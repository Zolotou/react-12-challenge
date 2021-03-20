import React, { Component } from 'react';

class TabSelector extends Component {
  


  render() {
    const { activeId, handleTab } = this.props;
    
    return (
      <div className="TabSelector">
        <button
          id="home"
          onClick={() => handleTab('home')}
          className={activeId === 'home' ? 'active' : ''}
        >
          Home
        </button>
        <button
          id="about"
          onClick={() => handleTab('about')}
          className={activeId === 'about' ? 'active' : ''}
        >
          About
        </button>
        <button
          id="contact"
          onClick={() => handleTab('contact')}
          className={activeId === 'contact' ? 'active' : ''}
        >
          Contact
        </button>
      </div>
    );
  }
}

export default TabSelector;
