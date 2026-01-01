import server from 
'netease-cloud-music-api-alger/
server';
import os from 'os';
import fs from 'fs';
import path from 'path';
import url from 'url';

const __dirname = path.dirname(url.
fileURLToPath(import.meta.url));

// 兼容原项目的匿名 token 逻辑（可选）
const tokenFile = path.resolve(os.
tmpdir(), 'anonymous_token');
if (!fs.existsSync(tokenFile)) {
  fs.writeFileSync(tokenFile, '', 
  'utf-8');
}

// 端口从环境变量读取，默认 30488
const PORT = Number(process.env.
PORT || process.env.
NETEASE_API_PORT || 30488);

async function startMusicApi() {
  try {
    console.log('MUSIC API 
    STARTING...');

    await server.serveNcmApi({
      port: PORT
    });

    console.log(`MUSIC API STARTED 
    on port ${PORT}`);
  } catch (error) {
    console.error('MUSIC API 启动失败
    :', error);
    process.exit(1);
  }
}

startMusicApi();
