function DuaArrowIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 16 20"
      width={12}
      height={14}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.511 1v3.16c0 5.482 4.444 9.926 9.925 9.926h3.16"
        stroke="#1FA45B"
        strokeWidth={0.554}
        strokeLinecap="round"
        strokeDasharray="1.66 1.66"
      />
      <path
        d="M14.7 14.086l-4.65 4.65M14.597 13.966l-4.65-4.65"
        stroke="#1FA45B"
        strokeWidth={1.109}
        strokeLinecap="round"
      />
    </svg>
  );
}

export default DuaArrowIcon;
