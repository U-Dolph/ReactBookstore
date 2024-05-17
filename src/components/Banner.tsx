import banner from '../assets/banner.png'

export default function Banner() {
  return (
    <div className="relative w-full overflow-hidden h-96 mt-4 flex items-center">
      <img
        src={banner}
        alt="Banner image"
        className="w-full h-full object-cover object-bottom"
      />
      <div className="absolute w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start p-2 text-white">
          <div className="text-5xl uppercase font-semibold text-amber-950">New</div>
          <div className="text-5xl uppercase font-semibold text-amber-950">Books</div>
          <div className="text-5xl uppercase font-semibold text-amber-950">Everyday</div>
        </div>
      </div>
    </div>
  )
}
