import { Module } from '@nestjs/common';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categories } from './entities/category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Categories])],
  controllers: [CategoriesController],
  providers: [CategoriesService],
})
export class CategoriesModule {}