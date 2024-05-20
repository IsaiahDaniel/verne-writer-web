type CardType = {
  children: JSX.Element | JSX.Element[],
  classNames?: string,
}

const Card = ({ children, classNames }: CardType) => {
  return (
    <div className={`border border-[#CDCDCD] bg-white px-5 py-5 rounded-md ${classNames && classNames}`}>
      {children}
    </div>
  );
}

export default Card;