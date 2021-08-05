"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarkdownEscaper = void 0;
class MarkdownEscaper {
    static escapeBold(text) {
        let i = 0;
        return text.replace(/\*\*(\*)?/g, (_, match) => {
            if (match)
                return ++i % 2 ? `${match}\\*\\*` : `\\*\\*${match}`;
            return '\\*\\*';
        });
    }
    static escapeItalic(text) {
        let i = 0;
        text = text.replace(/(?<=^|[^*])\*([^*]|\*\*|$)/g, (_, match) => {
            if (match === '**')
                return ++i % 2 ? `\\*${match}` : `${match}\\*`;
            return `\\*${match}`;
        });
        i = 0;
        return text.replace(/(?<=^|[^_])_([^_]|__|$)/g, (_, match) => {
            if (match === '__')
                return ++i % 2 ? `\\_${match}` : `${match}\\_`;
            return `\\_${match}`;
        });
    }
    static escapeUnderline(text) {
        let i = 0;
        return text.replace(/__(_)?/g, (_, match) => {
            if (match)
                return ++i % 2 ? `${match}\\_\\_` : `\\_\\_${match}`;
            return '\\_\\_';
        });
    }
    static escapeSpoiler(text) {
        return text.replace(/\|\|/g, '\\|\\|');
    }
    static escapeCodeBlock(text) {
        return text.replace(/```/g, '\\`\\`\\`');
    }
    static escapeInlineCode(text) {
        return text.replace(/(?<=^|[^`])`(?=[^`]|$)/g, '\\`');
    }
    static escapeStrikethrough(text) {
        return text.replace(/~~/g, '\\~\\~');
    }
}
exports.MarkdownEscaper = MarkdownEscaper;
