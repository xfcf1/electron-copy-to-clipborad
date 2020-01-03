import path from "path";
import fs from "fs";
import { spawnSync } from "child_process";
import { clipboard } from "electron";

const isMac = process.platform === "darwin";

export const copyFile = filePath => {
  if (!fs.existsSync(filePath)) {
    console.error("error path");
    return;
  }
  if (isMac) {
    // MAC
    // or clipboard.writeBuffer('public.file-url', filePath)
    clipboard.writeBuffer(
      "NSFilenamesPboardType",
      Buffer.from(`
        <?xml version="1.0" encoding="UTF-8"?>
        <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
        <plist version="1.0">
          <array>
            <string>${filePath}</string>
          </array>
        </plist>
      `)
    );
  } else {
    // windows
    const exePath = path.join(__dirname, "exe", "file2clip.exe");
    spawnSync(exePath, [filePath]);
  }
};
