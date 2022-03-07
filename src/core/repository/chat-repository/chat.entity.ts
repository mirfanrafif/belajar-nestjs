import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Chat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  chatId: string;

  @Column()
  senderId: string;

  @Column()
  consumerNumber: string;

  @Column()
  message: string;

  @Column()
  created_date: Date;
}
