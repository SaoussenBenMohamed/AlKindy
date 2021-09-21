import { AppService } from './app.service';
import { ContactFormDto } from './shared/dtos/contact-form.dto';
import { PressService } from './modules/press/press.service';
import { EventService } from './modules/events/event.service';
import { PartnershipService } from './modules/partnerships/partnership.service';
import { UnitService } from './modules/unit/unit.service';

import { Get, Controller, Query, Post, Body } from '@nestjs/common';
import { ClubService } from './modules/clubs/club.service';
import { UserService } from './modules/users/user.service';
import e = require('express');
import { ApiBody } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(
    private readonly clubService: ClubService,
    
    private readonly unitService: UnitService,
    private readonly partnershipService: PartnershipService,
    private readonly eventService: EventService,
    private readonly pressService: PressService,
    private readonly userService: UserService,
    private readonly appService: AppService
  ) {}
  @Get('search')
  async search(@Query() keyword): Promise<any> {
    let clubs = await this.clubService.search(keyword.keyword);
    clubs = this.appendUrl(clubs, '/vie-etudiante/vie-campus/clubs');
   
   
    let units = await this.unitService.search(keyword.keyword);
    units = this.appendUrl(units, '/formation/esprit-ingenieur/specialites-et-options');
    let partnerships = await this.partnershipService.search(keyword.keyword);
    partnerships = this.appendUrl(partnerships, '/international/partenariats');
    let events = await this.eventService.search(keyword.keyword);
    events = this.appendUrl(events, '/rdi/les-equipes-rdi', true);
    let presses = await this.pressService.search(keyword.keyword);
    presses = this.appendUrl(presses, '/esprit/salle-de-presse');
    const result = Array.prototype.concat(
      await this.userService.populateUsers(clubs),
    
      await this.userService.populateUsers(units),
      await this.userService.populateUsers(partnerships),
      await this.userService.populateUsers(events),
      await this.userService.populateUsers(presses)
    );
    return result;
  }

  appendUrl(objects, myUrl, isEvent = false): any {
    let results = [];
    objects.forEach(entity => {
      let url = myUrl;
      if (isEvent) {
        url = entity.url;
      }
      Object.assign(entity, { url });
      results.push(entity);
    });
    return results;
  }

  @Post('contact')
  @ApiBody({ type: [ContactFormDto] })
  async contactForm(@Body() body: ContactFormDto): Promise<any> {
    return await this.appService.sendFormToAdmin(body);
  }
}
