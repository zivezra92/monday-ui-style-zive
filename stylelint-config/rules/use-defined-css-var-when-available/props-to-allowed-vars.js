const SPACINGS = [
  "--spacing-xs",
  "--spacing-small",
  "--spacing-medium",
  "--spacing-large",
  "--spacing-xl",
  "--spacing-xxl",
  "--spacing-xxxl",
];

const BORDER_RADIUSES = ["--border-radius-small", "--border-radius-medium", "--border-radius-big"];

const FONT_SIZES = [
  // since "--font-size-10" and "--font-size-20" have the same value, we need to pick only one of them as "valid value", to allow autofix
  // "--font-size-10",
  "--font-size-20",
  "--font-size-30",
  "--font-size-40",
  "--font-size-50",
  "--font-size-60",
  "--font-size-h1",
  "--font-size-h2",
  "--font-size-h3",
  "--font-size-h4",
  "--font-size-h5",
  "--font-size-general-label",
  "--font-size-paragraph",
  "--font-size-subtext",
];

const FONT_WEIGHTS = ["--font-weight-very-light", "--font-weight-light", "--font-weight-normal", "--font-weight-bold"];

const FONT_LINE_HEIGHTS = [
  "--font-line-height-10",
  // since "--font-line-height-20", "--font-line-height-30" and "--font-line-height-40" have the same value, we need to pick only one of them as "valid value", to allow autofix
  // "--font-line-height-20",
  // "--font-line-height-30",
  "--font-line-height-40",
  "--font-line-height-50",
  "--font-line-height-60",
  "--font-line-height-h1",
  "--font-line-height-h2",
  "--font-line-height-h3",
  "--font-line-height-h4",
  "--font-line-height-h5",
  "--font-line-height-general-label",
  "--font-line-height-paragraph",
  "--font-line-height-subtext",
];

const ANIMATION_TIMING = ["--animation-timing-enter", "--animation-timing-exit", "--animation-timing-transition", "--animation-timing-emphasize", "--expand-animation-timing"];

const ANIMATION_DURATION = ["--animation-productive-short", "--animation-productive-medium", "--animation-productive-medium", "--animation-productive-long", "--animation-expressive-short", "--animation-expressive-medium", "--animation-expressive-long"];

const SPACING_PROPS = [
  "padding",
  "padding-top",
  "padding-bottom",
  "padding-left",
  "padding-right",
  "padding-inline",
  "padding-inline-end",
  "padding-inline-start",
  "padding-block",
  "padding-block-end",
  "padding-block-start",

  "margin",
  "margin-top",
  "margin-bottom",
  "margin-left",
  "margin-right",
  "margin-inline",
  "margin-inline-end",
  "margin-inline-start",
  "margin-block",
  "margin-block-end",
  "margin-block-start",

  "inset",
  "inset-end",
  "inset-start",
];

const BORDER_RADIUSES_PROPS = [
  "border-radius",
  "border-top-left-radius",
  "border-top-right-radius",
  "border-bottom-left-radius",
  "border-bottom-right-radius",
  "border-start-start-radius",
  "border-start-end-radius",
  "border-end-start-radius",
  "border-end-end-radius",
];

const TIMING_FUNCTION_PROPS = ["transition", "transition-timing", "animation", "animation-timing-function"];

const DURATION_FUNCTION_PROPS = ["transition", "transition-duration", "animation", "animation-duration"];

function mapPropsToAllowedVars(propNames, allowedVars) {
  allowedVars = Array.isArray(allowedVars) ? allowedVars : [allowedVars];
  propNames = Array.isArray(propNames) ? propNames : [propNames];

  return propNames.reduce((result, propName) => ({ ...result, [propName]: allowedVars }), {});
}

// List the CSS props we want to lint, and map each one to the values we would prefer to use.
// For example, let's say that the key "border-radius" is mapped to --border-radius-small and --border-radius-medium.
// This means that if --border-radius-small or --border-radius-medium can be used while linting a rule with the property "border-radius", we will show an error

const PROPS_TO_ALLOWED_VARS = {
  ...mapPropsToAllowedVars(SPACING_PROPS, SPACINGS),
  ...mapPropsToAllowedVars(BORDER_RADIUSES_PROPS, BORDER_RADIUSES),
  ...mapPropsToAllowedVars("line-height", FONT_LINE_HEIGHTS),
  ...mapPropsToAllowedVars("font-weight", FONT_WEIGHTS),
  ...mapPropsToAllowedVars("font-size", FONT_SIZES),
  ...mapPropsToAllowedVars(TIMING_FUNCTION_PROPS, ANIMATION_TIMING),
  ...mapPropsToAllowedVars(DURATION_FUNCTION_PROPS, ANIMATION_DURATION),

  "font-family": ["--font-family"],
  "-webkit-font-smoothing": ["--font-smoothing-webkit"],
  "-moz-osx-font-smoothing": ["--font-smoothing-moz"],
};

module.exports = {
  PROPS_TO_ALLOWED_VARS,
};