import React from 'react';
import Card from '../../components/Card';
import Card2 from '../../components/Card2';
import Card3 from '../../components/Card3';
import './NFTCollection.css';


const NFTColletion = () => (
  <div className="gpt3__blog section__padding" >
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">Win tokens on each lesson and<br /> Redeem your NFT!</h1>
    </div>
    <div className="gpt3__blog-container">
    <Card
        id="23"
        name="David de la Cruz"
        value="20.6808"
        category="Begginer"
        timeLeft="3 days"
        message="Our students collection."
      />
    <Card2
        id="23"
        name="David de la Cruz"
        value="20.6808"
        category="Advanced"
        timeLeft="3 days"
        message="Our students collection."
      />
    <Card3
        id="23"
        name="David de la Cruz"
        value="20.6808"
        category="Honor"
        timeLeft="3 days"
        message="Our students collection."
      />
    </div>
  </div>
);

export default NFTColletion;