export interface Enforcement {
  id: string;
  status: '성공' | '실패';
  percent: number;
  date: string;
}