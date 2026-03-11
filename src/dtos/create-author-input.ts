import { Field, InputType, Int } from "type-graphql";

@InputType()
export class CreateAuthorInput {
    @Field(() => String)
    name!: string;

    @Field(() => String)
    email!: string;

    @Field(() => String)
    address!: string;
    
    @Field(() => Int)
    age!: number;
}   