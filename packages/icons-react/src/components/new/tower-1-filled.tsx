import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTower1Filled = ({
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
    <path d="M554.624 42.688v42.624h128v256h-40c8.512 76.16 37.248 179.2 77.568 280.832C765.248 735.68 821.312 839.104 871.744 896h66.88v85.312H603.84l-5.888-35.456-.128-.512a163 163 0 0 0-3.648-14.272 168 168 0 0 0-15.04-34.944c-14.336-24.576-34.56-42.816-67.2-42.816-32.512 0-52.736 18.24-67.136 42.88a167.9 167.9 0 0 0-18.688 49.152l-.064.448-5.888 35.52H85.312V896h66.88c50.432-56.96 106.56-160.32 151.616-273.92 40.32-101.632 69.056-204.608 77.568-280.768h-40.064v-256h128V42.688zM467.2 341.312c-8.576 89.6-41.472 204.928-84.032 312.32C348.352 741.44 305.088 828.864 259.52 896h92.032c4.48-12.544 10.752-27.584 19.648-42.88C394.176 813.76 437.888 768 512 768c74.176 0 117.952 45.76 140.928 85.12 8.896 15.296 15.168 30.336 19.584 42.88h92.032c-45.568-67.2-88.768-154.56-123.648-242.432-42.624-107.328-75.52-222.592-84.096-312.256z" />
  </svg>
);
export default SvgTower1Filled;
