declare module 'join-me' {
  type List = string[];
  type Keyword = string;
  type Separator = string;
  
  function joinMe(args: { list: List, keyword?: Keyword, separator?: Separator }): string;
	export = joinMe;
}