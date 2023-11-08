function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M21 21l-6-6 6 6zm-4-11a7.001 7.001 0 01-11.95 4.95A7 7 0 1117 10z"
        stroke="#868686"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SearchIcon;
