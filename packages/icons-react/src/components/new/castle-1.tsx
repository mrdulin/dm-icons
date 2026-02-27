import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCastle1 = ({
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
    <path d="M298.688 85.312v85.376H384V85.376h85.376v85.312h85.312V85.376H640v85.312h85.376V85.376h85.312V256H768v341.376h128v-42.688h85.376v384H42.688v-384H128v42.688h128V256h-42.624V85.312zM341.376 256v597.376h128V554.688h85.312v298.688h128V256zM768 853.376h128V682.688H768zm-512 0V682.688H128v170.688zm128-512.128h85.504v85.504H384zm170.688 0h85.504v85.504h-85.504z" />
  </svg>
);
export default SvgCastle1;
