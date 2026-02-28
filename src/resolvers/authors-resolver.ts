import { Query, Resolver } from "type-graphql";

@Resolver()
export class AuthorsResolver {

    @Query(() => [Object])
    getAllAuthors() {
        return [
            {
                id: 1,
                name: "J.K. Rowling",
                books: [
                    {
                        id: 1,
                        title: "Harry Potter and the Sorcerer's Stone",
                    },
                    {
                        id: 2,
                        title: "Harry Potter and the Chamber of Secrets",
                    },
                ],
            },
            {
                id: 2,
                name: "George R.R. Martin",
                books: [
                    {
                        id: 3,
                        title: "A Game of Thrones",
                    },
                    {
                        id: 4,
                        title: "A Clash of Kings",
                    },
                ],
            },
        ];
    }               
}