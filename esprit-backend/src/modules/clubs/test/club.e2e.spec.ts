import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { ClubEntity } from './../entities/club.entity';
import { ClubService } from './../club.service';
import { ClubController } from './../club.controller';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { ObjectID } from 'mongodb';
import { clubTypes, sportTypes } from '../entities/club.enum';

describe('ClubController (e2e)', () => {
  let app: INestApplication;
  const mockClub = new ClubEntity();
  mockClub._id = new ObjectID('5e2f63d67c06a754d05da4b6');
  mockClub.title = 'mockingTitle';
  mockClub.description = 'mockingTitleDescription';
  mockClub.type = clubTypes.team;

  const notFoundException = {
    statusCode: 400,
    error: 'Bad Request',
    message: 'Invalid ID!'
  };
  const idRequiredException = {
    statusCode: 404,
    error: 'Not Found',
    message: 'Cannot GET /club/'
  };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      // imports: [AppModule],
      controllers: [ClubController],
      providers: [
        {
          provide: ClubService,
          useFactory: () => ({
            findAll: jest.fn(() => ['new ClubEntity()']),
            findById: jest.fn(id => {
              if (!id) {
                throw new HttpException({ Id: 'id param is required' }, 400);
              }
              if (id.toHexString() === '5e2f63d67c06a754d05da4b6') {
                return mockClub;
              } else {
                throw new HttpException({ Club: 'Not found' }, 400);
              }
            }),
            create: jest.fn(clubData => {
              if (!clubData) {
                throw new HttpException({ Club: 'Not found' }, 400);
              }
              return mockClub;
            }),
            update: jest.fn((_id, clubData) => {
              if (!_id) {
                throw new HttpException({ Id: 'id param is required' }, 400);
              }
              if (_id.toHexString() === '5e2f63d67c06a754d05da4b6') {
                clubData._id = mockClub._id;
                return clubData;
              } else {
                throw new HttpException({ Club: 'Not found' }, 400);
              }
            }),
            delete: jest.fn(_id => {
              if (!_id) {
                throw new HttpException({ Id: 'id param is required' }, 400);
              }
              if (_id.toHexString() === '5e2f63d67c06a754d05da4b6') {
                return {};
              } else {
                throw new HttpException({ Club: 'Not found' }, 400);
              }
            })
          })
        }
      ]
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('/clubs (GET) GET ALL', () => {
    it('/clubs', () => {
      return request(app.getHttpServer())
        .get('/clubs')
        .expect(200)
        .expect(['new ClubEntity()']);
    });
  });

  describe('/club/:id (GET)', () => {
    it('/club/:id (GET) 200', () => {
      const expected = {
        _id: '5e2f63d67c06a754d05da4b6',
        title: 'mockingTitle',
        type: clubTypes.team,
        description: 'mockingTitleDescription'
      };
      return (
        request(app.getHttpServer())
          .get('/club/5e2f63d67c06a754d05da4b6')
          // .expect(({ body }) => global.console.log(body))
          .expect(200)
          .expect(expected)
      );
    });

    it('/club/:id (GET) NO ID 400', () => {
      return (
        request(app.getHttpServer())
          .get('/club/')
          // .expect(({ body }) => global.console.log(body))
          .expect(404)
          .expect(idRequiredException)
      );
    });

    it('/club/:id (GET) Invalid 400', () => {
      return (
        request(app.getHttpServer())
          .get('/club/5e2f63d67c06a7')
          // .expect(({ body }) => global.console.log(body))
          .expect(400)
          .expect(notFoundException)
      );
    });
  });

  describe('/club (POST)', () => {
    it('/club (POST) 201', () => {
      const toSend = {
        title: 'mockingTitle',
        type: clubTypes.team,
        sport: sportTypes.other,
        description: 'mockingTitleDescription'
      };
      const expected = {
        _id: '5e2f63d67c06a754d05da4b6',
        title: 'mockingTitle',
        type: clubTypes.team,
        description: 'mockingTitleDescription'
      };
      return (
        request(app.getHttpServer())
          .post('/club')
          .send(toSend)
          // .expect(({ body }) => global.console.log(body))
          .expect(201)
          .expect(expected)
      );
    });

    it('/club (POST) 400 Invalid DTO or empty body', () => {
      const toSend = {
        title: 'mockingTitle',
        type: clubTypes.team
        // titleDescription: 'mockingTitleDescription',
        // btnName: 'mockingBtnName',
      };
      const expected = {
        _id: '5e2f63d67c06a754d05da4b6',
        title: 'mockingTitle',
        type: clubTypes.team,
        description: 'mockingTitleDescription'
      };
      return (
        request(app.getHttpServer())
          .post('/club')
          .send()
          // .expect(({ body }) => global.console.log(body))
          .expect(400)
          .expect({
            message: 'Input data validation failed',
            errors: {
              titleisNotEmpty: 'title should not be empty',
              typeisEnum: 'type must be a valid enum value',
              typeisNotEmpty: 'type should not be empty',
              sportisEnum: 'sport must be a valid enum value'
            }
          })
      );
    });
  });

  describe('/club (PUT)', () => {
    it('/club (PUT) 200 OK', () => {
      const toSend = {
        _id: '5e2f63d67c06a754d05da4b6',
        title: 'mockingTitle',
        type: clubTypes.team,
        description: 'mockingTitleDescription'
      };
      const expected = {
        _id: '5e2f63d67c06a754d05da4b6',
        title: 'mockingTitle',
        type: clubTypes.team,
        description: 'mockingTitleDescription'
      };
      return (
        request(app.getHttpServer())
          .put('/club')
          .send(toSend)
          // .expect(({ body }) => global.console.log(body))
          .expect(200)
          .expect(expected)
      );
    });

    it('/club (PUT) 400 Invalid DTO or empty body', () => {
      const toSend = {
        // title: 'mockingTitle',
        // type: clubTypes.team,
        description: 'mockingTitleDescription'
      };
      return (
        request(app.getHttpServer())
          .put('/club')
          .send(toSend)
          // .expect(({ body }) => global.console.log(body))
          .expect(400)
          .expect({ Club: 'Not found' }) &&
        request(app.getHttpServer())
          .put('/club')
          .send()
          // .expect(({ body }) => global.console.log(body))
          .expect(400)
          .expect({ Club: 'Not found' })
      );
    });
  });

  describe('/club (DELETE)', () => {
    it('/club (DELETE) 200', () => {
      return (
        request(app.getHttpServer())
          .delete('/club/5e2f63d67c06a754d05da4b6')
          // .expect(({ body }) => global.console.log(body))
          .expect(200)
          .expect({})
      );
    });

    it('/club (DELETE) 400 Not Found or Id Is empty', () => {
      return (
        request(app.getHttpServer())
          .delete('/club/5e2f63d67c06a754d05da4b6')
          // .expect(({ body }) => global.console.log(body))
          .expect(400)
          .expect({ Club: 'Not found' }) &&
        request(app.getHttpServer())
          .delete('/club')
          // .expect(({ body }) => global.console.log(body))
          .expect(404)
          .expect({
            statusCode: 404,
            error: 'Not Found',
            message: 'Cannot DELETE /club'
          })
      );
    });
  });
});
