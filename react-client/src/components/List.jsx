import React from 'react';
import ListItem from './ListItem.jsx';
import ListGroup from 'react-bootstrap/ListGroup';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ListGroup>
        <h4> List Component </h4>
        There are { props.items.length } items.
        { props.items.map(item => <ListItem item={item}/>)}
      </ListGroup>
    )
  }
}

export default List;