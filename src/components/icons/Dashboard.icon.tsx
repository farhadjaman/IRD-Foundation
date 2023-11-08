import { SVGProps } from 'react';
const DashboardIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={21}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="group-hover:fill-none group-hover:stroke-white"
    stroke="#8F95B2"
    {...props}
  >
    <path
      d="M5.245 13.781l2.993-3.89 3.414 2.682 2.93-3.78"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx={17.995}
      cy={3.2}
      r={1.922}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.925 2.12H5.657C2.645 2.12.778 4.253.778 7.264v8.083c0 3.011 1.83 5.135 4.879 5.135h8.604c3.011 0 4.879-2.124 4.879-5.135v-7.04"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default DashboardIcon;
