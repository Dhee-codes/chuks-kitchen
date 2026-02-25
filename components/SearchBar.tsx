import { Search } from "lucide-react";

export const SearchBar = ({
  searchQuery,
  setSearchQuery,
}: {
  searchQuery: string
  setSearchQuery: (query: string) => void
}) => {
  return (
    <div className="w-full px-3.75 -translate-y-1/2">
      <div className="relative w-full md:w-1069/1440 max-w-267.25 mx-auto shadow-[0_0_30px_5px_rgba(0,0,0,0.12)] rounded-md">
        <span className="absolute left-2 md:left-5.5 top-1/2 -translate-y-1/2">
          <Search className="size-6 md:size-11.5 text-foreground/80 md:text-foreground/70" />
        </span>
        <input
          type="text"
          placeholder="What are you craving for today?"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full py-2 md:py-5.5 pl-10 md:pl-19.5 pr-2 md:pr-5.5 rounded-md bg-card border-none focus:ring-2 focus:ring-primary outline-none placeholder:text-foreground/80 placeholder:text-[1rem] placeholder:leading-[1.4] placeholder:tracking-[-2%] md:placeholder:semi-bold md:placeholder:text-foreground/70"
        />
      </div>
    </div>
  );
}
