import {
  Body,
  Controller,
  Post,
  Get,
  Request,
  HttpCode,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { CreateUserDto } from './user.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @HttpCode(HttpStatus.OK)
  @Post('register')
  @ApiOperation({ summary: 'register user' })
  signIn(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(
      createUserDto.username,
      createUserDto.password,
      createUserDto.masterCountry,
    );
  }

  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @Get('user')
  @ApiOperation({ summary: 'get user profile' })
  getProfile(@Request() req: any) {
    return req.user;
  }
}
