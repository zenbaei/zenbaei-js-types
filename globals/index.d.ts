declare global {
  // this file only exists in order to be able to export global from util/index.ts
  // otherwise globals.d.ts wont be visible for external projects.
  /**
   * This should be implemented in the dependant moudles,
   * to provide file logging implementation.
   * @param msg
   */
  function FileLog(msg: string | object): void;

  var LogLevel: 'info' | 'debug' | 'trace' | 'off';

  type Language = 'en' | 'ar';
}

export {};
