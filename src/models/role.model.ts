import { PrimaryGeneratedColumn, Entity, Column, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToMany } from "typeorm";
import { User } from ".";

/**
 * @swagger
 *  definitions:
 *      Role:
 *          type: object
 *          properties:
 *              id:
 *                  type: string
 *                  format: uuid
 *              name:
 *                  type: string
 *              users:
 *                  type: array
 *                  items:
 *                      $ref: "#/definitions/User"
 */
@Entity()
export default class Role {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar')
    name: string;

    @ManyToMany(() => User, user => user.roles)
    users: User[];
}