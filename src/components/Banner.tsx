import banner from '../assets/banner.png'

export default function Banner() {
  return (
    <div className="relative w-full overflow-hidden h-96 mt-4 flex items-center">
      <img 
        src={banner} 
        alt="Banner image" 
        className="w-full h-full object-cover object-bottom" 
      />
      <div className="absolute flex flex-col items-start left-0 p-2 text-white">
        <div className="text-6xl uppercase font-semibold text-amber-950">New</div>
        <div className="text-6xl uppercase font-semibold text-amber-950">Books</div>
        <div className="text-6xl uppercase font-semibold text-amber-950">Everyday</div>
      </div>
    </div>

  )
}
