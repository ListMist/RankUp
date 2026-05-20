import { Injectable,NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './Entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  async create(userData: Partial<User>): Promise<User> {
    const newUser = this.userRepo.create(userData);
    return await this.userRepo.save(newUser);
  }
  async findByEmail(email: string): Promise<User | null> {
    return await this.userRepo.findOne({
      where: { email },
    });
  }
  async findAll(): Promise<User[]> {
    return await this.userRepo.find();
  }

  async update(id: number, updateData: Partial<User>): Promise<User> {
    await this.userRepo.update(id, updateData);
    const updated = await this.userRepo.findOneBy({ id });
    if (!updated) throw new NotFoundException('User not found');
    return updated;
  }

  async remove(id: number): Promise<void> {
    await this.userRepo.delete(id);
  }


}