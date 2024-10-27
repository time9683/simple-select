# Interactive Terminal Selection

This project provides a function to display an interactive menu in the terminal, allowing the user to select an option from a list using arrow keys and confirm their selection with the Enter key.

## Description

The `select` function allows the user to navigate through a list of options and select one. The selected option is highlighted in the terminal, and the function returns the index of the selected option.

## Usage

### Installation

To use this function, you need to have Deno installed on your system.
then you can import the function directly from the URL:

```typescript
import * as select from "jsr:@time9683/simple-select";
```

or you can install the module locally using the following command:

```sh
deno add jsr:@time9683/simple-select
```


### Example Usage

```typescript
import { select } from "@time9683/simple-select";

const options = ["Option 1", "Option 2", "Option 3"];
const title = "Please select an option:";
const selectedIndex = select(options, title);
console.log(`Selected option index: ${selectedIndex}`);
```


## API

### `select(options: string[], title: string): number`

Displays an interactive menu in the terminal and allows the user to select an option.

#### Parameters

- `options`: An array of strings representing the selectable options.
- `title`: A string representing the title or question to display above the options.

#### Returns

- The index of the selected option.


## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.