import Radium from "radium";
import React from "react";
import Color from "color";

@Radium
class Button extends React.Component {
  static propTypes = {
    style: React.PropTypes.object
  }
  static defaultProps = {
    style: {
      backgroundColor: "orange",
      color: "white"
    }
  }
  getStyles() {
    return {
      base: {
        fontSize: 16,
        backgroundColor: this.props.style.backgroundColor,
        color: this.props.style.color,
        border: this.props.style.border ? this.props.style.border : 0,
        marginRight: 10,
        borderRadius: "0.3em",
        // padding: "0.4em 1em",
        padding: "0.8em 1.5em",
        cursor: "pointer",
        outline: "none",

        // "@media (min-width: 992px)": {
        //   padding: "0.6em 1.2em"
        // },

        // "@media (min-width: 1200px)": {
        //   padding: "0.8em 1.5em"
        // },

        ":hover": {
          backgroundColor: Color(this.props.style.backgroundColor).darken(.1).rgbString()
        },

        ":focus": {
          backgroundColor: Color(this.props.style.backgroundColor).darken(.2).rgbString()
        },

        ":active": {
          backgroundColor: Color(this.props.style.backgroundColor).darken(.2).rgbString(),
          transform: "translateY(2px)",
        }
      }
    }
  }
  render() {
    const styles = this.getStyles();
    return (
      <button
        onClick={this.props.onClick}
        style={[
          styles.base,
          this.props.style
        ]}>
        {this.props.children}
      </button>
    );
  }
}

Button.propTypes = {
  color: React.PropTypes.string,
  onClick: React.PropTypes.func
};

module.exports = Button;
