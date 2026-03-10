import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { CreateAuthorInput } from "../dtos/create-author-input";
import { Author } from "../models/author-model";
import { prisma } from "../db/prisma";

@Resolver()
export class AuthorsResolver {

    @Query(() => [Author])
    async getAllAuthors() {
        const authors = await prisma.author.findMany();
        return authors;
    } 

    @Mutation(() => Author)
    async createAuthor(@Arg("data") data: CreateAuthorInput) {
        const newAuthor = await prisma.author.create({
            data: {
                name: data.name,
                email: data.email,
                address: data.address,
                age: data.age,      
            },
        });
        return newAuthor;
    }   
}