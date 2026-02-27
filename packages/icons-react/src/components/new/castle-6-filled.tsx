import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCastle6Filled = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    className="icon"
    viewBox="0 0 1024 1024"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M256 85.312h512v85.376h-42.688v170.624h213.312v206.4A198.14 198.14 0 0 0 824.96 512c-63.488 0-120 29.696-156.48 75.904A198.78 198.78 0 0 0 512 512c-63.488 0-120 29.696-156.48 75.904A198.78 198.78 0 0 0 199.104 512c-42.304 0-81.536 13.184-113.792 35.712v-206.4h213.312V170.688H256zm214.144 256h85.44v-85.12h-85.44zm354.752 256c62.784 0 113.728 50.944 113.728 113.792v227.584h-227.52V711.04c0-62.848 50.944-113.792 113.792-113.792zM625.728 711.104v227.584h-227.52V711.04a113.792 113.792 0 0 1 227.52 0zm-312.832 0v227.584H85.312V711.04a113.792 113.792 0 0 1 227.584 0z" />
  </svg>
);
export default SvgCastle6Filled;
