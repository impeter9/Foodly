import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

const Container = styled(ListGroup.Item)`
  display: grid;
  grid-template-columns: 25% 25% 50%;
`;

const StyledButton = styled(Button)`
  margin-top: 10px;
  align: center;
`;

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Container>
        <div>
          <h4>{ this.props.item['recipe']['label'] }</h4>
          <img src={ this.props.item['recipe']['image'] }/>
          <Button>Add to Favorite</Button>
        </div>
        <div>
          <h5>Ingredient</h5>
          {this.props.item['recipe']['ingredientLines'].map(ingredient => <p>-{ingredient}</p>)}
        </div>
        <div>
          {(this.props.item['recipe']['dietLabels'].length  === 0)  ? (
            <div></div>
          ) : (
            <div>
            Diet Labels
            <ul>
              {this.props.item['recipe']['dietLabels'].map(label => <p>-{label}</p>)}
            </ul>
            </div>
          )}
          {(this.props.item['recipe']['healthLabels'].length  === 0)  ? (
            <div></div>
          ) : (
            <div>
            Health Labels
            <ul>
              {this.props.item['recipe']['healthLabels'].map(label => <p>-{label}</p>)}
            </ul>
            </div>
          )}
        </div>
      </Container>
    )
  }
}

export default ListItem;