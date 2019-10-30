import React from 'react';
import { Card } from '../card/card.component';
import './card-list.styles.css';

// cardList components should be responsible for listing the cards
// cardList should be thinking about what to add, how to render them
// cardList component should not be responsible for how these cards should look
// app.js doesn't have to worry about creating monsters cards
export const CardList = props => (
  <div className='card-list'>
    {props.monsters.map(monster=>(
      <Card key={ monster.id } monster={ monster } />
    ))}
  </div>
);