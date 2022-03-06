export type TextMessage = {
  id: string;
  phone: string;
  message: string;
  pushName: string;
  thumbProfile: string;
  groupId: string;
  groupSubject: string;
  timestamp: number;
  category: string;
  receiver: number;
};

export type ImageMessage = {
  id: string;
  phone: string;
  message: string;
  pushName: string;
  thumbProfile: string;
  groupId: string;
  groupSubject: string;
  timestamp: number;
  category: string;
  receiver: number;
  image: string;
  url: string;
};

export type DocumentMessage = {
  id: string;
  phone: string;
  message: string;
  pushName: string;
  thumbProfile: string;
  groupId: string;
  groupSubject: string;
  timestamp: number;
  category: string;
  receiver: number;
  image: string;
  url: string;
};
