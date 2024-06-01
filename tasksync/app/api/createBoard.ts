// pages/api/createBoard.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';
import { liveClient } from '../(platform)/_info/liveinfo';
import uniqid from 'uniqid';
import { authOptions } from '../../lib/authOptions';

export default async function createBoard(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const session = await getServerSession(req, res, authOptions);
  if (!session) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const email = session.user?.email as string;
  const { workspaceName } = req.body;
  const roomId = uniqid.time();

  await liveClient.createRoom(roomId, {
    defaultAccesses: [],
    usersAccesses: {
      [email]: ['room:write'],
    },
    metadata: {
      workspaceName,
    },
  });

  res.status(200).json({ id: roomId, name: workspaceName, roomId });
}

