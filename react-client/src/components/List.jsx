import React from 'react';
import ListItem from './ListItem.jsx';
import ListGroup from 'react-bootstrap/ListGroup';
import styled from 'styled-components';

const Header = styled.div`
  margin-left: 5px;
`;

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ListGroup>
        <Header>
          <h5> Recipes </h5>
          There are { this.props.data.length } recipes for {this.props.searchedIngredients.join(', ')}.
        </Header>
        { this.props.data.map((item, index) => <ListItem index={index} key={index} item={item} handleAddToFavorite={this.props.handleAddToFavorite} />)}
      </ListGroup>
    )
  }
}

export default List;