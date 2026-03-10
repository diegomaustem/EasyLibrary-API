import { Field, ObjectType } from "type-graphql";
import { Author as PrismaAuthor } from "@prisma/client";

@ObjectType()
export class Author implements PrismaAuthor {
    @Field()
    id!: number;
    @Field()
    name!: string;
    @Field()    
    age!: number;
    @Field()
    email!: string;
    @Field()
    address!: string;
}               