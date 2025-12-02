export interface DayData {
  day: number;
  date: string;
  type: 'ai-tip' | 'automation' | 'guide' | 'offer';
  title: string;
  titleShort: string;
  description: string;
  icon: string;
  content: string;
  offer?: {
    discount: number;
    code: string;
    bonus?: string;
    validUntil?: string;
  };
}

export interface DoorProps {
  day: number;
  title: string;
  content: string;
  isUnlocked: boolean;
  isOpen: boolean;
  onOpen: (day: number) => void;
  type?: 'ai-tip' | 'automation' | 'guide' | 'offer';
}

export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
