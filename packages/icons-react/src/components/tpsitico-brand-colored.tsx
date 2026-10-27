import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTpsiticoBrandColored = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <defs>
      <linearGradient
        id="linearGradient-1"
        x1="100.724%"
        x2="-.539%"
        y1="50.022%"
        y2="50.022%"
      >
        <stop offset="0%" stopColor="#BA1B2C" />
        <stop offset="33.91%" stopColor="#B81B2B" />
        <stop offset="54.3%" stopColor="#B11B2A" />
        <stop offset="71.11%" stopColor="#A41B27" />
        <stop offset="85.89%" stopColor="#911A22" />
        <stop offset="99.35%" stopColor="#7A171C" />
        <stop offset="100%" stopColor="#79171C" />
      </linearGradient>
      <linearGradient
        id="linearGradient-2"
        x1="-.131%"
        x2="99.832%"
        y1="50.022%"
        y2="50.022%"
      >
        <stop offset="0%" stopColor="#56B5B8" />
        <stop offset="24.92%" stopColor="#56B4B8" />
        <stop offset="39.91%" stopColor="#55AFB7" />
        <stop offset="52.28%" stopColor="#53A7B5" />
        <stop offset="63.21%" stopColor="#519BB2" />
        <stop offset="73.2%" stopColor="#4F8BAD" />
        <stop offset="82.51%" stopColor="#4E77A5" />
        <stop offset="91.25%" stopColor="#4B5F9B" />
        <stop offset="99.4%" stopColor="#494390" />
        <stop offset="100%" stopColor="#49418F" />
      </linearGradient>
      <linearGradient
        id="linearGradient-3"
        x1="49.986%"
        x2="49.986%"
        y1=".033%"
        y2="100.004%"
      >
        <stop offset="0%" stopColor="#AC1F26" />
        <stop offset="47.2%" stopColor="#A81F26" />
        <stop offset="96.02%" stopColor="#9B1E24" />
        <stop offset="100%" stopColor="#9A1E23" />
      </linearGradient>
      <linearGradient
        id="linearGradient-4"
        x1="50.096%"
        x2="50.096%"
        y1="-.204%"
        y2="100.155%"
      >
        <stop offset="0%" stopColor="#57B5B7" />
        <stop offset="14.04%" stopColor="#56B3B6" />
        <stop offset="28.6%" stopColor="#54ACB5" />
        <stop offset="43.4%" stopColor="#52A0B2" />
        <stop offset="58.36%" stopColor="#508FAD" />
        <stop offset="73.46%" stopColor="#4E78A5" />
        <stop offset="88.44%" stopColor="#4B5B99" />
        <stop offset="100%" stopColor="#49418F" />
      </linearGradient>
      <linearGradient
        id="linearGradient-5"
        x1="100.724%"
        x2="-.539%"
        y1="50.106%"
        y2="50.106%"
      >
        <stop offset="0%" stopColor="#BA1B2C" />
        <stop offset="33.91%" stopColor="#B81B2B" />
        <stop offset="54.3%" stopColor="#B11B2A" />
        <stop offset="71.11%" stopColor="#A41B27" />
        <stop offset="85.89%" stopColor="#911A22" />
        <stop offset="99.35%" stopColor="#7A171C" />
        <stop offset="100%" stopColor="#79171C" />
      </linearGradient>
      <linearGradient
        id="linearGradient-6"
        x1="-.131%"
        x2="99.832%"
        y1="50.106%"
        y2="50.106%"
      >
        <stop offset="0%" stopColor="#56B5B8" />
        <stop offset="24.92%" stopColor="#56B4B8" />
        <stop offset="39.91%" stopColor="#55AFB7" />
        <stop offset="52.28%" stopColor="#53A7B5" />
        <stop offset="63.21%" stopColor="#519BB2" />
        <stop offset="73.2%" stopColor="#4F8BAD" />
        <stop offset="82.51%" stopColor="#4E77A5" />
        <stop offset="91.25%" stopColor="#4B5F9B" />
        <stop offset="99.4%" stopColor="#494390" />
        <stop offset="100%" stopColor="#49418F" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="nonzero">
      <path
        fill="url(#linearGradient-1)"
        d="M6.345 24v-6.315s2.53-.559 5.222-.675V24z"
      />
      <path
        fill="url(#linearGradient-2)"
        d="M12.457 24v-6.99c2.669.116 5.221.675 5.221.675V24z"
      />
      <path
        fill="url(#linearGradient-3)"
        d="M7.024 11.977c0-2.587-.585-5.243-.679-5.616V0L0 6.454v11.092L6.345 24v-6.361c.094-.373.68-3.006.68-5.662"
      />
      <path
        fill="url(#linearGradient-4)"
        d="M17.655 0v6.315s-.68 2.842-.68 5.685c0 2.773.68 5.639.68 5.639v6.314L24 17.5V6.408z"
      />
      <path
        fill="url(#linearGradient-5)"
        d="M6.345 0v6.315s2.53.559 5.222.675V0z"
      />
      <path
        fill="url(#linearGradient-6)"
        d="M12.457 0v6.99c2.669-.116 5.221-.675 5.221-.675V0z"
      />
    </g>
  </svg>
);
export default SvgTpsiticoBrandColored;
