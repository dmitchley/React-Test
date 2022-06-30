import { useState } from "react";

// components
import Card from "./Card";
import LoserModal from "./LoserModal";
import WinnerModal from "./WinnerModal";

function Cards() {
  // cards initial state that is shuffled and compared to the random array in the handleClick function
  const [items, setItems] = useState(
    [
      { id: 1, img: "/img/Ace-Loser.png", stat: "" },

      { id: 2, img: "/img/Ace-Loser.png", stat: "" },

      { id: 3, img: "/img/Ace-Loser.png", stat: "" },
    ].sort(() => Math.random() - 0.5)
  );

  // the random arrays initial that that is shuffled below in the handleClick function
  let [cardIndex, cardArray] = useState([{ id: 1 }, { id: 2 }, { id: 3 }]);

  // loser modal state
  const [modalIsOpen, setIsOpen] = useState(false);

  // winner modal state
  const [WinnersetIsOpen, WinnermodalIsOpen] = useState(false);

  function handleClick(current) {
    // random array that shuffles like the cards
    const winningCard = cardIndex[Math.floor(Math.random() * cardIndex.length)];
    console.log(
      `My  Winner Array is ${winningCard.id} and the Card Shuffle is ${items[current].id}`
    );

    /* if the random array matches the card shuffle then the User wins  they are alerted with a winner modal 
        and an option to play again is given */

    if (items[current].id === winningCard.id) {
      items[current].stat = "correct";
      items[current].img = "/img/Queen-winner.png";
      items.stat = "correct";
      setItems([...items]);
      setTimeout(() => {
        WinnermodalIsOpen(true);
      }, 1000);
    }
    // if the random array does not match the card shuffle then the User loses they are alerted and an option to play again is given
    else {
      items[current].stat = "wrong";
      items.stat = "wrong";
      setItems([...items]);
      setTimeout(() => {
        setIsOpen(true);
      }, 1000);
    }
  }

  return (
    <>
      <div className="container-main">
        {/* Mapping through the array and passing the handleClick function to the child as well as the 
             key={index} item={item} id={index} state down to the Card.js child*/}
        {items.map((item, index) => (
          <Card key={index} item={item} id={index} handleClick={handleClick} />
        ))}
        {/* Modal for the Loser */}
        <LoserModal setIsOpen={setIsOpen} modalIsOpen={modalIsOpen} />
        {/* Modal for the Winner */}
        <WinnerModal
          WinnersetIsOpen={WinnersetIsOpen}
          WinnermodalIsOpen={WinnermodalIsOpen}
        />
      </div>

      <div></div>
    </>
  );
}

export default Cards;
