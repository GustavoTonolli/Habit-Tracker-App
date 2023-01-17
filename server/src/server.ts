import Fastify from 'fastify';
import { PrismaClient } from '@prisma/client';


const app = Fastify();
const prisma = new PrismaClient()


app.get ('/allHabits', async () => {
    const habits = await prisma.habit.findMany() // retorna todos os habitos
    return habits
})



app.listen({
    port: 3000,
}).then(() => {
    console.log ('Server is running on port 3000');
});