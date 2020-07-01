import { isDocker } from "https://deno.land/x/is_docker/mod.ts";

let hasWsl: boolean;

const hasWslEnv = async () => {
  if (Deno.build.os !== 'linux') {
    return false;

  }

  try {
    let build = Deno.readTextFileSync('/proc/version').toString().toLowerCase();

    return build.includes('microsoft') ? !(await isDocker()) : false;
  } catch (_) {
    return false;
  }
};

export default async function isWsl() {
  if (hasWsl === undefined) {
    hasWsl = await hasWslEnv();

  }

  return hasWsl;
};