import * as React from 'react';

function PlayIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={44} height={44} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx={22} cy={22} r={22} fill="#1FA45B" />
      <path
        d="M31.5 21.634a1 1 0 010 1.732l-14.25 8.227a1 1 0 01-1.5-.866V14.273a1 1 0 011.5-.866l14.25 8.227z"
        fill="#fff"
      />
    </svg>
  );
}

export default PlayIcon;
