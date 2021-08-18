import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "heroes", synchronize: false })
export class Hero {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column({ type: 'datetime' })
  created_at: Date;

  @Column({ type: 'datetime' })
  updated_at: Date;
}
