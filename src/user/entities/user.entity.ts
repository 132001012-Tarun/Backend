import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  fullName: string;

  @Column({ type: 'date' })
  birthdate: Date;

  @Column({ length: 100 })
  email: string;

  @Column({ length: 20 })
  phoneNumber: string; // Changed to string as phone numbers are usually stored as strings

  @Column({ length: 50 })
  programmingLanguage: string;

  @Column({ length: 20 })
  experienceLevel: string; // Changed to string

  @Column('simple-array', { nullable: true }) // Changed to 'simple-array' for array datatype
  developmentStack: string[]; 

  @Column('simple-array', { nullable: true }) // Changed to 'simple-array' for array datatype
  interestedAreas: string[]; 
}
