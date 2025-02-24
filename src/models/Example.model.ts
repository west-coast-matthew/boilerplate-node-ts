import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"; 


export default class Example{
    
    @PrimaryGeneratedColumn() 
    id: number;

    @Column();
    name:string;
    
}