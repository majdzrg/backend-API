import {
    Body,
    Controller,
    Get,
    HttpCode,
    Post,
    Request,
    UseGuards,
    Req,
    ValidationPipe,
    HttpStatus,
    Put,
  } from '@nestjs/common';
  
  import { AuthService } from './auth.service';
  import { JwtAuthGuard } from './guards/jwt-auth.guard';
  import { LocalAuthGuard } from './guards/local-auth.guard';
  import { CreateUserDto } from './dto/create-user.dto';

  import {
    ApiCreatedResponse,
    ApiOkResponse,
    ApiOperation,
  } from '@nestjs/swagger';
import { LoginUserDto } from './dto/login-user.dto';
import { VerifyUuidDto } from './dto/verify-uui.dto';
import { Param } from '@nestjs/common/decorators/http/route-params.decorator';
import { AuthGuard } from '@nestjs/passport';
  
  @Controller('auth')
  export class AuthController {
    constructor(private authService: AuthService) {}
  
  // ╔═╗╦ ╦╔╦╗╦ ╦╔═╗╔╗╔╔╦╗╦╔═╗╔═╗╔╦╗╔═╗
  // ╠═╣║ ║ ║ ╠═╣║╣ ║║║ ║ ║║  ╠═╣ ║ ║╣
  // ╩ ╩╚═╝ ╩ ╩ ╩╚═╝╝╚╝ ╩ ╩╚═╝╩ ╩ ╩ ╚═╝
    

  //Register user
  @Post('register-user')
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.CREATED)
  @ApiCreatedResponse({})
  async register(@Req() req: Request, @Body() createUserDto: CreateUserDto) {
    return await this.authService.create(createUserDto);
  }
  
  //Login User
  @UseGuards(LocalAuthGuard)
  @UseGuards(AuthGuard('jwt'))
  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({})
  async login(@Req() req: Request, @Body() loginUserDto: LoginUserDto) {
    return await this.authService.login(loginUserDto);
  }
 
  //Verify Email'
  @Post('verify-email')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({})
  async verifyEmail(@Req() req: Request, @Body() verifyUuidDto: VerifyUuidDto) {
    return await this.authService.verifyEmail(req, verifyUuidDto);
  }
  
  //Get Buyer by Id
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({})
  async getUserById(@Param() params) {
    return await this.authService.getUserById(params.id);
  }

  //'A private route for check the authentication
  @Put('me/:id')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({})
  async updateWithAllParams(@Param() params, @Body() createBuyerDto: CreateUserDto) {
    return await this.authService.updateBuyerPut(params.id, createBuyerDto);
  }

  //Get All buyers
  @UseGuards(AuthGuard('jwt'))
  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({})
  async getAllBuyers(@Req() req) {
    return await this.authService.getAllBuyers();
  }

  }
