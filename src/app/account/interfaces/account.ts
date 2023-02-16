import { Customer } from "src/app/customer/interface/customer";
import { AccountType } from "./accountType";


export interface Account{
    id : string;
    coustomer_id: Customer;
    account_type_id: AccountType;
    balance: number;
    state: boolean;
    delete_at: Date | undefined;
}
