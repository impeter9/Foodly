import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';

const StyledCarousel = styled(Carousel)`
  position: relative;
  left: 12%;
`;

const StyledCarouselCaption = styled(Carousel.Caption)`
  position: relative;
  left: auto;
  right: auto;
`;

const StyledCarouselParagraph = styled.p`
  color: grey;
`;

class MainImageCarousels extends React.Component {
  render() {
    return (
      <StyledCarousel className="w-75 p-3">
        <Carousel.Item>
          <a href="https://www.bonappetit.com/recipe/vegetarian-bean-chili-with-fritos" target="_blank"><img
            className="d-block w-100"
            src="https://foodly-mvp.s3-us-west-1.amazonaws.com/foodly_carousels_001.jpg"
            alt="First slide"
          /></a>
          <StyledCarouselCaption>
          <a href="https://www.bonappetit.com/recipe/vegetarian-bean-chili-with-fritos" target="_blank"><h3>Vegetarian Chili With Lots of Fritos</h3></a>
            <StyledCarouselParagraph>Quick, spicy, filling, and made mostly of pantry ingredients, this chili/tortilla soup/frito pie mash-up is calling your name. (Shhh. Listen closely.) </StyledCarouselParagraph>
          </StyledCarouselCaption>
        </Carousel.Item>
        <Carousel.Item>
          <a href="https://www.bonappetit.com/recipe/jalapeno-cornbread-with-dairy-free-cilantro-lime-honey-butter" target="_blank"><img
            className="d-block w-100"
            src="https://foodly-mvp.s3-us-west-1.amazonaws.com/foodly_carousels_002.jpg"
            alt="Second slide"
          /></a>
          <StyledCarouselCaption>
          <a href="https://www.bonappetit.com/recipe/jalapeno-cornbread-with-dairy-free-cilantro-lime-honey-butter" target="_blank"><h3>Jalapeño Cornbread with Dairy-Free Cilantro-Lime Honey Butter</h3></a>
            <StyledCarouselParagraph>This dairy-free cornbread is made with a kick\! With the delicious taste of [Country Crock® Plant Butter with Avocado Oil](https://www.countrycrock.com/products/plant-butter), this recipe could be made for all occasions: a side dish, a breakfast treat or even dessert.</StyledCarouselParagraph>
          </StyledCarouselCaption>
        </Carousel.Item>
        <Carousel.Item>
          <a href="https://www.bonappetit.com/recipe/jamaican-beef-patties" target="_blank"><img
            className="d-block w-100"
            src="https://foodly-mvp.s3-us-west-1.amazonaws.com/foodly_carousels_003.jpg"
            alt="Third slide"
          /></a>
          <StyledCarouselCaption>
          <a href="https://www.bonappetit.com/recipe/jamaican-beef-patties" target="_blank"><h3>Jamaican Beef Patties</h3></a>
            <StyledCarouselParagraph>These delectable flaky pastries can be found at street vendors and restaurants in Jamaica and throughout the Caribbean, but they’re fun to make at home as a snack or appetizer. </StyledCarouselParagraph>
          </StyledCarouselCaption>
        </Carousel.Item>
        <Carousel.Item>
          <a href="https://www.bonappetit.com/recipe/tropical-trifle-with-coconut-and-rum" target="_blank"><img
            className="d-block w-100"
            src="https://foodly-mvp.s3-us-west-1.amazonaws.com/foodly_carousels_004.jpg"
            alt="Fourth slide"
          /></a>
          <StyledCarouselCaption>
          <a href="https://www.bonappetit.com/recipe/tropical-trifle-with-coconut-and-rum" target="_blank"><h3>Tropical Trifle With Coconut and Rum</h3></a>
            <StyledCarouselParagraph>Creamy, sweet Ataulfo mangoes are ideal for this simple, vibrant dessert.</StyledCarouselParagraph>
          </StyledCarouselCaption>
        </Carousel.Item>
        <Carousel.Item>
          <a href="https://www.bonappetit.com/recipe/warm-winter-vegetable-salad-with-halloumi" target="_blank"><img
            className="d-block w-100"
            src="https://foodly-mvp.s3-us-west-1.amazonaws.com/foodly_carousels_005.jpg"
            alt="Fifth slide"
          /></a>
          <StyledCarouselCaption>
          <a href="https://www.bonappetit.com/recipe/warm-winter-vegetable-salad-with-halloumi" target="_blank"><h3>Warm Winter Vegetable Salad With Halloumi</h3></a>
            <StyledCarouselParagraph>Deb Perelman’s fattoush-inspired, picky-eater approved salad with creamy squash, crispy pita chips, and chewy, charred cheese salad.</StyledCarouselParagraph>
          </StyledCarouselCaption>
        </Carousel.Item>
        <Carousel.Item>
          <a href="https://www.bonappetit.com/recipe/mole-spiced-ribs-with-orange-and-pickled-onion" target="_blank"><img
            className="d-block w-100"
            src="https://foodly-mvp.s3-us-west-1.amazonaws.com/foodly_carousels_006.jpg"
            alt="Sixth slide"
          /></a>
          <StyledCarouselCaption>
          <a href="https://www.bonappetit.com/recipe/mole-spiced-ribs-with-orange-and-pickled-onion" target="_blank"><h3>Mole-Spiced Ribs With Orange and Pickled Onion</h3></a>
            <StyledCarouselParagraph>These ribs are tenderized with tangy kombucha—yep\!—and flavored with Mexican mole spices.</StyledCarouselParagraph>
          </StyledCarouselCaption>
        </Carousel.Item>
      </StyledCarousel>
    )
  }
}

export default MainImageCarousels;