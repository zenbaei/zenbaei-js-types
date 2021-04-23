declare global {
  interface String {
    isIn(strings: string[]): boolean;
  }
}

// eslint-disable-next-line no-extend-native
String.prototype.isIn = function (strings: string[]): boolean {
  if (!this || strings === undefined || strings.length === 0) {
    return false;
  }
  const result = strings.find((val) => val === this.toString());
  return result ? true : false;
};

export {};
