import { SVGProps } from 'react';

const BagIcon = (props: SVGProps<SVGSVGElement>) => (
  // To change the background color when noraml state and hover state, change the tailwind style below
  //className={`inline-block p-2 rounded-md bg-slate-200 hover:bg-green-600 group`}
  <div>
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
        d="M17.0137 22H8.66592C5.59955 22 3.24715 20.8924 3.91534 16.4348L4.69338 10.3936C5.10528 8.16931 6.52404 7.31805 7.76889 7.31805H17.9474C19.2105 7.31805 20.5469 8.23339 21.0229 10.3936L21.8009 16.4348C22.3684 20.389 20.0801 22 17.0137 22Z"
        stroke="transperent"
        strokeWidth={1.5}
        fillRule="evenodd"
        clipRule={`evenodd`}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.151 7.09839C17.151 4.71232 15.2167 2.77802 12.8307 2.77802V2.77802C11.6817 2.77315 10.5781 3.22618 9.76388 4.03694C8.94969 4.84769 8.49199 5.94938 8.492 7.09839V7.09839"
        stroke="transperent"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.7963 11.6018H15.7506"
        stroke="transperent"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.96572 11.6018H9.91995"
        stroke="transperent"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

export default BagIcon;
