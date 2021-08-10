declare class MarkdownBuild {
    static bold(str: string): string;
    static italic(str: string): string;
    static underline(str: string): string;
    static strikethrough(str: string): string;
    static code(str: string): string;
    static codeBlock(str: string, lang: string): string;
    static quote(str: string): string;
    static quoteBlock(str: string): string;
    static spoiler(str: string): string;
}
export { MarkdownBuild };
