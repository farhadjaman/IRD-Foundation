import { SVGProps } from 'react';

const WalletIcon = (props: SVGProps<SVGSVGElement>) => (
  // To change the background color when noraml state and hover state, change the tailwind style below
  // className={`inline-block p-2 rounded-md bg-slate-200 hover:bg-green-600 group `}

  <div
  //   className="inline-block"
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
        d="M21.6389 14.3958H17.5906C16.1042 14.3949 14.8993 13.1909 14.8984 11.7045C14.8984 10.218 16.1042 9.01413 17.5906 9.01321H21.6389"
        stroke="transperent"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.0486 11.6429H17.7369"
        stroke="transperent"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.74766 3H16.3911C19.2892 3 21.6388 5.34951 21.6388 8.24766V15.4247C21.6388 18.3229 19.2892 20.6724 16.3911 20.6724H7.74766C4.84951 20.6724 2.5 18.3229 2.5 15.4247V8.24766C2.5 5.34951 4.84951 3 7.74766 3Z"
        stroke="transperent"
        strokeWidth={1.5}
        fillRule="evenodd"
        clipRule={`evenodd`}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.03558 7.53817H12.4345"
        stroke="transperent"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

export default WalletIcon;
