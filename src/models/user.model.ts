import { PrimaryGeneratedColumn, Entity, Column, CreateDateColumn, UpdateDateColumn, ManyToMany, OneToMany, JoinTable } from "typeorm";
import { Role, Event } from ".";

/**
 * @swagger
 *  definitions:
 *      User:
 *          type: object
 *          properties:
 *              id:
 *                  type: string
 *                  format: uuid
 *              name:
 *                  type: string
 *              age:
 *                  type: number
 *              roles:
 *                  type: array
 *                  items:
 *                      $ref: "#/definitions/Role"
 *              events:
 *                  type: array
 *                  items:
 *                      $ref: "#/definitions/Event"
 */
@Entity()
export default class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar')
    name: string;

    @Column('integer')
    age: number;

    @ManyToMany(() => Role, role => role.users)
    @JoinTable()
    roles: Role[];

    @OneToMany(() => Event, event => event)
    events: Event[];

    @CreateDateColumn()
    createdDate: Date;

    @UpdateDateColumn()
    updatedDate: Date;

    static createUser(name: string, age: number) {
        const user = new User();
        user.name = name;
        user.age = age;
        return user;
    }
}