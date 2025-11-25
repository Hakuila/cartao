import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  async login(dto: { email: string; password: string }) {
    // placeholder logic: validate user from DB and sign JWT
    const user = { id: 'user-uuid', email: dto.email, role: 'cliente' };
    const token = jwt.sign({ sub: user.id, role: user.role }, process.env.JWT_SECRET || 'changeme', { expiresIn: '7d' });
    return { token, user };
  }
}
