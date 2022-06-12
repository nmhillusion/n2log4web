export * from "../logger/index";
export * from "../types/index";

import { BrowserLogger } from "../logger/BrowserLogger";

Object.assign(window, { BrowserLogger });
