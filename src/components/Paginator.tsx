import { REQUESTED_PAGE_SIZE } from "../globals";

type Props = {
  total: number;
  page: number;
  setpage: (page: number) => void;
}

export default function Paginator({ total, page, setpage }: Props) {
  const totalPages = Math.ceil(total / REQUESTED_PAGE_SIZE);

  return (
    <div className="mt-8 flex justify-center text-2xl">
      {page > 1 && <button onClick={() => setpage(+page - +1)} disabled={page === 1} className="mr-2">&lt;</button>}
      <span>{page}/{totalPages}</span>
      {page < totalPages && <button onClick={() => setpage(+page + +1)} disabled={page === total} className="ml-2">&gt;</button>}
    </div>
  )
}
