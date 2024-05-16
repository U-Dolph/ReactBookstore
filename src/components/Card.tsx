import { Book } from "../state/books/booksSlice";

function priceFormatter(price: string): string {
  price = price.slice(1);
  const formatted = Math.round(parseFloat(price));
  return `$${formatted}`;
}

export default function Card({ data }: { data: Book }) {
  return (
    <div className="w-56">
      <div className="relative">
        <img src={data.image} alt={data.title} />
        <div className="absolute bottom-[-5px] left-1/2 transform -translate-x-1/2 rounded-full bg-orange-500 w-10 h-10 text-center align-middle text-white font-semibold flex items-center justify-center">
          {priceFormatter(data.price)}
        </div>
      </div>
      <div className="text-wrap text-center font-semibold mt-2">
        {data.title}
      </div>
      <div className="text-center">
        {data.subtitle}
      </div>
    </div>
  )
}