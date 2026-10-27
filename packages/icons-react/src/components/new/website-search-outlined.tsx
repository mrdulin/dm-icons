import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgWebsiteSearchOutlined = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 16 16"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill="currentColor" clipPath="url(#clip0_31583_165090)">
      <path d="M15.335 7.785a5.5 5.5 0 0 0-1.334-.577v-.877h-12V14h5.208q.203.712.577 1.333H.668V.667h14.667zm-8.02 2.882c-.15.423-.249.87-.29 1.333H4v-1.333zM9.341 8c-.518.364-.97.816-1.335 1.333H4V8zM2 4.998h12V2h-12zm2.67-.83H3.335V2.834h1.336z" />
      <path d="M12.167 10.333a1.833 1.833 0 1 0 0 3.667 1.833 1.833 0 0 0 0-3.667M9 12.167a3.167 3.167 0 1 1 5.827 1.718L15.943 15l-.942.944-1.117-1.115A3.167 3.167 0 0 1 9 12.167" />
    </g>
    <defs>
      <clipPath id="clip0_31583_165090">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgWebsiteSearchOutlined;
