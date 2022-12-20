interface Data {
  report: {
    id: string;
    source: string;
    amount: number;
    created_At: Date;
    updated_At: Date;
    type: ReportType;
  }[];
}

export const data: Data = {
  report: [],
};

enum ReportType {
  INCOME = 'income',
  EXPENSE = 'expense',
}
