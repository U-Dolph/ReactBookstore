import { Book } from "../state/books/booksSlice";
import heart from '../assets/icons/heart.svg';

export default function Card({ details, liked }: { details: Book, liked: boolean }) {
  const priceFormatter = (price: string): string => {
    price = price.slice(1);
    const formatted = Math.round(parseFloat(price));
    return `$${formatted}`;
  }

  return (
    <div className="w-56">
      <div className="relative">
        <img src={details.image} alt={details.title} />
        {liked && <img src={heart} alt="Liked book" className="
            absolute top-[0px] right-[-5px]
            transform -translate-x-1/2 rotate-12
            w-12"/>}
        <div className="absolute bottom-[-5px] left-1/2 
            transform -translate-x-1/2 rounded-full 
            bg-orange-500 w-10 h-10 text-center align-middle 
            text-white font-semibold flex items-center 
            justify-center shadow-md">
          {priceFormatter(details.price)}
        </div>
      </div>
      <div className="text-wrap text-center font-semibold mt-2">
        {details.title}
      </div>
      <div className="text-center">
        {details.subtitle}
      </div>
    </div>
  )
}