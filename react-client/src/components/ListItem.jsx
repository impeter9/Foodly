import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

const Container = styled(ListGroup.Item)`
  display: grid;
  grid-template-columns: 25% 35% 20% 20%;
`;

const StyledButton = styled(Button)`
  margin-top: 10px;
  align: center;
`;

const Spacer = styled.div`
  margin-top: 10px;
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
        <form value={this.props.index} onSubmit={this.props.handleAddToFavorite}>
          <h4>{ this.props.item['recipe']['label'] }</h4>
          <img src={ this.props.item['recipe']['image'] }/>
          <Spacer></Spacer>
          <Button type="submit">Add to Favorite</Button>
        </form>
        <div>
          <h5>Ingredient</h5>
          <ul>
            {this.props.item['recipe']['ingredientLines'].map(ingredient => <li>{ingredient}</li>)}
          </ul>
          <h5>{this.props.item['recipe']['yield']} servings</h5>
        </div>
        <div>
          {(this.props.item['recipe']['dietLabels'].length  === 0)  ? (
            <div></div>
          ) : (
            <div>
            <h5>Diet Labels</h5>
            <ul>
              {this.props.item['recipe']['dietLabels'].map(label => <p>-{label}</p>)}
            </ul>
            </div>
          )}
          {(this.props.item['recipe']['healthLabels'].length  === 0)  ? (
            <div></div>
          ) : (
            <div>
            <h5>Health Labels</h5>
            <ul>
              {this.props.item['recipe']['healthLabels'].map(label => <p>-{label}</p>)}
            </ul>
            </div>
          )}
          <div>
            <h5>Calories: {Math.round(this.props.item['recipe']['calories']/this.props.item['recipe']['yield'])} kcal/serving</h5>
          </div>
        </div>
        <div>
          <a href={this.props.item['recipe']['url']} target="_blank"><Button type="submit">Click to See Source</Button></a>
          <Spacer></Spacer>
          <a href={this.props.item['recipe']['shareAs']} target="_blank"><Button type="submit">Click to See Nutrients</Button></a>
        </div>
      </Container>
    )
  }
}

export default ListItem;