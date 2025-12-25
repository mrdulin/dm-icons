import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCoinOutlined = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 19 19"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M7.071 3.9a6.071 6.071 0 1 1 0 12.143 6.071 6.071 0 0 1 0-12.143m.506 7.69v-.526h1.518c.28 0 .506-.235.506-.526a.516.516 0 0 0-.506-.526H7.577v-.308L9.96 7.227a.54.54 0 0 0 0-.744.49.49 0 0 0-.716 0L7.071 8.742 4.9 6.482a.49.49 0 0 0-.715 0 .54.54 0 0 0 0 .745l2.381 2.477v.308H5.048a.516.516 0 0 0-.506.526c0 .29.226.526.506.526h1.517v.526H5.048a.516.516 0 0 0-.506.527c0 .29.226.526.506.526h1.517v1.052c0 .29.227.526.506.526.28 0 .506-.235.506-.526v-1.052h1.518c.28 0 .506-.236.506-.526a.516.516 0 0 0-.506-.527zm4.05-7.299a6.07 6.07 0 0 1 3.944 5.68 6.07 6.07 0 0 1-3.944 5.68 7.27 7.27 0 0 0 2.73-5.68 7.27 7.27 0 0 0-2.73-5.68m2.429 0A6.07 6.07 0 0 1 18 9.971a6.07 6.07 0 0 1-3.944 5.68 7.27 7.27 0 0 0 2.73-5.68 7.27 7.27 0 0 0-2.73-5.68" />
  </svg>
);
export default SvgCoinOutlined;
