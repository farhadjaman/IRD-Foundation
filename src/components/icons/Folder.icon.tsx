import * as React from 'react';

function FolderIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M7 7h10m2 4H5h14zm0 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2h14zm0 0V9a2 2 0 00-2-2l2 4zM5 11V9a2 2 0 012-2l-2 4zm2-4V5a2 2 0 012-2h6a2 2 0 012 2v2H7z"
        stroke="#868686"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default FolderIcon;
