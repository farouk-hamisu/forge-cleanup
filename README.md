# Forge Cleanup CLI

A simple Node.js CLI tool to clean up default files (`Counter.sol`, `Counter.t.sol`, `Counter.s.sol`) created by `forge init`. Use this tool to keep your Foundry project clean by automatically deleting unnecessary boilerplate files.

---

## Features
- Deletes `Counter.sol` from the `src` folder.
- Deletes `Counter.t.sol` from the `test` folder.
- Deletes `Counter.s.sol` from the `script` folder.
- Simple to use via `npx` or global installation.

---

## Installation

To install this tool, you have two options: **global installation** or **using `npx`** directly.

### **Global Installation**
1. Clone the repository:
   ```bash
   git clone https://github.com/farouk-hamisu/forge-cleanup.git
   cd forge-cleanup
### Install the package globally:
 ```bash
npm install -g
```
**After installation, you can use it in any Forge project:**

```bash
npx forge-cleanup
```
### Alternatively, you can run the tool directly without installing it globally:


```bash
npx /path/to/forge-cleanup
```
### Usage
**Example Workflow**
**Navigate to your Forge project directory (created with forge init)**
**Run the cleanup command:**
**If installed globally:**

```bash
forge-cleanup
```
**If using npx:**

```bash
npx /path/to/forge-cleanup
```
**The script will delete the following files if they exist:**

**src/Counter.sol**
**test/Counter.t.sol**
**script/Counter.s.sol**
