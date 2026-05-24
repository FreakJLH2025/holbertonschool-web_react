// main.ts

/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from "./interface";
import * as CRUD from "./crud.js";

// 1. Create a RowElement object
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

// 2. Insert row and capture the new RowID
const newRowID: RowID = CRUD.insertRow(row);

// 3. Update row with age field
const updatedRow: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
  age: 23,
};

CRUD.updateRow(newRowID, updatedRow);

// 4. Delete row
CRUD.deleteRow(newRowID);
