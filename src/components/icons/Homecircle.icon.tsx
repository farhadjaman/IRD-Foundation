function HomeIcon(props: React.SVGProps<SVGSVGElement>) {
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
          d="M19.267 8.055l-6.32-6.321a4.173 4.173 0 00-5.894 0L.733 8.055A2.482 2.482 0 000 9.823v8.18a2.5 2.5 0 002.5 2.5h15a2.5 2.5 0 002.5-2.5v-8.18a2.481 2.481 0 00-.733-1.768zM12.5 18.837h-5v-3.278a2.5 2.5 0 015 0v3.278zm5.833-.833a.834.834 0 01-.833.833h-3.333v-3.278a4.167 4.167 0 00-8.334 0v3.278H2.5a.833.833 0 01-.833-.833V9.823a.84.84 0 01.244-.59l6.32-6.319a2.507 2.507 0 013.537 0l6.321 6.322a.84.84 0 01.244.587v8.18z"
          fill="#868686"
        />
      </g>
    </svg>
  );
}

export default HomeIcon;
