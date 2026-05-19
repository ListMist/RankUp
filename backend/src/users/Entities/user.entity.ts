import{Entity,PrimaryGeneratedColumn,Column} from 'typeorm';

export enum  UserRole{
    PROGRAMMER = 'programmer',
    COACH='coach',
}

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column({unique: true})
    email:string;

    @Column()
    password:string;

    @Column({
        type: 'enum',
        enum:UserRole,
        default: UserRole.PROGRAMMER,
    })
    role:UserRole;
}