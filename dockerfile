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

# builc
RUN npm run build

# port 設定
EXPOSE 3001

# 実行
CMD ["npm", "run", "serve"]