export declare class MdParser {
    /***   Regex Markdown Parser by chalarangelo   ***/
    private replaceRegex;
    private codeBlockRegex;
    private inlineCodeRegex;
    private imageRegex;
    private linkRegex;
    private headingRegex;
    private boldItalicsRegex;
    private strikethroughRegex;
    private blockquoteRegex;
    private horizontalRuleRegex;
    private unorderedListRegex;
    private orderedListRegex;
    private paragraphRegex;
    private codeBlockReplacer;
    private inlineCodeReplacer;
    private imageReplacer;
    private linkReplacer;
    private headingReplacer;
    private boldItalicsReplacer;
    private strikethroughReplacer;
    private blockquoteReplacer;
    private horizontalRuleReplacer;
    private unorderedListReplacer;
    private orderedListReplacer;
    private paragraphReplacer;
    private replaceCodeBlocks;
    private replaceInlineCodes;
    private replaceImages;
    private replaceLinks;
    private replaceHeadings;
    private replaceBoldItalics;
    private replaceceStrikethrough;
    private replaceBlockquotes;
    private replaceHorizontalRules;
    private replaceUnorderedLists;
    private replaceOrderedLists;
    private replaceParagraphs;
    private codeBlockFixRegex;
    private codeBlockFixer;
    private fixCodeBlocks;
    private replaceMarkdown;
    parse: (str: any) => any;
}