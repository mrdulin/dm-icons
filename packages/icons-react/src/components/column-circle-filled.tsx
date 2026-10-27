import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgColumnCircleFilled = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 17 17"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      d="M2.938 2.923a6.737 6.737 0 0 1 9.965 9.045l1.68 1.68-.92.92-1.68-1.68a6.737 6.737 0 0 1-9.045-9.965M6.783 5.09H4.867v.92h1.677q-.091.34-.19.68H4.203v.92h1.881q-.073.253-.146.496-.176.591-.344 1.056l.768.005v.003h2.785q-.32.325-.68.672-.215.203-.42.395A21 21 0 0 0 7.282 10q-.537-.16-1-.264l-.513.72q.48.129 1.017.304a23 23 0 0 1 2.055.776q.464.2.768.384l.568-.84a11 11 0 0 0-.816-.368q-.15-.06-.309-.12.15-.146.3-.296.441-.432.857-.848.415-.425.76-.792l-.736-.432-.16.056H6.894l.037-.12q.083-.27.166-.552h4.25v-.92h-3.98q.096-.338.186-.68h3.218v-.92H7.796q.091-.335.174-.656l-1-.128q-.087.38-.187.784"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgColumnCircleFilled;
