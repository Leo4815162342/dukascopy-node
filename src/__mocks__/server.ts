import { setupServer } from 'msw/node';
import { generateMockHandlers } from './handlers';

export async function getMockServer() {
  const handlers = await generateMockHandlers();

  const server = setupServer(...handlers);
  return server;
}
