import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ListGroup.Item>{ props.item.description }</ListGroup.Item>
    )
  }
}

export default ListItem;