/**
 * Do not edit directly
 * Generated on Tue, 23 Aug 2022 01:29:38 GMT
 */

export default tokens;

declare interface DesignToken {
  value: any;
  name?: string;
  comment?: string;
  themeable?: boolean;
  attributes?: {
    category?: string;
    type?: string;
    item?: string;
    subitem?: string;
    state?: string;
    [key: string]: any;
  };
  [key: string]: any;
}

declare const tokens: {
  "base": DesignToken,
  "primary": DesignToken,
  "secondary": DesignToken,
  "small": DesignToken,
  "medium": DesignToken,
  "large": DesignToken,
  "x1": DesignToken,
  "x2": DesignToken,
  "x3": DesignToken,
  "x4": DesignToken
}