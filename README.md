# marked-hard-breaks

Force any number blank lines between paragraphs.

This requires a `div` class named 'blank' to ensure the expected behavior.

Example:
```
	.blank {
		height     : 1em;
		margin-top : 0;
		& + * { margin-top : 0; }
	}
```

## Inserting blanks

This extensions expects a `:` at the start of a line. Multiple colons are executed as multiple lines.

# Usage
<!-- Show most examples of how to use this extension -->

```js
const marked = require("marked");
const markedHardBread = require("marked-justified-paragraphs");

marked.use({ extensions: [markedJustifiedParagraphsHardBreaks] });

const html = marked.parse("Hello\n:::New paragraph");
console.log(html);
//<p>Hello</p>\n<div class="blank"></div><div class="blank"></div><div class="blank"></div>\n<p>New paragraph</p>\n
```
