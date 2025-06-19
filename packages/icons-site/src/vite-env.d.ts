/// <reference types="vite/client" />

interface ImportMetaEnv  {
  readonly VITE_ICONS_REACT_PACKAGE_VERSION: string;
}
interface ImportMeta {
  readonly env: ImportMetaEnv
}