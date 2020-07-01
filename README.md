# 🏁 Is Wsl

Check if the process is running inside a WSL enviroment in Deno.

[![Deno CI](https://github.com/denorg/is-wsl/workflows/Deno%20CI/badge.svg)](https://github.com/denorg/is-wsl/actions)
[![GitHub](https://img.shields.io/github/license/denorg/is-wsl)](https://github.com/denorg/is-wsl/blob/master/LICENSE)
[![Contributors](https://img.shields.io/github/contributors/denorg/is-wsl)](https://github.com/denorg/is-wsl/graphs/contributors)
[![Deno Starter](https://img.shields.io/badge/deno-starter-brightgreen)](https://denorg.github.io/starter/)
[![Made by Denorg](https://img.shields.io/badge/made%20by-denorg-0082fb)](https://github.com/denorg)
[![TypeScript](https://img.shields.io/badge/types-TypeScript-blue)](https://github.com/denorg/is-wsl)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

## ⭐ Getting started

Import the `mode` function and use it:

```ts
import isWsl from "https://raw.githubusercontent.com/denorg/is-wsl/master/mod.ts";

const inWslEnviroment = await isWsl(); // boolean
```

### CLI with [DPX](https://github.com/denorg/dpx)

After [installing DPX](https://github.com/denorg/dpx), you can directly use the CLI using the `dpx` command:

```bash
dpx --allow-read starter <arguments>
```

### CLI

Alternatively, you can use it directly from the CLI by using `deno run`:

```bash
deno run --allow-read https://raw.githubusercontent.com/denorg/is-wsl/master/cli.ts <arguments>
```

You can also install it globally using the following:

```bash
deno install --allow-read -n starter https://raw.githubusercontent.com/denorg/is-wsl/master/cli.ts
```

Then, the package is available to run:

```bash
starter <arguments>
```

### Configuration

Required permissions:

1. `--allow-read`

## 👩‍💻 Development

Run tests:

```bash
deno test --allow-read
```

## ⭐ Related Work

- [sindresorhus/is-wsl](https://github.com/sindresorhus/is-wsl) is the Node.js project serving as inspiration for this one

## 📄 License

MIT © [Denorg](https://den.org.in)

<p align="center">
  <a href="https://den.org.in">
    <img width="100" alt="" src="https://raw.githubusercontent.com/denorg/denorg/master/logo.svg">
  </a>
</p>
<p align="center">
  <sub>A project by <a href="https://den.org.in">Denorg</a>, the world's first Deno-focused community<br>organization and consulting company. <a href="https://den.org.in">Work with us →</a></sub>
</p>
