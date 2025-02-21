# marked-hard-breaks

Force any number blank lines between paragraphs.

## Inserting blanks

This extensions expects a `:` at the start of a line. Multiple colons are executed as multiple lines.

# Usage
<!-- Show most examples of how to use this extension -->

```js
const marked = require("marked");
const markedHardBread = require("marked-justified-paragraphs");

marked.use(markedJustifiedParagraphsHardBreaks());

const html = marked.parse("Hello\n:::New paragraph");
console.log(html);
//<p>Hello</p>\n<br><br><br>\n<p>New paragraph</p>\n
```
