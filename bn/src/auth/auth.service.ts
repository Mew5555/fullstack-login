import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/Entity/user.entity';
import { UserRegister } from 'src/model/model.register';
import { DataSource } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    private jwtTokenService: JwtService,
    private readonly dataSource: DataSource,
  ) {}

  //login
  public async validateUserCredentials(
    username: string,
    password: string,
  ): Promise<any> {
    const user = await User.findOne({
      where: {
        username: username,
        password: password,
      },
    });

    if (user != undefined) {
      const resToken = this.loginWithCredentials(user.username, user.id);
      user.access_date = new Date();
      user.save();
      return {
        status: true,
        access_token: resToken,
      };
    } else {
      return {
        status: false,
      };
    }
  }
  public async loginWithCredentials(username: string, id: number) {
    const payload = { username: username, id: id };
    return this.jwtTokenService.sign(payload);
  }

  //register
  async registerValidation(userregister: UserRegister) {
    const user = await User.findOne({
      where: { username: userregister.username },
    });
    if (user != null) {
      console.log(userregister);
      return {
        status: false,
      };
    } else {
      await this.dataSource
        .createQueryBuilder()
        .insert()
        .into(User)
        .values(userregister)
        .execute();
      return {
        status: true, //not exit
      };
    }
  }
}
