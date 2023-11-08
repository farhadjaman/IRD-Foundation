import { SVGProps } from 'react';

const DocumentIcon = (props: SVGProps<SVGSVGElement>) => (
  // To change the background color when noraml state and hover state, change the tailwind style below
  <div
  // className={`inline-block p-2 rounded-md bg-slate-200 hover:bg-green-600 group`}
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
        d="M15.7162 16.2234H8.49622"
        stroke="transperent"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.7162 12.0369H8.49622"
        stroke="transperent"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.2513 7.8601H8.49634"
        stroke="transperent"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.9086 2.7498C15.9086 2.7498 8.23161 2.7538 8.21961 2.7538C5.45961 2.7708 3.75061 4.5868 3.75061 7.3568V16.5528C3.75061 19.3368 5.47261 21.1598 8.25661 21.1598C8.25661 21.1598 15.9326 21.1568 15.9456 21.1568C18.7056 21.1398 20.4156 19.3228 20.4156 16.5528V7.3568C20.4156 4.5728 18.6926 2.7498 15.9086 2.7498Z"
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

export default DocumentIcon;
