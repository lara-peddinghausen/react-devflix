import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class HealthService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async check() {
    await this.prisma.$queryRaw`SELECT 1`;  // Executa uma consulta simples no PostgreSQL. Se a consulta funcionar, significa que a aplicação conseguiu se comunicar com o banco.

    return {
      status: 'ok',
      application: 'DevFlix API',
      database: 'connected',
      timestamp: new Date().toISOString(),
    };
  }
}