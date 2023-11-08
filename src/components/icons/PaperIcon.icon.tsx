import { SVGProps } from 'react';

const PaperIcon = (props: SVGProps<SVGSVGElement>) => (
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
        d="M13.9755 2.0003C14.0185 2.0003 14.0606 2.00392 14.1015 2.01086L14.2384 2.0117C14.4424 2.0117 14.6374 2.0947 14.7794 2.2417L19.8444 7.5187C19.9784 7.6577 20.0535 7.8447 20.0535 8.0377V17.2037C20.0714 19.7127 18.1174 21.7627 15.6044 21.8647L7.5854 21.8657H7.4764C5.02646 21.8103 3.06157 19.8289 3.00171 17.4029L3.0014 6.4907C3.0594 4.0097 5.1084 2.0117 7.5714 2.0117L13.8495 2.01086C13.8904 2.00392 13.9326 2.0003 13.9755 2.0003ZM13.2254 3.5113L7.5734 3.5117C5.9164 3.5117 4.5404 4.8537 4.5014 6.5087V17.2037C4.4644 18.9167 5.8144 20.3277 7.5104 20.3657H15.5744C17.2434 20.2967 18.5654 18.9097 18.5535 17.2097L18.5534 8.9833L16.5435 8.9843C14.7135 8.9793 13.2255 7.4873 13.2255 5.6593L13.2254 3.5113ZM13.7887 14.6084C14.2027 14.6084 14.5387 14.9444 14.5387 15.3584C14.5387 15.7724 14.2027 16.1084 13.7887 16.1084H8.3887C7.9747 16.1084 7.6387 15.7724 7.6387 15.3584C7.6387 14.9444 7.9747 14.6084 8.3887 14.6084H13.7887ZM11.7438 10.8564C12.1578 10.8564 12.4938 11.1924 12.4938 11.6064C12.4938 12.0204 12.1578 12.3564 11.7438 12.3564H8.3878C7.9738 12.3564 7.6378 12.0204 7.6378 11.6064C7.6378 11.1924 7.9738 10.8564 8.3878 10.8564H11.7438ZM14.7254 4.3523L14.7255 5.6593C14.7255 6.6633 15.5425 7.4813 16.5455 7.4843L17.7314 7.4833L14.7254 4.3523Z"
        fill="transperent"
        fillRule="evenodd"
        clipRule={`evenodd`}
      />
    </svg>
  </div>
);

export default PaperIcon;
