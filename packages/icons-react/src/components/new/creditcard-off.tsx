import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCreditcardOff = ({
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
    <path d="M85.312 24.96 999.04 938.752l-60.352 60.352-103.04-103.04H42.688V128h24.96L25.024 85.312l60.288-60.288zM128 213.376V384h195.648L153.024 213.312H128zm0 256v341.376h622.336l-341.312-341.44H128zM323.456 128h657.92l.128 401.856-.192-.128.192 256.128L896 700.416v-231.04H665.088L579.52 384l316.48.064V213.376H409.088zm-110.08 469.376h213.312v85.376H213.312v-85.44z" />
  </svg>
);
export default SvgCreditcardOff;
