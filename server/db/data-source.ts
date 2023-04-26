import { DataSource, DataSourceOptions } from 'typeorm';
require('dotenv').config();

export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [__dirname + '/../**/*.entity.js'],
  migrations: ['src/migration/**/*{.js,.ts}'],
  subscribers: ['src/subscriber/**/*{.js,.ts}'],
  synchronize: false,
};

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
