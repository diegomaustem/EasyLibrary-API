import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { CreateAuthorInput } from "../dtos/create-author-input";
import { Author } from "../models/author-model";

@Resolver()
export class AuthorsResolver {

    @Query(() => [Author])
    async getAllAuthors() {
        return [new Author()];
    } 

    @Mutation(() => Author)
    async createAuthor(@Arg("data") data: CreateAuthorInput) {
        return new Author();
    }   
}