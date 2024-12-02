# Node.js イメージ
FROM node:18

# directory作成
WORKDIR /app

# package.json、　package-lock.json copy
COPY package*.json ./

# reference install
RUN npm install

# code copy
COPY . .

# port 設定
EXPOSE 3001

# 開発モードで実行
CMD ["npm", "start", "--", "--host", "0.0.0.0", "--port", "3001"]