"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarkdownEscaper = void 0;
class MarkdownEscaper {
    static bold(text) {
        let i = 0;
        return text.replace(/\*\*(\*)?/g, (_, match) => {
            if (match)
                return ++i % 2 ? `${match}\\*\\*` : `\\*\\*${match}`;
            return '\\*\\*';
        });
    }
    static italic(text) {
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
    static underline(text) {
        let i = 0;
        return text.replace(/__(_)?/g, (_, match) => {
            if (match)
                return ++i % 2 ? `${match}\\_\\_` : `\\_\\_${match}`;
            return '\\_\\_';
        });
    }
    static spoiler(text) {
        return text.replace(/\|\|/g, '\\|\\|');
    }
    static codeBlock(text) {
        return text.replace(/```/g, '\\`\\`\\`');
    }
    static inlineCode(text) {
        return text.replace(/(?<=^|[^`])`(?=[^`]|$)/g, '\\`');
    }
    static strikethrough(text) {
        return text.replace(/~~/g, '\\~\\~');
    }
}
exports.MarkdownEscaper = MarkdownEscaper;
