function HamburgerIcon(props: any) {
  return (
    <svg
      width={24}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.325 9.268a1.325 1.325 0 100-2.65 1.325 1.325 0 000 2.65zM22.59 6.619H6.54c-.687 0-1.244.557-1.244 1.244v.16c0 .687.557 1.244 1.244 1.244H22.59c.687 0 1.245-.557 1.245-1.245v-.159c0-.687-.558-1.244-1.245-1.244zM22.59 13.237H1.245c-.688 0-1.245.557-1.245 1.245v.159c0 .687.557 1.244 1.245 1.244H22.59c.687 0 1.244-.557 1.244-1.244v-.16c0-.687-.557-1.244-1.244-1.244zM22.59 0H1.245C.557 0 0 .557 0 1.245v.159c0 .687.557 1.244 1.245 1.244H22.59c.687 0 1.244-.557 1.244-1.244v-.16C23.834.558 23.277 0 22.59 0z"
        fill="#606060"
      />
    </svg>
  );
}

export default HamburgerIcon;
