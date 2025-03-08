/**
 * Clamp value between min and max amount
 * @param value
 * @param min
 * @param max
 * @returns {number}
 */
export declare const clamp: (value: number, min: number, max: number) => number;
/**
 * Convert RGB to Hex color
 * @param red Value between [0-255]
 * @param green Value between [0-255]
 * @param blue Value between [0-255]
 * @returns {string} Hex string
 */
export declare const rgb2Hex: (red: number, green: number, blue: number) => string;
/**
 * Convert Hex color to RGB
 * @param hex Hex color code
 * @returns {Array<number>} Array containing red, green, blue values [0-255]
 */
export declare const hex2Rgb: (hex: string) => number[];
/**
 * Convert HSV color to RGB
 * @param hue Hue in degrees (0-360)
 * @param sat Staturation (0-1)
 * @param val Value (0-1)
 * @returns {Array<number>} Array containing red, green, blue values [0-255]
 */
export declare const hsv2Rgb: (hue: number, sat: number, val: number) => number[];
/**
 * Convert RGB to HSV color
 * @param red Value between [0-255]
 * @param green Value between [0-255]
 * @param blue Value between [0-255]
 * @returns {Array<number>} Array containing hue[0-360], saturation[0-1], value [0-1]
 */
export declare const rgb2Hsv: (red: number, green: number, blue: number) => number[];
/**
 * Convert HSV color to HEX
 * @param hue Hue in degrees (0-360)
 * @param sat Staturation (0-1)
 * @param val Value (0-1)
 * @returns {string} Hex color code
 */
export declare const hsv2Hex: (hue: number, sat: number, val: number) => string;
/**
 * Convert HEX to HSV color
 * @param hex hex code
 * @returns {Array<number>} Array containing hue[0-360], saturation[0-1], value [0-1]
 */
export declare const hex2Hsv: (hex: string) => number[];
/**
 * Validate and sanitize hex color codes
 * @param hex Hex color code
 * @returns {string|null}
 */
export declare const sanitizeHex: (hex: string | null) => string | null;
/**
 * Generates random hex color
 * https://css-tricks.com/snippets/javascript/random-hex-color
 * @returns {string} Hex color code
 */
export declare const generateRandomColor: () => string;
