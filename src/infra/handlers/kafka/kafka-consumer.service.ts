import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['valid-dassie-11134-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'dmFsaWQtZGFzc2llLTExMTM0JHApzowEPaFfVsS6AIoGZ3QIiGAKljeISvtXTvw',
          password:
            'L3q4WW3E-Lc1Zh1aHtTxHjPFXcc7lj_DBGivKznDHgY2bny-sdFLcFX0k3v0AEYMSVFgaQ==',
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
