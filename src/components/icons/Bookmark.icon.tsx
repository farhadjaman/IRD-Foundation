import * as React from 'react';

function BookmarkIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
        stroke="#868686"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default BookmarkIcon;
