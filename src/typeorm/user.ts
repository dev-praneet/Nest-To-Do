import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'user_id',
  })
  id: number;

  @Column({
    name: 'user_name',
  })
  userName: string;

  @Column({
    name: 'email_address',
    unique: true,
  })
  emailAddress: string;

  @Column({
    nullable: false,
  })
  password: string;
}
