import {
    Field,
    ObjectType,
    Int
} from 'type-graphql';

@ObjectType()
class Recipe {
    @Field()
    title: string = "";

    @Field({ nullable: true, description: 'The recipe description with preparation info.' })
    description?: string;

    @Field(type => [Int])
    ratings: number[] = [];
    
    @Field()
    creationData: Date = new Date();
}

export default Recipe;