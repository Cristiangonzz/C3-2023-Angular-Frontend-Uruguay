import { Account } from "src/app/account/interfaces/account";

export interface DepositModel  {
    id : string;
    account: Account ;//DocumentTypeModel , es un tipo de dato que nosotros creamos
    amount: number;
    date_time: Date | number;
    delete_at: Date | number;
}