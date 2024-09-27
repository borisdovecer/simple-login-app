import dotenv from 'dotenv';
import express, { type Express, type Response, type Request } from 'express';
import connectDB from './config/db';
import helmet from 'helmet';
import authRoutes from './api/routes/authRoutes';
import cors from 'cors';
import corsConfig from './config/corsConfig';
import rateLimit from 'express-rate-limit';
dotenv.config();

const app: Express = express();
const PORT: number = parseInt(process.env.PORT ?? '8080', 10);
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});

app.use(helmet());
app.use(cors(corsConfig));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(limiter);
app.use(express.static('public'));

connectDB().catch((error) => {
  console.error('Failed to connect to the database:', error);
});

app.get('/', (_req: Request, res: Response) => {
  res.send('Hello World!');
});
app.use('/auth', authRoutes);

app.use((err: any, _req: Request, res: Response, _next: any) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}! nice!`);
});
