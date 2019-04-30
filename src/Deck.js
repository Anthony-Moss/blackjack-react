import React from 'react';

class Deck extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            deck: [],
            player1Cards: [],
            dealerCards: []
        };

        const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
        const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

        for (let suit in suits) {
            for (let value in values) {
              this.state.deck.push(`${values[value]} of ${suits[suit]}`);
          }
        }
      }

      shuffleDeck() {
        
      }

      drawCard = () => {
        console.log('Deck: drawing card');
        this.setState({
          deck: this.state.deck 
        })
      }

      render() {
        return (
          this.state.deck
        )
      }
}

export default Deck


