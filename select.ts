import {green,bold,blue} from "@std/fmt/colors"

/**
 * Prompts the user to select an option from a list of provided options.
 * 
 * @param options - An array of strings representing the selectable options.
 * @param title - A string representing the title or question to display above the options.
 * @returns The index of the selected option.
 * 
 * The function displays the options in the terminal and allows the user to navigate
 * through them using the arrow keys. The user can confirm their selection by pressing
 * the Enter key. The function also handles exiting the prompt with Ctrl+C.
 * 
 * The selected option is highlighted, and the function returns the index of the selected option.
 * 
 * @example
 * ```typescript
 * const options = ["Option 1", "Option 2", "Option 3"];
 * const title = "Please select an option:";
 * const selectedIndex = select(options, title);
 * console.log(`Selected option index: ${selectedIndex}`);
 * ```
 */
export function select(options: string[],title:string): number {

const buffer = new ArrayBuffer(1024);
Deno.stdin.setRaw(true);
const buf = new Uint8Array(buffer);

let position = 0;

while(true){


console.clear();
// print only ? in color green
console.log(`${green("?")} ${bold(title)}`);
for (let i = 0; i < options.length; i++) {
  if (i === position) {
    console.log(`${green(">")}  ${blue(options[i])}`);
  } else {
    console.log(`   ${options[i]}`);
  }


}
const nread = Deno.stdin.readSync(buf);
const sub = buf.subarray(0, nread!);


// key down
if (sub[0] === 27 && sub[1] === 91 && sub[2] === 66) {
  if (position < options.length - 1) {
    position++;
  }else if (position == options.length - 1) {
    position = 0
  }
}

// key up

if (sub[0] === 27 && sub[1] === 91 && sub[2] === 65) {
  if (position > 0) {
    position--;
  }else if (position == 0) {
    position = options.length - 1
  }
}
// if buff is ctl+c exit
if (sub[0] === 3) {
  Deno.exit(0);
}

// if buff is enter
if (sub[0] === 13) {
  break;
}

}
// clear the console
console.clear();
console.log(`${green('✔')} ${bold(title)} ${green(options[position])}`)
Deno.stdin.setRaw(false);
return position
}