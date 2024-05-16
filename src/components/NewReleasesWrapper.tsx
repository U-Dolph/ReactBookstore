import Card from "./Card";

export default function NewReleasesWrapper() {
  const cards = [1, 2, 3, 4, 5];
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  mt-2">
      <h4 className="text-3xl uppercase font-semibold text-amber-950">New releases</h4>

      <div className="flex overflow-x-auto mt-4">
        {cards.map((card) => (
          <div className="flex-shrink-0 mr-2">
            <Card key={card} />
          </div>
        ))}
      </div>
    </div>
  )
}
