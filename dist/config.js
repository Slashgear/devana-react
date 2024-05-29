const API_URL = `https://api.devana.ai/`;
const API_VERSION = `v1`;
const MARKDOWN_PROPS = {
  /**
   * The style object for the Markdown preview.
   */
  style: {
    backgroundColor: "transparent",
    borderRadius: "4px",
    overflow: "auto"
  },
  /**
   * The wrapper element for the Markdown preview.
   */
  wrapperElement: {
    "data-color-mode": "light"
  },
  /**
   * Whether to skip HTML rendering in the Markdown preview.
   */
  skipHtml: true
};
export {
  API_URL,
  API_VERSION,
  MARKDOWN_PROPS
};
