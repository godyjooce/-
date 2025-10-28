
export interface Topic {
  id: string;
  title: string;
  description: string;
}

export interface Section {
  id: string;
  title: string;
  level: string;
  color: string;
  topics: Topic[];
}
   