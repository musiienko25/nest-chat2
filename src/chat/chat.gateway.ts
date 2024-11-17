import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*', // Дозволяємо підключення з будь-якого джерела
  },
})

@WebSocketGateway()
export class ChatGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect{
  @WebSocketServer()
  server: Server;

  // Викликається при ініціалізації
  afterInit(server: Server) {
    console.log('WebSocket Gateway Initialized');
  }

  // Викликається при підключенні клієнта
  handleConnection(client: Socket) {
    console.log(`Client connected: ${client.id}`);
  }

  // Викликається при відключенні клієнта
  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
  }
}
