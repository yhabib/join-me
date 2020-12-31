declare module 'joinMe' {
  type List = string[];
  type Keyword = string;
  type Separator = string;
  type Args = { list: List, keyword: Keyword, separator: Separator };
  function joinMe(args:Args): string;
	export = joinMe;
}