# Discord-markdown

This module provides utilities functions for manipulate markdown with discord.

## MarkdownUtil

---

## [static] bold(text)

Return text formatted with bold

Params :

- text : The text to formatted (string)

Return :

The text formatted (string)

```js
console.log(MarkdownUtil.bold("Hello world"));
```

## [static] italic(text)

Return text formatted with italic

Params :

- text : The text to formatted (string)

Return :

The text formatted (string)

```js
console.log(MarkdownUtil.italic("Hello world"));
```

## [static] underline(text)

Return text formatted with underline

Params :

- text : The text to formatted (string)

Return :

The text formatted (string)

```js
console.log(MarkdownUtil.underline("Hello world"));
```

## [static] strikethrough(text)

Return text formatted with strikethrough

Params :

- text : The text to formatted (string)

Return :

The text formatted (string)

```js
console.log(MarkdownUtil.strikethrough("Hello world"));
```

## [static] code(text)

Return text formatted with code

Params :

- text : The text to formatted (string)

Return :

The text formatted (string)

```js
console.log(MarkdownUtil.code("Hello world"));
```

## [static] codeBlock(text)

Return text formatted with codeBlock

Params :

- text : The text to formatted (string)

Return :

The text formatted (string)

```js
console.log(MarkdownUtil.codeBlock("Hello world"));
```

## [static] quote(text)

Return text formatted with quote

Params :

- text : The text to formatted (string)

Return :

The text formatted (string)

```js
console.log(MarkdownUtil.quote("Hello world"));
```

## [static] quoteBlock(text)

Return text formatted with quoteBlock

Params :

- text : The text to formatted (string)

Return :

The text formatted (string)

```js
console.log(MarkdownUtil.quoteBlock("Hello world"));
```

## [static] spoiler(text)

Return text formatted with codeBlock

Params :

- text : The text to formatted (string)

Return :

The text formatted (string)

```js
console.log(MarkdownUtil.codeBlock("Hello world"));
```

## MarkdownEscaper

---

## [static] escapeBold(text)

Return text with bold escaped.

Params :

- text : The text to escaped (string)

Return :

The text escaped (string)

```js
console.log(MarkdownEscaper.escapeBold("Hello world"));
```

## [static] escapeItalic(text)

Return text with italic escaped.

Params :

- text : The text to escaped (string)

Return :

The text escaped (string)

```js
console.log(MarkdownEscaper.escapeItalic("Hello world"));
```

## [static] escapeUnderline(text)

Return text with underline escaped.

Params :

- text : The text to escaped (string)

Return :

The text escaped (string)

```js
console.log(MarkdownEscaper.escapeUnderline("Hello world"));
```

## [static] escapeSpoiler(text)

Return text with spoiler escaped.

Params :

- text : The text to escaped (string)

Return :

The text escaped (string)

```js
console.log(MarkdownEscaper.escapeSpoiler("Hello world"));
```

## [static] escapeCodeBlock(text)

Return text with code block escaped.

Params :

- text : The text to escaped (string)

Return :

The text escaped (string)

```js
console.log(MarkdownEscaper.escapeCodeBlock("Hello world"));
```

## [static] escapeInlineCode(text)

Return text with inline code escaped.

Params :

- text : The text to escaped (string)

Return :

The text escaped (string)

```js
console.log(MarkdownEscaper.escapeInlineCode("Hello world"));
```

## [static] escapeStrikethrough(text)

Return text with bold escaped.

Params :

- text : The text to strikethrough (string)

Return :

The text escaped (string)

```js
console.log(MarkdownEscaper.escapeStrikethrough("Hello world"));
```

## MarkdownParser

---

## [static] parseEmoji(text)

Return id of emojis.

Params :

- text : The text to parsed (string)

Return :

An object with name and if of emoji and if is animated

```js
console.log(MarkdownParser.parseEmoji("Hello world <a:name:0000>"));
```

## [static] parseChannel(text)

Return id of channels.

Params :

- text : The text to parsed (string)

Return :

An array of id of channels (Array\<string>)

```js
console.log(MarkdownParser.parseChannel("Hello world <#0000000>"));
```

## [static] parseRole(text)

Return id of roles.

Params :

- text : The text to parsed (string)

Return :

An array of id of roles (Array\<string>)

```js
console.log(MarkdownParser.parseRole("Hello world <@&000000>"));
```

## [static] parseGuildEmoji(text)

Return id of emojis.

Params :

- text : The text to parsed (string)

Return :

An array of id of emojis (Array\<string>)

```js
console.log(MarkdownParser.parseGuildEmoji("Hello world <a:name:0000>"));
```

## [static] parseUser(text)

Return id of users.

Params :

- text : The text to parsed (string)

Return :

An array of id of users (Array\<string>)

```js
console.log(MarkdownParser.parseUser("Hello world <@0000000>"));
```

## [static] parseUserNickname(text)

Return id of users.

Params :

- text : The text to parsed (string)

Return :

An array of id of users (Array\<string>)

```js
console.log(MarkdownParser.parseUser("Hello world <@0000000>"));
```
