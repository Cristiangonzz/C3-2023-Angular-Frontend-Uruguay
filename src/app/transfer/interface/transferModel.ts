import { Account } from "src/app/account/interfaces/account";

export interface TransferModel {
    id :string;
    outcome: Account;
    income: Account;
    amount: number;
    reason: string;
    date_time: Date | number;
    delete_at: Date | number;
}