# Phosphor Shaker

## Problem
Seems that [phosphor-react-native](https://github.com/duongdev/phosphor-react-native/issues/16) tree shaking doesn't work. In order to keep the current workflow without annoyment I created an extension that can rewrite those imports for you on each file save.

## Prompt

I want to create a command in VS Code to format imports in TSX file (change a named import into direct file import). Look at the example:

```
import {
  AddressBook,
  ChartLine,
  CurrencyDollar,
} from 'phosphor-react-native'
```

and with a command I want to convert it to:
```
import AddressBook from 'phosphor-react-native/src/icons/AddressBook'
import ChartLine from 'phosphor-react-native/src/icons/ChartLine'
import CurrencyDollar from 'phosphor-react-native/src/icons/CurrencyDollar'
```

# Contribution

Feel free to fork, branch out and create changes.

# Extension development

## Following extension guidelines

Ensure that you've read through the extensions guidelines and follow the best practices for creating your extension.

* [Extension Guidelines](https://code.visualstudio.com/api/references/extension-guidelines)

## Working with Markdown

You can author your README using Visual Studio Code. Here are some useful editor keyboard shortcuts:

* Split the editor (`Cmd+\` on macOS or `Ctrl+\` on Windows and Linux).
* Toggle preview (`Shift+Cmd+V` on macOS or `Shift+Ctrl+V` on Windows and Linux).
* Press `Ctrl+Space` (Windows, Linux, macOS) to see a list of Markdown snippets.

## For more information

* [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
* [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)

**Enjoy!**
