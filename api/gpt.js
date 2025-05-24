export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST allowed' });
  }

  const { message } = req.body;
  
  // Just echo the input message with a fixed response
  return res.status(200).json({
    reply: `You said: "${message}". This is a test reply from your Vercel backend.`
  });
}
