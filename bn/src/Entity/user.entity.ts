import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

@Entity({ name: 'user' })
@Unique(['username'])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('increment', { name: 'id' })
  id: number;

  @Column({ name: 'firstname' })
  firstname: string;

  @Column({ name: 'lastname' })
  lastname: string;

  @Column({ name: 'gender' })
  gender: string;

  @Column({ name: 'birthday' })
  birthday: string;

  @Column({ name: 'email' })
  email: string;

  @Column({ name: 'username' })
  username: string;

  @Column({ name: 'password' })
  password: string;

  @CreateDateColumn()
  registration_date: string;

  @Column({ name: 'access_date' })
  access_date: Date;

  @Column({ default: true })
  isActive: boolean;

  /* @Column({ name: 'name_video' })
  name_video: string;

  @Column({ name: 'created_date' })
  created_date: Date;*/
}
