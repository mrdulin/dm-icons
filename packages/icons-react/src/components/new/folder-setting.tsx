import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFolderSetting = ({
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
    <path d="M42.688 106.688h361.856l85.312 106.624h491.52v256H896V298.688H448.832L363.52 192H128v618.688h341.376V896H42.688zm768 394.624v58.752c30.528 7.808 57.728 23.936 79.104 45.696l50.88-29.376 42.688 73.92-50.88 29.312a170.9 170.9 0 0 1 0 91.392l50.88 29.44-42.688 73.856-50.88-29.44c-21.376 21.824-48.64 37.888-79.104 45.76v58.688h-85.312v-58.688a170.5 170.5 0 0 1-79.104-45.696l-50.88 29.376-42.688-73.92 50.816-29.376a170.9 170.9 0 0 1 0-91.392l-50.816-29.312 42.688-73.92 50.88 29.44c21.376-21.824 48.576-37.952 79.104-45.76v-58.752zM693.312 684.096a84.93 84.93 0 0 0 0 82.496l1.536 2.688a85.312 85.312 0 0 0 146.304 0l1.6-2.688a84.93 84.93 0 0 0 0-82.56l-1.6-2.624a85.248 85.248 0 0 0-146.304 0z" />
  </svg>
);
export default SvgFolderSetting;
