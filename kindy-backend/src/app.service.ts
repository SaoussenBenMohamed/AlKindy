import { ContactFormDto } from './shared/dtos/contact-form.dto';
import { MailerService } from '@nest-modules/mailer';
import { Injectable, Inject } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { IGetUserAuthInfoRequest } from './shared/user-request.interface';
import { throwError } from './shared/throw-error.utils';

@Injectable()
export class AppService {
  constructor(
    private readonly mailerService: MailerService,
    @Inject(REQUEST) private readonly request: IGetUserAuthInfoRequest
  ) {}

  async sendFormToAdmin(contactForm: ContactFormDto) {
    const reset_password = process.env.RESET_PASSWORD_EXPIRATION || '24h';
    const browser_name = this.request.headers['user-agent'] ?? 'Unkown Device';
    const ip = this.request.ip ?? 'Unknow Ip';
    const hostname = this.request.hostname;

    try {
      return await this.mailerService.sendMail({
        to: 'mohamedmontassar.laribi@esprit.tn',
        from: '"Esprit Contact " <website@esprit.tn>',
        subject: '[Formulaire de Contact] ' + contactForm.name + ' ' + Date.now().toString(),
        template: 'contact', // The `.pug` or `.hbs` extension is appended automatically.
        context: {
          // Data to be sent to template engine.
          name: contactForm.name,
          email: contactForm.email,
          number: contactForm.number,
          subject: contactForm.subject,
          message: contactForm.message,
          ip,
          browser_name,
          reset_password,
          support_email: 'contact@esprit.tn'
        }
      });
    } catch (error) {
      throwError({ Email: error.message }, 'An error occured while sending contact mail');
    }
  }
}
