import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgKlineWeakMagnetOutlined = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    viewBox="0 0 22 22"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m4.727 8.008 5.247-5.245a.495.495 0 0 1 .7 0l2.55 2.549a.495.495 0 0 1 0 .7l-5.247 5.246c-.597.597-.57 1.651.057 2.278.626.627 1.68.654 2.277.056l5.246-5.246a.495.495 0 0 1 .7 0l2.55 2.55a.495.495 0 0 1 0 .7l-5.246 5.246c-2.395 2.395-6.364 2.357-8.778-.057-2.413-2.413-2.452-6.382-.056-8.777m7.445-2.346-1.848-1.848-4.895 4.895c-2.006 2.006-1.974 5.346.056 7.376s5.37 2.061 7.376.056l2.605-2.605-1.375-1.375.7-.7 1.375 1.374 1.59-1.59-1.848-1.848-4.896 4.896c-.97.97-2.594.95-3.606.013l-.073-.07c-1.005-1.005-1.049-2.686-.057-3.678l2.606-2.606-1.38-1.381.7-.7 1.38 1.38z" />
  </svg>
);
export default SvgKlineWeakMagnetOutlined;
