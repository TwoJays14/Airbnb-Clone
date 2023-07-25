import React from 'react';
import Card from '../src/components/Card';
import Header from './components/Header';
import Data from './Data';

export default function App() {
  const cards = Data.map(item => {
    return (
      <Card
      key={item.id}
      item={item} 
      />
      
    )
  })

  return (
    <div className='app-container'>
      <Header />
      <section className='cards-list'>
      {cards}
      </section>
    </div>
  )

}