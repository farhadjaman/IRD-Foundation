import * as React from 'react';

function ReportIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M7.86 1.999h8.28L22 7.859v8.28l-5.86 5.86H7.86L2 16.139v-8.28l5.86-5.86zM12 7.999v4M12 16.001h.01"
        stroke="#868686"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ReportIcon;
