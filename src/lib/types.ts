export interface DayData {
  day: number;
  date: string;
  type: 'ai-tip' | 'automation' | 'offer';
  title: string;
  titleShort: string;
  description: string;
  icon: string;
  content: string;
  offer?: {
    discount: number;
    code: string;
    bonus: string;
    validUntil: string;
  };
}

export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
