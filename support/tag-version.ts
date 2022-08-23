import { tagVersion } from "@nmhillusion/n2mix/utils/git.util";
import * as path from "path";

tagVersion(path.join(__dirname, "../package.json"));
