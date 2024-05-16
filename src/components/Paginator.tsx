type Props = {
    total: number;
    page: number;
    setpage: (page: number) => void;
}

export default function Paginator({ total, page, setpage }: Props) {
  const PAGE_SIZE = 10;

  function getTotalPages() {
    return Math.ceil(total / PAGE_SIZE);
  }

  return (
    <div className="mt-8 flex justify-center text-2xl">
      <button onClick={() => setpage(+page - +1)} disabled={page === 1} className="mr-2">&lt;</button>
      <span>{page}/{getTotalPages()}</span>
      <button onClick={() => setpage(+page + +1)} disabled={page === total} className="ml-2">&gt;</button>
    </div>
  )
}
