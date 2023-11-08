import { SVGProps } from 'react';

const ChartIcon = (props: SVGProps<SVGSVGElement>) => (
  // To change the background color when noraml state and hover state, change the tailwind style below
  <div
  // className={`inline-block p-2 rounded-md bg-slate-200 hover:bg-green-600 group `}
  >
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      // Here Stroke color will change the color of the outline of the svg
      // To change the primary stroke color, change the value of stroke below
      stroke="#8F95B2"
      fill="none"
      // Here the group-hober:stroke color will be the color of stroke when hovered over the svg
      // To change the stroke color when hovered, change the value of group-hover:stroke-[]
      className="group-hover:fill-none group-hover:stroke-white"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.37145 10.2017V17.0618"
        stroke="transperent"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.0381 6.91913V17.0618"
        stroke="transperent"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.6286 13.8268V17.0618"
        stroke="transperent"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.6857 2H7.31429C4.04762 2 2 4.31208 2 7.58516V16.4148C2 19.6879 4.0381 22 7.31429 22H16.6857C19.9619 22 22 19.6879 22 16.4148V7.58516C22 4.31208 19.9619 2 16.6857 2Z"
        stroke="transperent"
        strokeWidth={1.5}
        fillRule="evenodd"
        clipRule={`evenodd`}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

export default ChartIcon;
