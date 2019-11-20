import React from 'react';
import PropTypes from 'prop-types';

const withActiveItem = (Component) => {
  class WithActiveItem extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        activeItem: null,
      };

      this.handleSelectItem = this.handleSelectItem.bind(this);
    }

    handleSelectItem(item) {
      this.setState({
        activeItem: item
      });
      this.props.onSelectItem(item);
    }

    render() {
      const {activeItem} = this.state;
      return (
        <Component {...this.props} activeItem={activeItem} onSelectItem={this.handleSelectItem}/>
      );
    }
  }

  WithActiveItem.propTypes = {
    onSelectItem: PropTypes.func,
  };

  WithActiveItem.defaultProps = {
    onSelectItem: () => {},
  };

  return WithActiveItem;
};

export default withActiveItem;
