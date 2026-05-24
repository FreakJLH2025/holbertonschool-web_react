// interface.ts

// 1. Type RowID
export type RowID = number;

// 2. Interface RowElement
export interface RowElement {
  firstName: string;
  lastName: string;
  age?: number; // optional
}
