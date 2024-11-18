// src/app.ts
// 1. 导入必要的依赖
import express from 'express';          // Web 框架
import cors from 'cors';                // 处理跨域请求
import { PrismaClient } from '@prisma/client';  // 数据库客户端

// 2. 创建 Express 应用实例
const app = express();

// 3. 创建 Prisma 客户端实例（用于数据库操作）
const prisma = new PrismaClient();

// 4. 设置服务器端口，优先使用环境变量中的端口，否则使用 3001
const PORT = process.env.PORT || 3001;

// 5. 中间件设置
// 解析 JSON 请求体
app.use(express.json());

// 配置跨域请求
app.use(cors({
  origin: 'http://localhost:3000',  // 允许前端应用访问（React应用运行在3000端口）
  credentials: true                 // 允许跨域请求包含凭证（cookies等）
}));

// 6. 测试路由
app.get('/api/test', async (req, res) => {
  try {
    // 测试数据库连接
    await prisma.$connect();
    // 如果连接成功，返回成功消息
    res.json({ message: 'Database connection successful!' });
  } catch (error) {
    // 如果连接失败，返回错误信息
    res.status(500).json({ error: 'Database connection failed' });
  } finally {
    // 无论成功失败，最后都断开数据库连接
    await prisma.$disconnect();
  }
});

// 7. 启动服务器
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});