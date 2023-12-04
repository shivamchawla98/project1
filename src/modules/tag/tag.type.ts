import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class TagType {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;
}