import { Field, InputType } from "type-graphql";

@InputType()
export class CreateAuthorInput {
    @Field()
    name: string;
    @Field()
    email: string;
    @Field()
    address: string;
    @Field()    
    age: number;
}   