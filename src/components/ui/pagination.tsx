interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  return (
    <nav
      className="mt-10 flex items-center justify-center gap-2"
      aria-label="Project pagination"
    >
      <button
        type="button"
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
        disabled={currentPage === 1}
        className="border-border bg-background hover:bg-muted rounded-full border px-4 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-40"
      >
        Prev
      </button>

      {Array.from({ length: totalPages }, (_, index) => {
        const page = index + 1;
        const isActive = page === currentPage;

        return (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page)}
            aria-current={isActive ? "page" : undefined}
            className={[
              "rounded-full px-4 py-2 text-sm transition",
              isActive
                ? "bg-foreground text-background"
                : "border-border bg-background hover:bg-muted border",
            ].join(" ")}
          >
            {page}
          </button>
        );
      })}

      <button
        type="button"
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="border-border bg-background hover:bg-muted rounded-full border px-4 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-40"
      >
        Next
      </button>
    </nav>
  );
}
