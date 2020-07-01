import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import isWsl from "./mod.ts";

Deno.test("test starter function", async (): Promise<void> => {
  assertEquals(await isWsl(), true);
});
