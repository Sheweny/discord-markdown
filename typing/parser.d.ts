declare class MarkdownParser {
    static emoji(text: string): any[] | null;
    static channel(text: string): any[] | null;
    static role(text: string): any[] | null;
    static user(text: string): any[] | null;
    static userNickname(text: string): any[] | null;
}
export { MarkdownParser };
