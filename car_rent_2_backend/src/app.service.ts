import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Rent a Car!';
  }

  getCars() {
    return [
      {
        id: '1',
        name: 'Toyota Camry',
        pricePerDay: 50,
        available: true,
        imageUrl:
          'https://global.toyota/pages/models/images/camry/camry_010_s.jpg',
      },
      {
        id: '2',
        name: 'Honda Accord',
        pricePerDay: 45,
        available: false,
        imageUrl:
          'https://di-uploads-pod21.dealerinspire.com/performancehondafairfield/uploads/2022/07/Honda-Accord-feature-overview-fairfield-oh.jpg',
      },
      {
        id: '3',
        name: 'Ford Mustang',
        pricePerDay: 80,
        available: true,
        imageUrl:
          'https://vidi.ua/uploads/media/dc_site/0004/87/47a363b729db3c6910f8aaecc795fefb88bd38fe.jpeg',
      },
      {
        id: '4',
        name: 'Skoda Octavia',
        pricePerDay: 50,
        available: true,
        imageUrl:
          'https://skodapartsdirect.co.uk/wp-content/uploads/Octavia-Estate-2021-Present.jpg',
      },
      {
        id: '5',
        name: 'Mercedes-Benz E-Class',
        pricePerDay: 80,
        available: false,
        imageUrl:
          'https://ymimg1.b8cdn.com/resized/car_model/2492/logo/mobile_listing_main_11326_st1280_046.jpg',
      },
      {
        id: '6',
        name: 'Ford Mustang',
        pricePerDay: 80,
        available: true,
        imageUrl:
          'https://vidi.ua/uploads/media/dc_site/0004/87/47a363b729db3c6910f8aaecc795fefb88bd38fe.jpeg',
      },
    ];
  }

  getRent() {
    return {
      id: '1',
      carId: '2',
      userId: '123',
      startDate: '2024-07-01',
      endDate: '2024-07-05',
    };
  }
}
