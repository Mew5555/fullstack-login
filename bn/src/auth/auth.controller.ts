import { Body, Controller, Post, Response } from '@nestjs/common';
import { UserRegister } from 'src/model/model.register';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  public async login(
    @Body() data: { username: string; password: string },
    @Response() res,
  ) {
    try {
      console.log(data);
      const response = await this.authService.validateUserCredentials(
        data.username,
        data.password,
      );
      console.log(response);
      res.status(200).send(response);
    } catch (error) {
      res.status(error.getStatus()).send(error);
    }
  }

  @Post('/register')
  public async registerUser(
    @Body() userregister: UserRegister,
    @Response() res,
  ) {
    try {
      console.log(res);
      const response = await this.authService.registerValidation(userregister);
      console.log(response);
      res.status(200).send(response);
    } catch (error) {
      res.status(error);
    }
  }
}
