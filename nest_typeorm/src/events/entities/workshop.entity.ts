import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Event } from './event.entity';

@Entity()
export class Workshop {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  start: string;

  @Column()
  end: string;

  @Column({ type: 'integer', default: null })
  eventId: number;

  @ManyToOne(() => Event, (event) => event.workshops)
  event: Event;

  @Column()
  name: string;

  @Column({ type: 'datetime' })
  createdAt: Date;
}
