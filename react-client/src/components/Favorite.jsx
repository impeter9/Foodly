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

const Image = styled.img`
  width: 100%;
  height: auto;
`;

class Favorite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Container>
        <form value={this.props.index}>
          <h4>{ this.props.item['label'] }</h4>
          <Image src={ this.props.item['image'] }/>
          <Spacer></Spacer>
          <Button type="submit">Delete from Favorites</Button>
        </form>
        <div>
          <h5>Ingredient</h5>
          <ul>
            {this.props.item['ingredients'].map(ingredient => <li>{ingredient}</li>)}
          </ul>
          <h5>{this.props.item['servings']} servings</h5>
        </div>
        <div>
          {(this.props.item['dietLabels'].length  === 0)  ? (
            <div></div>
          ) : (
            <div>
            <h5>Diet Labels</h5>
            <ul>
              {this.props.item['dietLabels'].map(label => <p>-{label}</p>)}
            </ul>
            </div>
          )}
          {(this.props.item['healthLabels'].length  === 0)  ? (
            <div></div>
          ) : (
            <div>
            <h5>Health Labels</h5>
            <ul>
              {this.props.item['healthLabels'].map(label => <p>-{label}</p>)}
            </ul>
            </div>
          )}
          <div>
            <h5>Calories: {Math.round(this.props.item['calories']/this.props.item['servings'])} kcal/serving</h5>
          </div>
        </div>
        <div>
          <a href={this.props.item['sourceUrl']} target="_blank"><Button type="submit">Click to See Source</Button></a>
          <Spacer></Spacer>
          <a href={this.props.item['edmUrl']} target="_blank"><Button type="submit">Click to See Nutrients</Button></a>
        </div>
      </Container>
    )
  }
}

export default Favorite;