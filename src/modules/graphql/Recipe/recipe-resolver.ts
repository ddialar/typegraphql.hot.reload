import logger from '@logger';

import {
    Resolver,
    Query,
    Arg
} from 'type-graphql';

import Recipe from './recipe-type';

import { createRecipeSamples } from './recipe-samples';

@Resolver(of => Recipe)
class RecipeResolver {
    private readonly items: Recipe[] = createRecipeSamples();

    @Query(returns => Recipe, { nullable: true })
    async recipe(@Arg('title') title: string): Promise<Recipe | undefined> {
        return await this.items.find(recipe => recipe.title === title);
    }

    @Query(returns => [Recipe], { description: 'Get all recipes.' })
    async recipes(): Promise<Recipe[]> {
        logger.info('>>> Returning recipes...');
        logger.trace('>>> Returning recipes...'); 
        
        return await this.items;
    }
}

export default RecipeResolver;