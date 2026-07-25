/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FORMS_ENABLED?: string
  readonly VITE_FORMS_ENDPOINT?: string
  readonly VITE_FORMS_TOKEN?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
