declare class MarkdownEscaper {
    static bold(text: string): string;
    static italic(text: string): string;
    static underline(text: string): string;
    static spoiler(text: string): string;
    static codeBlock(text: string): string;
    static inlineCode(text: string): string;
    static strikethrough(text: string): string;
}
export { MarkdownEscaper };
