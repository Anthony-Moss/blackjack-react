import React from 'react';
import Deck from './Deck';
import card from './card.svg';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

class Players extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          needCards: true,
          player1Cards: [],
          dealerCards: [],
          deck: [Deck.props]

        }
    }

    drawCard() {
      
    }
    
    render() {
        return (
            <div>
              <Card>
                {/* <CardImg top width="100%" src={ card } alt="Card image cap" /> */}
                <CardBody>
                  <CardTitle>Player 1's Cards { this.state.deck }</CardTitle>
                  <CardText>Total:</CardText>
                  <Button>Hit Me</Button>
                </CardBody>
              </Card>

              <Card>
                {/* <CardImg top width="100%" src={ card } alt="Card image cap" /> */}
                <CardBody>
                  <CardTitle>Card Name</CardTitle>
                  <CardText>Total:</CardText>
                  <Button>Hit Me</Button>
                </CardBody>
              </Card>
            </div>
          );
        };
}


export default Players;