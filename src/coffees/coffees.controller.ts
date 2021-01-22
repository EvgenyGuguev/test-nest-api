import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { of } from 'rxjs';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll(@Query() paginationQuery) {
    const { limit, offset } = paginationQuery;

    return `Return all coffees. Limit: ${limit}. Offset: ${offset}`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Return id of coffee: ${id}`;
  }

  @Post()
  create(@Body() body) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `Update one coffee: ${id}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `Delete one coffee: ${id}`;
  }
}
