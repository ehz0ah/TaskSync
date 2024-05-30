// pages/api/getUserRooms.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';
import { liveClient } from '../(platform)/_info/liveinfo';
import { authOptions } from '@/lib/authOptions';

export default async function getUserRooms(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, authOptions);
  if (!session) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const email = session.user?.email as string;
  const rooms = await liveClient.getRooms({ userId: email });

  res.status(200).json(rooms);
}
