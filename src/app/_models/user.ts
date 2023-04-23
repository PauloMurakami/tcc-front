export class User {
    userExists: {
        id: string;
        email: string;
        nome: string;
        role: string;
        permiteVerificacao: boolean
    }
    token?: string;
}