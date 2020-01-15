import React from 'react';
import Favorite from './Favorite.jsx';
import ListGroup from 'react-bootstrap/ListGroup';
import styled from 'styled-components';

const Header = styled.div`
  margin-left: 5px;
`;

class Favorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ListGroup>
        <Header>
          There are { this.props.favorites.length } favorite recipes.
        </Header>
        { this.props.favorites.map((item, index) => <Favorite index={index} key={index} item={item} />)}
      </ListGroup>
    )
  }
}

export default Favorites;