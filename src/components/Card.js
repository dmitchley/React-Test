function Card({ item, id, handleClick }) {
  /* itemClass is the class that is passed to the Card component. It is passes the active class which then check
    Correct or Wrong class name */
  const itemClass = item.stat ? " active " + item.stat : "";

  return (
    <>
      <div className={"card" + itemClass} onClick={() => handleClick(id)}>
        <img src={item.img} alt="" />
      </div>
    </>
  );
}

export default Card;
