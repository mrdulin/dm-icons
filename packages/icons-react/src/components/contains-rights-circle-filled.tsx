import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgContainsRightsCircleFilled = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 18 18"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <circle cx={9} cy={9} r={9} fill="currentColor" fillOpacity={0.2} />
    <path
      fill="currentColor"
      d="M6.444 7.948v6.204H5.58V7.924a13 13 0 0 1-1.752 3.432l-.384-.972a10.65 10.65 0 0 0 2.112-4.008h-1.86v-.828H5.58v-2.34h.864v2.34h1.584v.828H6.444v.684a27 27 0 0 1 1.824 1.956l-.492.732a30 30 0 0 0-1.332-1.8m6.432-3.192h-3.24c.144 1.848.648 3.504 1.524 4.968.864-1.44 1.428-3.096 1.716-4.968m-2.22 5.736c-1.068-1.728-1.692-3.636-1.86-5.736h-.48v-.828h5.4v.816c-.348 2.244-1.032 4.176-2.04 5.784a13.2 13.2 0 0 0 2.904 2.94l-.588.696c-1.128-.888-2.076-1.86-2.82-2.904-.84 1.14-1.872 2.1-3.084 2.892l-.552-.696c1.26-.84 2.304-1.824 3.12-2.964"
    />
  </svg>
);
export default SvgContainsRightsCircleFilled;
