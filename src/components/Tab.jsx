import React, { Component } from "react";

class Tab extends Component {
  
  onClick = () => {
    const { label, onClick } = this.props
    onClick(label)
  };
  
  render() {
    const {
      onClick,
      props: { activeTab, label },
    } = this;
    
    let className = "tab-list-item"
    
    if (activeTab === label) {
      className += " tab-list-item--active border-b-4 border-red"
    }
    
    return (
      <li className={`${className} relative text-white uppercase cursor-pointer p-3 top-0.5`} onClick={onClick}>
        {label}
      </li>
    );
  }
}

export default Tab
