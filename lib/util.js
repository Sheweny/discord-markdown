"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarkdownBuild = void 0;
class MarkdownBuild {
    static bold(str) {
        return `**${str}**`;
    }
    static italic(str) {
        return `*${str}*`;
    }
    static underline(str) {
        return `*${str}*`;
    }
    static strikethrough(str) {
        return `~~${str}~~`;
    }
    static code(str) {
        return `\`${str}\``;
    }
    static codeBlock(str, lang) {
        return `\`\`\`${lang ? lang : ''}${str}\`\`\``;
    }
    static quote(str) {
        return `> ${str}`;
    }
    static quoteBlock(str) {
        return `>>> ${str}`;
    }
    static spoiler(str) {
        return `||${str}||`;
    }
}
exports.MarkdownBuild = MarkdownBuild;
