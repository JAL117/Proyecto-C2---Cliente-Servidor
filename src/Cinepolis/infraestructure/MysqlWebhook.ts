import { IWebhook } from '../domain/services/IWebhook';
import axios, { AxiosResponse } from 'axios';
import EventoWebhookModel from './model/EventosWebhook'; 
import { Sequelize } from 'sequelize-typescript';
export class MysqlWebhookRepository implements IWebhook {
  async receive(url: string, events: string[]): Promise<string | null> { 
    try {
      await EventoWebhookModel.create({ url, events });
      return 'Elemento creado';
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async search(event: string): Promise<string[] | null> {
    try {
      const webhooks = await EventoWebhookModel.findAll({
        where: Sequelize.where(
          Sequelize.fn('JSON_CONTAINS', Sequelize.col('events'), JSON.stringify([event])),
          true
        )
      });
      return webhooks.map((webhook: any) => webhook.url);
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async send(url: string, data: any): Promise<boolean | null> {
    try {
      const response: AxiosResponse = await axios.post(url, data);
      console.log('Respuesta de la API:', response.data);
      return true;
    } catch (error) {
      console.error('Error al realizar la solicitud:', error);
      return null;
    }
  }
}
