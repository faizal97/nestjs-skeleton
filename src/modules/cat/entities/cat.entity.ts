import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "cats", synchronize: false })
export class Cat {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column()
  breed: string;

  @Column({ type: 'datetime' })
  created_at: Date;

  @Column({ type: 'datetime' })
  updated_at: Date;
}
