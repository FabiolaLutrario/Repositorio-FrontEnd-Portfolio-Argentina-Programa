export class JwtDto {
    token!: string;
    type!: string;
    userId!: number;
    email!: string;
    authorities!: string[];
}
