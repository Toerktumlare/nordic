import React from 'react';

class InfoBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          text: this.props.text 
        };
      }

    render() {
        return (
            <div className={`bg-black tc ${this.props.className}`}>
              <h3 className={`code blue v-btm ma0 pa2 f3 h-copy `}>
                  {this.state.text}
              </h3>
          </div>
        );
    }
}
export default InfoBar;