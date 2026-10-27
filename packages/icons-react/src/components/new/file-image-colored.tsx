import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFileImageColored = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="1em"
    height="1em"
    viewBox="0 0 28 28"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath="url(#clip0_21280_28712)">
      <path
        fill="#72A9FE"
        d="M2.127 2.625A2.625 2.625 0 0 1 4.752 0h13.22l7.901 6.993v18.382A2.625 2.625 0 0 1 23.248 28H4.752a2.625 2.625 0 0 1-2.625-2.625z"
      />
      <path
        fill="#fff"
        d="M10.92 12.52c.363 0 .694.202.863.523l2.464 4.718 1.722-2.282a.97.97 0 0 1 1.552 0l4.416 5.847H5.727l4.329-8.283a.98.98 0 0 1 .863-.522m7.483-2.777c1.112 0 2.012.9 2.012 2.013s-.9 2.013-2.012 2.013-2.013-.9-2.013-2.013.9-2.013 2.012-2.013"
      />
      <path
        fill="#D6E3F7"
        fillOpacity={0.7}
        d="M19.613 1.452v.679L17.972.679H4.752a2.625 2.625 0 0 0-2.625 2.625v-.679A2.625 2.625 0 0 1 4.752 0h13.22z"
      />
      <path fill="#AAC9ED" d="m17.998 0 7.875 7h-7.875z" />
      <path
        fill="url(#pattern0_21280_28712)"
        d="M4.376 27.767h19.25v1.75H4.376z"
      />
      <path
        fill="url(#pattern1_21280_28712)"
        d="M4.376 27.767h19.25v1.75H4.376z"
      />
    </g>
    <defs>
      <pattern
        id="pattern0_21280_28712"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#image0_21280_28712" transform="scale(.04545 .5)" />
      </pattern>
      <pattern
        id="pattern1_21280_28712"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#image0_21280_28712" transform="scale(.04545 .5)" />
      </pattern>
      <clipPath id="clip0_21280_28712">
        <path fill="#fff" d="M0 0h28v28H0z" />
      </clipPath>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAACCAYAAABc8yy2AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAArSURBVHgBtccxCgAgDEPRfPT+JxaiDoUu7dbAIwm2kbSSXez4fk4H+D2TC08SDQKdl7oIAAAAAElFTkSuQmCC"
        id="image0_21280_28712"
        width={22}
        height={2}
        preserveAspectRatio="none"
      />
    </defs>
  </svg>
);
export default SvgFileImageColored;
