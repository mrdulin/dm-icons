import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgContainsRightsSquareOutlined = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12.35 4.628c-.307 1.99-.891 3.707-1.77 5.16.681.945 1.529 1.803 2.563 2.573l-.716.847c-.968-.78-1.793-1.627-2.453-2.53a11 11 0 0 1-2.717 2.508l-.671-.846c1.11-.737 2.035-1.607 2.76-2.608C8.435 8.204 7.896 6.51 7.72 4.64h-.407V3.639h5.039zm-3.63.012c.132 1.517.54 2.903 1.232 4.146.693-1.21 1.155-2.596 1.397-4.146z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M5.75 5.123h1.364v1.001H5.75v.506a22 22 0 0 1 1.617 1.673l-.605.913A29 29 0 0 0 5.75 7.74v5.423H4.716V7.862c-.374 1.045-.835 2.003-1.407 2.86l-.463-1.188a9.6 9.6 0 0 0 1.826-3.41H3.077v-1h1.639V3.065H5.75z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zM2 .8A1.2 1.2 0 0 0 .8 2v12A1.2 1.2 0 0 0 2 15.2h12a1.2 1.2 0 0 0 1.2-1.2V2A1.2 1.2 0 0 0 14 .8z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgContainsRightsSquareOutlined;
