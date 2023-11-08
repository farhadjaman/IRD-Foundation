import { SVGProps } from 'react';

const LockIcon = (props: SVGProps<SVGSVGElement>) => (
  // To change the background color when noraml state and hover state, change the tailwind style below
  <div
  // className={`inline-block p-2 rounded-md bg-slate-200 hover:bg-green-600 group `}
  >
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      // To change the outline color of the svg in hovered state, change the value of group-hover:fill-[] below
      className="group-hover:fill-white"
      // To change the outline color of the svg in normal state, change the value of fill attribute below
      fill="#8F95B2"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.3749 2.002C15.2949 2.002 17.6729 4.38 17.6729 7.303L17.6728 8.8796C19.448 9.49741 20.725 11.1874 20.725 13.1708V17.4598C20.725 19.9648 18.688 22.0018 16.183 22.0018H8.542C6.037 22.0018 4 19.9648 4 17.4598V13.1708C4 11.1878 5.27652 9.49805 7.05121 8.87995L7.0519 7.303C7.0579 5.863 7.6149 4.534 8.6199 3.538C9.6259 2.541 10.9539 1.964 12.3749 2.002ZM16.183 10.1288H8.542C6.864 10.1288 5.5 11.4928 5.5 13.1708V17.4598C5.5 19.1378 6.864 20.5018 8.542 20.5018H16.183C17.86 20.5018 19.225 19.1378 19.225 17.4598V13.1708C19.225 11.4928 17.86 10.1288 16.183 10.1288ZM12.3623 13.4546C12.7763 13.4546 13.1123 13.7906 13.1123 14.2046V16.4256C13.1123 16.8396 12.7763 17.1756 12.3623 17.1756C11.9483 17.1756 11.6123 16.8396 11.6123 16.4256V14.2046C11.6123 13.7906 11.9483 13.4546 12.3623 13.4546ZM12.3719 3.502H12.3559C11.3429 3.502 10.3939 3.892 9.6769 4.603C8.9549 5.317 8.5559 6.27 8.5519 7.286L8.551 8.62824H16.172L16.1729 7.303C16.1729 5.207 14.4679 3.502 12.3719 3.502Z"
        fill="transperent"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  </div>
);

export default LockIcon;
