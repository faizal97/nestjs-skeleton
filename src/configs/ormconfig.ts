import { TypeOrmModuleOptions } from "@nestjs/typeorm"


export const config: TypeOrmModuleOptions = {
  "type": "mysql",
  "host": "localhost",
  "port": 3306,
  "username": "root",
  "password": "",
  "database": "hero",
  "entities": [
    "dist/**/*.entity{.ts,.js}"
  ],
  "synchronize": false,
  "autoLoadEntities": true,
  "migrations": ['dist/Database/migration/*{.ts,.js}'],
}