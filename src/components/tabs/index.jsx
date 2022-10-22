import React, { Component } from "react";

import Tab from "../tab";
import SortDropdown from '../sort-dropdown'

class Tabs extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      activeTab: this.props.children[0].props.label,
    };
  }
  
  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab });
  };
  
  render() {
    const {
      onClickTabItem,
      props: { children },
      state: { activeTab },
    } = this;
    
    return (
      <div className="tabs pt-4 relative">
        <div className="tabs__tab-list relative flex flex-row justify-between items-center before:content-[''] before:block before:bg-gray-light before:h-1 before:absolute before:w-full before:-bottom-0.5">
          <ul className="flex flex-row justify-between w-1/2 m-0 p-0">
            {children.map((child) => {
            const { label } = child.props;
            
            return (
              <Tab
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={onClickTabItem}
              />
            );
          })}
          </ul>
          <SortDropdown />
        </div>
        <div className="tabs__content p-4">
          {children.map((child) => {
            if (child.props.label !== activeTab) return undefined
            return child.props.children
          })}
        </div>
      </div>
    );
  }
}

export default Tabs

//   &:before {
//       content: '';
//       display: block;
//       background: #424242;
//       height: 3px;
//       position: absolute;
//       bottom: -2px;
//       width: 100%;
//     }

// &__content {
//     padding: 16px 0;
//   }
// }

