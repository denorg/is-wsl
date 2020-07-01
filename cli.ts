import { isWsl } from "./mod.ts";

const cli = async () => {
  if (await isWsl()) {
    console.log('You are inside WSL environment!');
  } else {
    console.log('You are not in WSL environment!');
  }
}

cli();
