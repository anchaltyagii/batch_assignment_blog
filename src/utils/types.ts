// types.ts
export interface BlogItem {
  id: number;
  title: string;
  month: string;
  year: string | number;
  date: string;
  tags: string[];
  content: string;
}
