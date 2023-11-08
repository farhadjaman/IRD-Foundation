import * as React from 'react';

function LanguageIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M12.751 5C11.783 10.77 8.07 15.61 3 18.129M3 5h12H3zm6-2v2-2zm1.048 11.5A18.022 18.022 0 016.412 9l3.636 5.5zM12.5 18h7-7zM11 21l5-10 5 10H11z"
        stroke="#1FA45B"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default LanguageIcon;
