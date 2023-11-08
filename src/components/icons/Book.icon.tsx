function BookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={20} height={21} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <mask
        id="prefix__a"
        style={{
          maskType: 'luminance',
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={20}
        height={21}
      >
        <path d="M20 .5H0v20h20V.5z" fill="#fff" />
      </mask>
      <g mask="url(#prefix__a)">
        <path
          d="M18.5 2.305a4.16 4.16 0 00-3.417-.901l-3.185.578A3.333 3.333 0 0010 3.056a3.333 3.333 0 00-1.903-1.074l-3.18-.578A4.167 4.167 0 000 5.502v8.995a4.167 4.167 0 003.42 4.099l5.24.952a7.5 7.5 0 002.68 0l5.243-.952a4.167 4.167 0 003.417-4.1V5.502a4.152 4.152 0 00-1.5-3.197zM9.167 17.942c-.07-.01-.14-.021-.21-.034l-5.238-.952a2.5 2.5 0 01-2.052-2.46V5.502a2.5 2.5 0 012.95-2.459l3.183.583a1.667 1.667 0 011.367 1.636v12.68zm9.166-3.446a2.5 2.5 0 01-2.052 2.46l-5.238.952c-.07.013-.14.024-.21.034V5.262a1.667 1.667 0 011.369-1.64l3.184-.583a2.5 2.5 0 012.947 2.463v8.995z"
          fill="#868686"
        />
      </g>
    </svg>
  );
}

export default BookIcon;
