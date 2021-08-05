"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarkdownParser = void 0;
class MarkdownParser {
    static parseEmoji(text) {
        if (!text.includes(':'))
            return { animated: false, name: text, id: null };
        const m = text.match(/<?(?:(a):)?(\w{2,32}):(\d{17,19})?>?/);
        if (!m)
            return null;
        return { animated: Boolean(m[1]), name: m[2], id: m[3] || null };
    }
    static parseChannel(text) {
        if (!text.includes('#') || !text.includes('<') || !text.includes('>'))
            return { id: null };
        const m = text.match(new RegExp("<#[0-9]{1,20}>", "g"));
        const total = [];
        if (m && m.length)
            m.forEach((c) => total.push({ id: c.replace(/^<#|>$/g, ''), string: c }));
    }
    static parseRole(text) {
        if (!text.includes('&') || !text.includes('<') || !text.includes('>'))
            return { id: null };
        const m = text.match(new RegExp("<&[0-9]{1,20}>", "g"));
        const total = [];
        if (m && m.length)
            m.forEach((c) => total.push({ id: c.replace(/^<#|>$/g, ''), string: c }));
    }
    static parseGuildEmoji(text) {
        if (!text.includes(':') || !text.includes('<') || !text.includes('>'))
            return { id: null };
        const m = text.match(new RegExp("<a?:([a-z]|_){2,32}:[0-9]{1,20}>", "gi"));
        const total = [];
        if (m && m.length)
            m.forEach((c) => total.push({ id: c.replace(/^<a?:([a-z]|_){2,32}:|>$/g, ''), string: c }));
    }
    static parseUser(text) {
        if (!text.includes('@') || !text.includes('<') || !text.includes('>'))
            return { id: null };
        const m = text.match(new RegExp("<@[0-9]{1,20}>", "g"));
        const total = [];
        if (m && m.length)
            m.forEach((c) => total.push({ id: c.replace(/^<@|>$/g, ''), string: c }));
    }
    static parseUserNickname(text) {
        if (!text.includes('@') || !text.includes('!') || !text.includes('<') || !text.includes('>'))
            return { id: null };
        const m = text.match(new RegExp("<@![0-9]{1,20}>", "g"));
        const total = [];
        if (m && m.length)
            m.forEach((c) => total.push({ id: c.replace(/^<@!|>$/g, ''), string: c }));
    }
}
exports.MarkdownParser = MarkdownParser;
