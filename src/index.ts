import { something } from "./functions/something";
import { LogError, LogInfo, mapArgs } from "./helpers";

// get & format args (if any)
const args = process.argv.slice(2);
const argMap = mapArgs(args);

// parse args
LogInfo(argMap);
// LogError("example error");

something();
