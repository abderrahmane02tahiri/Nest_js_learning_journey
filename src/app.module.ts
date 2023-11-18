import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { SearchModule } from './search/search.module';
import { AnnoncesModule } from './annonces/annonces.module';
import { QueriesModule } from './queries/queries.module';
import { Tp2Module } from './tp2/tp2.module';

@Module({
  imports: [UsersModule, SearchModule, AnnoncesModule, QueriesModule, Tp2Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
