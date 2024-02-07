import {readFileSync} from "fs";
import {envs} from "./envs/index";
import loggerConfig from "./logger/index";
import mongooseConfig from "./mongoose/index";

import oidcConfig from "./oidc/index";
import {FileSyncAdapter} from "@tsed/adapters";

const pkg = JSON.parse(readFileSync("./package.json", {encoding: "utf8"}));

export const config: Partial<TsED.Configuration> = {
  version: pkg.version,
  envs,
  logger: loggerConfig,
  mongoose: mongooseConfig,
  oidc: oidcConfig,
  adapters: [
    FileSyncAdapter
  ]
  // additional shared configuration
};
