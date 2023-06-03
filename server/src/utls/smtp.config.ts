import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { MailerAsyncOptions } from '@nestjs-modules/mailer/dist/interfaces/mailer-async-options.interface';
import { join } from 'path';

require('dotenv').config();


export const smtpConfig: MailerAsyncOptions = {
  useFactory: async () => ({
    transport: {
      host: process.env.EMAIL_HOST,
      secure: false,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    },
    defaults: {
      from: process.env.EMAIL_FROM_ADDRESS,
    },
    template: {
      dir: join(process.cwd(), 'src/utls/email-templates'),
      adapter: new HandlebarsAdapter(),
      options: {
        strict: false,
      },
    },
  }),
};
