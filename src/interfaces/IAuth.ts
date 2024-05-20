export interface IAuth {
    email: string;
    password: string;
}

export interface IRegister {
    email: string;
    password: string;
    confirmPassword: string;
}

export interface IActivateAccount {
    code: string;
}