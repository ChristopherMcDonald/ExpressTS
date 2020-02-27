import { PrimaryGeneratedColumn, Entity, ManyToOne, Column  } from 'typeorm'
import { User } from '.';

/**
 * @swagger
 *  definitions:
 *      Event:
 *          type: object
 *          properties:
 *              id:
 *                  type: string
 *                  format: uuid
 *              name:
 *                  type: string
 *              user:
 *                  $ref: "#/definitions/User"
 */
@Entity()
export default class Event {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar')
    name: string;

    @ManyToOne(() => User, user => user.events)
    user: User;
}