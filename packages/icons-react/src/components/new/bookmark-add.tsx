import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBookmarkAdd = ({
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
    <path d="M853.376 0v128h128v85.312h-128v128H768v-128H640V128h128V0zM170.688 128h384v85.312H256v599.744l256-182.848 256 182.848V426.688h85.376v552.256L512 735.104l-341.312 243.84z" />
  </svg>
);
export default SvgBookmarkAdd;
