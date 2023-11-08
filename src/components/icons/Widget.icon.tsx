function WidgetIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={25} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M8 3.25H5A2.25 2.25 0 002.75 5.5v3A2.25 2.25 0 005 10.75h3a2.25 2.25 0 002.25-2.25v-3A2.25 2.25 0 008 3.25zM19 3.25h-3a2.25 2.25 0 00-2.25 2.25v3A2.25 2.25 0 0016 10.75h3a2.25 2.25 0 002.25-2.25v-3A2.25 2.25 0 0019 3.25zM19 14.25h-3a2.25 2.25 0 00-2.25 2.25v3A2.25 2.25 0 0016 21.75h3a2.25 2.25 0 002.25-2.25v-3A2.25 2.25 0 0019 14.25zM8 14.25H5a2.25 2.25 0 00-2.25 2.25v3A2.25 2.25 0 005 21.75h3a2.25 2.25 0 002.25-2.25v-3A2.25 2.25 0 008 14.25z"
        stroke="#868686"
        strokeWidth={1.5}
      />
    </svg>
  );
}

export default WidgetIcon;
