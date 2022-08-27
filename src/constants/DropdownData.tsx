const reportingTime = ["Year to Date", "Q1", "Q2", "Q3", "Q4"];
export const DROPDOWN_DATA = reportingTime.map((item) =>
  ["value", "label"].reduce((a, v) => ({ ...a, [v]: item }), {})
);
