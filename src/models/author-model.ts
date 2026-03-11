import { Field, ID, Int, ObjectType } from "type-graphql";
import { Author as PrismaAuthor } from "@prisma/client";

@ObjectType()
export class Author implements PrismaAuthor {
    @Field(() => ID)
    id!: number;

    @Field(() => String)
    name!: string;

    @Field(() => Int)    
    age!: number;

    @Field(() => String)
    email!: string;
    
    @Field(() => String)
    address!: string;
}               