export type ColorTypes = typeof LIGHT_COLORS;

// global color tokens
export const colorVariables = {
  /* frequently used */
  // grayscale
  neutral_0: '#FFFFFF',
  neutral_50: '#FAFAFA',
  neutral_100: '#F5F5F5',
  neutral_150: '#F2F2F2',
  neutral_200: '#E5E5E5',
  neutral_300: '#D4D4D4',
  neutral_400: '#A3A3A3',
  neutral_500: '#A3A3A3',
  neutral_600: '#525252',
  neutral_700: '#404040',
  neutral_800: '#262626',
  neutral_900: '#171717',
  neutral_950: '#0A0A0A',
  neutral_850: '#0F0D0D',
  neutral_550: '#676767',
  // semantic--error
  red_50: '#FEF2F2',
  red_100: '#FEE2E2',
  red_200: '#FECACA',
  red_300: '#FCA5A5',
  red_400: '#F87171',
  red_500: '#EF4444',
  red_600: '#DC2626',
  red_700: '#B91C1C',
  red_800: '#991B1B',
  red_900: '#7F1D1D',
  red_950: '#450A0A',
  // semantic--warning
  yellow_50: '#FEFCE8',
  yellow_100: '#FEF9C3',
  yellow_200: '#FEF08A',
  yellow_300: '#FDE047',
  yellow_400: '#FACC15',
  yellow_500: '#EAB308',
  yellow_600: '#CA8A04',
  yellow_700: '#A16207',
  yellow_800: '#854D0E',
  yellow_900: '#713F12',
  yellow_950: '#422006',
  // semantic--success
  emerald_50: '#ECFDF5',
  emerald_100: '#D1FAE5',
  emerald_200: '#A7F3D0',
  emerald_300: '#6EE7B7',
  emerald_400: '#34D399',
  emerald_500: '#10B981',
  emerald_600: '#059669',
  emerald_700: '#047857',
  emerald_800: '#065F46',
  emerald_900: '#064E3B',
  emerald_950: '#022C22',
  // accent--blue
  blue_50: '#EFF6FF',
  blue_100: '#DBEAFE',
  blue_200: '#BFDBFE',
  blue_300: '#93C5FD',
  blue_400: '#60A5FA',
  blue_500: '#3B82F6',
  blue_600: '#2563EB',
  blue_700: '#1D4ED8',
  blue_800: '#1E40AF',
  blue_900: '#1E3A8A',
  blue_950: '#172554',
  /* rarely used */
  // accent--orange
  orange_50: '#FFF7ED',
  orange_100: '#FFEDD5',
  orange_200: '#FED7AA',
  orange_300: '#FDBA74',
  orange_400: '#FB923C',
  orange_500: '#F97316',
  orange_600: '#EA580C',
  orange_700: '#C2410C',
  orange_800: '#9A3412',
  orange_900: '#7C2D12',
  orange_950: '#431407',
  // accent--green
  green_50: '#F0FDF4',
  green_100: '#DCFCE7',
  green_200: '#BBF7D0',
  green_300: '#86EFAC',
  green_400: '#4ADE80',
  green_500: '#22C55E',
  green_600: '#16A34A',
  green_700: '#15803D',
  green_800: '#166534',
  green_900: '#14532D',
  green_950: '#052E16',
  // accent--teal
  teal_50: '#F0FDFA',
  teal_100: '#CCFBF1',
  teal_200: '#99F6E4',
  teal_300: '#5EEAD4',
  teal_400: '#2DD4BF',
  teal_500: '#14B8A6',
  teal_600: '#0D9488',
  teal_700: '#0F766E',
  teal_800: '#115E59',
  teal_900: '#134E4A',
  teal_950: '#042F2E',
  // accent--cyan
  cyan_50: '#ECFEFF',
  cyan_100: '#CFFAFE',
  cyan_200: '#A5F3FC',
  cyan_300: '#67E8F9',
  cyan_400: '#22D3EE',
  cyan_500: '#06B6D4',
  cyan_600: '#0891B2',
  cyan_700: '#0E7490',
  cyan_800: '#155E75',
  cyan_900: '#164E63',
  cyan_950: '#083344',
  // accent--sky
  sky_50: '#F0F9FF',
  sky_100: '#E0F2FE',
  sky_200: '#BAE6FD',
  sky_300: '#7DD3FC',
  sky_400: '#38BDF8',
  sky_500: '#0EA5E9',
  sky_600: '#0284C7',
  sky_700: '#0369A1',
  sky_800: '#075985',
  sky_900: '#0C4A6E',
  sky_950: '#082F49',
  // accent--indigo
  indigo_50: '#EEF2FF',
  indigo_100: '#E0E7FF',
  indigo_200: '#C7D2FE',
  indigo_300: '#A5B4FC',
  indigo_400: '#818CF8',
  indigo_500: '#6366F1',
  indigo_600: '#4F46E5',
  indigo_700: '#4338CA',
  indigo_800: '#3730A3',
  indigo_900: '#312E81',
  indigo_950: '#1E1B4B',
  // accent--violet
  violet_50: '#F5F3FF',
  violet_100: '#EDE9FE',
  violet_200: '#DDD6FE',
  violet_300: '#C4B5FD',
  violet_400: '#A78BFA',
  violet_500: '#8B5CF6',
  violet_600: '#7C3AED',
  violet_700: '#6D28D9',
  violet_800: '#5B21B6',
  violet_900: '#4C1D95',
  violet_950: '#2E1065',
  // accent--purple
  purple_50: '#FAF5FF',
  purple_100: '#F3E8FF',
  purple_200: '#E9D5FF',
  purple_300: '#D8B4FE',
  purple_400: '#C084FC',
  purple_500: '#A855F7',
  purple_600: '#9333EA',
  purple_700: '#7E22CE',
  purple_800: '#6B21A8',
  purple_900: '#581C87',
  purple_950: '#3B0764',
  // accent--fuchsia
  fuchsia_50: '#FDF4FF',
  fuchsia_100: '#FAE8FF',
  fuchsia_200: '#F5D0FE',
  fuchsia_300: '#F0ABFC',
  fuchsia_400: '#E879F9',
  fuchsia_500: '#D946EF',
  fuchsia_600: '#C026D3',
  fuchsia_700: '#A21CAF',
  fuchsia_800: '#86198F',
  fuchsia_900: '#701A75',
  fuchsia_950: '#4A044E',
  // accent--pink
  pink_50: '#FDF2F8',
  pink_100: '#FCE7F3',
  pink_200: '#FBCFE8',
  pink_300: '#F9A8D4',
  pink_400: '#F472B6',
  pink_500: '#EC4899',
  pink_600: '#DB2777',
  pink_700: '#BE185D',
  pink_800: '#9D174D',
  pink_900: '#831843',
  pink_950: '#500724',
  // accent--rose
  rose_50: '#FFF1F2',
  rose_100: '#FFE4E6',
  rose_200: '#FECDD3',
  rose_300: '#FDA4AF',
  rose_400: '#FB7185',
  rose_500: '#F43F5E',
  rose_600: '#E11D48',
  rose_700: '#BE123C',
  rose_800: '#9F1239',
  rose_900: '#881337',
  rose_950: '#4C0519',

  // grey
  grey_black: '#0C0C0C',
  grey_0: '#FFFFFF',
  grey_25: '#F5F5F5',
  grey_50: '#F3F3F4',
  grey_100: '#DCDDDD',
  grey_200: '#C6C6C7',
  grey_300: '#B0B1B1',
  grey_400: '#9A9B9C',
  grey_500: '#868687',
  grey_600: '#717273',
  grey_800: '#4B4B4C',
  grey_900: '#1C1C1D',

  brand_50: '#E7F7F0',
  brand_100: '#B6E8D2',
  brand_200: '#86D6B5',
  brand_300: '#53C49A',
  brand_400: '#008082',
  brand_500: '#009C6B',
  brand_600: '#008657',
  brand_700: '#007146',
  brand_800: '#005836',
  brand_900: '#004529',

  alert_success_50: '#EEFAF5',
  alert_success_500: '#12B76A',
  alert_success_700: '#0E9254',

  alert_warning_50: '#FDF8EA',
  alert_warning_500: '#EAAA08',
  alert_warning_700: '#C48F07',

  alert_error_50: '#FEF2F2',
  alert_error_500: '#EA4A40',
  alert_error_700: '#BA3B33',
};

// Theme colors
const LIGHT_COLORS = {
  //accordion
  accordion: {
    background: colorVariables.neutral_150,
    title: colorVariables.neutral_900,
    content: colorVariables.neutral_900,
  },

  button: {
    text: colorVariables.neutral_0,
    /// Primary
    primary: colorVariables.brand_500,
    primaryPressed: colorVariables.emerald_800,
    primaryBorder: colorVariables.emerald_800,
    primaryText: colorVariables.neutral_0,
    primaryDisabled: colorVariables.neutral_300,
    primaryDisabledText: colorVariables.neutral_500,

    /// Secondary
    secondary: 'transparent',
    secondaryPressed: colorVariables.neutral_100,
    secondaryBorder: colorVariables.neutral_300,
    secondaryText: colorVariables.neutral_900,
    secondaryDisabled: colorVariables.neutral_0,
    secondaryDisabledText: colorVariables.neutral_300,
    secondaryDisabledBorder: colorVariables.neutral_300,

    /// Destructive
    destructive: colorVariables.neutral_0,
    destructivePressed: colorVariables.neutral_100,
    destructiveText: colorVariables.red_700,
    destructiveBorder: colorVariables.neutral_300,
    destructiveDisabled: colorVariables.neutral_0,
    destructiveDisabledBorder: colorVariables.neutral_300,
    destructiveDisabledText: colorVariables.red_300,

    /// Underline
    underlineText: colorVariables.neutral_900,
    underlineDisabledText: colorVariables.neutral_500,
  },

  // Toggle Switch
  toggleSwitch: {
    toggle: colorVariables.neutral_0,
    toggleBg: colorVariables.neutral_300,
    toggleBgOn: colorVariables.emerald_700,
    toggleDisabled: colorVariables.neutral_200,
    toggleLabel: colorVariables.neutral_950,
  },

  toggleContained: {
    bg: colorVariables.neutral_0,
  },

  // Radio Button
  radioButton: {
    label: colorVariables.neutral_950,

    circle: colorVariables.neutral_200,
    circleSelected: colorVariables.emerald_400,
    labelSelected: colorVariables.neutral_900,

    /// base
    baseBg: 'transparent',
    baseBorder: 'transparent',

    /// selected
    selectedBg: 'transparent',
    selectedBorder: 'transparent',

    /// disabled
    disabledBg: 'transparent',
    disabledBorder: 'transparent',
    disabledCircleOuter: colorVariables.neutral_200,
    disabledText: colorVariables.neutral_300,

    /// Outer circle
    outerCircleSelected: colorVariables.neutral_900,
    outerCircleUnselected: colorVariables.neutral_500,
    /// Inner circle
    innerCircleSelected: colorVariables.neutral_900,
  },

  // Checkbox
  checkbox: {
    checkMark: colorVariables.neutral_50,
    label: colorVariables.neutral_900,
    disabledLabel: colorVariables.neutral_400,

    borderBox: colorVariables.neutral_900,
    borderBoxDisabled: colorVariables.neutral_300,
  },

  // OTP Input
  otpInput: {
    borderHighlight: colorVariables.emerald_600,
    border: colorVariables.neutral_300,
    backgroundColor: colorVariables.neutral_100,
    backgroundHighlight: colorVariables.neutral_50,
  },

  // general
  stroke: {
    general_brand: colorVariables.brand_500,
    general_grey01: colorVariables.grey_50,
    general_grey02: colorVariables.grey_100,
    general_grey03: colorVariables.grey_800,
    status_success: colorVariables.alert_success_500,
    status_warning: colorVariables.alert_warning_500,
    status_error: colorVariables.alert_error_500,
  },

  // Background Colors
  background: {
    primary: colorVariables.neutral_100,
    secondary: colorVariables.neutral_0,
  },
  text: {
    general_strong: colorVariables.grey_900,
    general_medium: colorVariables.grey_500,
    general_light: colorVariables.grey_300,
    general_white: colorVariables.grey_50,
    general_brand: colorVariables.brand_500,
    general_success: colorVariables.alert_success_700,
    general_warning: colorVariables.alert_warning_700,
    general_error: colorVariables.alert_error_700,

    // modal
    modal_title: colorVariables.grey_900,
    modal_subtitle: colorVariables.grey_500,

    // navigation
    navigation_active: colorVariables.brand_500,
    navigation_inactive: colorVariables.grey_500,
    navigation_title_top: colorVariables.grey_900,

    // button
    button_white: colorVariables.grey_0,
    button_brand: colorVariables.brand_500,
    button_brand_secondary: colorVariables.brand_300,
    button_text_strong: colorVariables.grey_900,
    button_text_medium: colorVariables.grey_500,
    button_text_light: colorVariables.grey_300,

    // card
    card_white: colorVariables.grey_0,
    card_black: colorVariables.grey_900,
    card_grey: colorVariables.grey_500,

    // popup
    popup_white: colorVariables.grey_0,
    popup_black: colorVariables.grey_900,
    popup_grey: colorVariables.grey_500,
  },

  // surface
  surface: {
    general_bg: colorVariables.grey_black,
    general_white: colorVariables.grey_0,
    general_level02: colorVariables.grey_25,
    general_level03: colorVariables.grey_50,
    general_grey200: colorVariables.grey_200,
    general_dark: colorVariables.grey_900,
    general_brand: colorVariables.brand_500,
    general_brand200: colorVariables.brand_200,
    general_yellow: colorVariables.yellow_500,

    // button
    button_pri500: colorVariables.brand_500,
    button_pri400: colorVariables.brand_400,
    button_pri300: colorVariables.brand_300,
    button_pri200: colorVariables.brand_200,
    button_pri100: colorVariables.brand_100,
    button_pri50: colorVariables.brand_50,
    button_neu200: colorVariables.grey_200,
    button_neu300: colorVariables.grey_300,
    button_neu400: colorVariables.grey_400,
    button_neu500: colorVariables.grey_500,
    button_neu900: colorVariables.grey_900,

    // card
    card_brand01: colorVariables.brand_500,
    card_brand02: colorVariables.alert_success_700,

    tabs_brand: colorVariables.brand_500,
    tabs_white: colorVariables.grey_0,
  },

  icons: {
    general_white: colorVariables.grey_0,
    general_black: colorVariables.grey_900,
    general_grey01: colorVariables.grey_50,
    general_grey02: colorVariables.grey_100,
    general_brand: colorVariables.brand_500,
    general_error: colorVariables.alert_error_700,
    general_yellow: colorVariables.alert_warning_700,
  },
};

const DARK_COLORS: ColorTypes = {
  //accordion
  accordion: {
    background: colorVariables.neutral_150,
    title: colorVariables.neutral_200,
    content: colorVariables.neutral_100,
  },

  button: {
    text: colorVariables.neutral_0,

    /// Primary
    primary: colorVariables.brand_500,
    primaryPressed: colorVariables.emerald_800,
    primaryBorder: colorVariables.emerald_800,
    primaryText: colorVariables.neutral_950,
    primaryDisabled: colorVariables.neutral_500,
    primaryDisabledText: colorVariables.neutral_700,

    /// Secondary
    secondary: 'transparent',
    secondaryPressed: colorVariables.neutral_700,
    secondaryText: colorVariables.neutral_50,
    secondaryBorder: colorVariables.neutral_600,
    secondaryDisabled: 'transparent',
    secondaryDisabledText: colorVariables.neutral_600,
    secondaryDisabledBorder: colorVariables.neutral_600,

    /// Destructive
    destructive: colorVariables.neutral_0,
    destructivePressed: colorVariables.neutral_700,
    destructiveText: colorVariables.red_600,
    destructiveBorder: colorVariables.neutral_600,
    destructiveDisabledBorder: colorVariables.neutral_600,
    destructiveDisabled: colorVariables.neutral_300,
    destructiveDisabledText: colorVariables.neutral_500,

    /// Underline
    underlineText: colorVariables.neutral_900,
    underlineDisabledText: colorVariables.neutral_500,
  },

  // Toggle Switch
  toggleSwitch: {
    toggle: colorVariables.neutral_0,
    toggleBg: colorVariables.neutral_700,
    toggleBgOn: colorVariables.emerald_800,
    toggleDisabled: colorVariables.neutral_200,
    toggleLabel: colorVariables.neutral_200,
  },

  toggleContained: {
    bg: colorVariables.neutral_900,
  },

  // Radio Button
  radioButton: {
    label: colorVariables.neutral_50,

    circle: colorVariables.neutral_50,
    circleSelected: colorVariables.neutral_50,
    labelSelected: colorVariables.neutral_0,
    /// base
    baseBg: 'transparent',
    baseBorder: 'transparent',
    /// selected
    selectedBg: 'transparent',
    selectedBorder: 'transparent',
    /// disabled
    disabledBg: 'transparent',
    disabledCircleOuter: colorVariables.neutral_600,
    disabledBorder: 'transparent',
    disabledText: colorVariables.neutral_600,

    /// Outer circle
    outerCircleSelected: colorVariables.neutral_50,
    outerCircleUnselected: colorVariables.neutral_500,

    /// Inner circle
    innerCircleSelected: colorVariables.neutral_50,
  },

  // Checkbox
  checkbox: {
    checkMark: colorVariables.neutral_900,

    label: colorVariables.neutral_50,
    borderBox: colorVariables.neutral_50,

    disabledLabel: colorVariables.neutral_600,
    borderBoxDisabled: colorVariables.neutral_600,
  },

  // OTP Input
  otpInput: {
    borderHighlight: colorVariables.emerald_600,
    border: colorVariables.neutral_400,
    backgroundColor: colorVariables.neutral_800,
    backgroundHighlight: colorVariables.neutral_900,
  },

  // general
  stroke: {
    general_brand: colorVariables.brand_500,
    general_grey01: colorVariables.grey_50,
    general_grey02: colorVariables.grey_100,
    general_grey03: colorVariables.grey_800,
    status_success: colorVariables.alert_success_500,
    status_warning: colorVariables.alert_warning_500,
    status_error: colorVariables.alert_error_500,
  },

  //

  // Background Colors
  background: {
    primary: colorVariables.neutral_900,
    secondary: colorVariables.neutral_800,
  },
  text: {
    general_strong: colorVariables.grey_0,
    general_medium: colorVariables.grey_50,
    general_light: colorVariables.grey_100,
    general_white: colorVariables.grey_0,
    general_brand: colorVariables.brand_500,
    general_success: colorVariables.alert_success_700,
    general_warning: colorVariables.alert_warning_700,
    general_error: colorVariables.alert_error_700,

    // modal
    modal_title: colorVariables.grey_0,
    modal_subtitle: colorVariables.grey_50,

    // navigation
    navigation_active: colorVariables.brand_500,
    navigation_inactive: colorVariables.grey_50,
    navigation_title_top: colorVariables.grey_0,

    // button
    button_white: colorVariables.grey_0,
    button_brand: colorVariables.brand_500,
    button_brand_secondary: colorVariables.brand_300,
    button_text_strong: colorVariables.grey_0,
    button_text_medium: colorVariables.grey_50,
    button_text_light: colorVariables.grey_100,

    // card
    card_white: colorVariables.grey_0,
    card_black: colorVariables.grey_900,
    card_grey: colorVariables.grey_500,

    // popup
    popup_white: colorVariables.grey_0,
    popup_black: colorVariables.grey_900,
    popup_grey: colorVariables.grey_500,
  },

  // surface
  surface: {
    general_bg: colorVariables.grey_black,
    general_white: colorVariables.grey_0,
    general_level02: colorVariables.grey_25,
    general_level03: colorVariables.grey_50,
    general_grey200: colorVariables.grey_200,
    general_dark: colorVariables.grey_900,
    general_brand: colorVariables.brand_500,
    general_brand200: colorVariables.brand_200,
    general_yellow: colorVariables.yellow_500,

    // button
    button_pri500: colorVariables.brand_500,
    button_pri400: colorVariables.brand_400,
    button_pri300: colorVariables.brand_300,
    button_pri200: colorVariables.brand_200,
    button_pri100: colorVariables.brand_100,
    button_pri50: colorVariables.brand_50,
    button_neu200: colorVariables.grey_200,
    button_neu300: colorVariables.grey_300,
    button_neu400: colorVariables.grey_400,
    button_neu500: colorVariables.grey_500,
    button_neu900: colorVariables.grey_900,

    // card
    card_brand01: colorVariables.brand_500,
    card_brand02: colorVariables.alert_success_700,

    tabs_brand: colorVariables.brand_500,
    tabs_white: colorVariables.grey_0,
  },

  icons: {
    general_white: colorVariables.grey_0,
    general_black: colorVariables.grey_900,
    general_grey01: colorVariables.grey_50,
    general_grey02: colorVariables.grey_100,
    general_brand: colorVariables.brand_500,
    general_error: colorVariables.alert_error_700,
    general_yellow: colorVariables.alert_warning_700,
  },
};

export { DARK_COLORS, LIGHT_COLORS };
