# Usa una imagen base con Node.js
FROM node:16-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de la aplicación
COPY . .

# Expone el puerto 3001
EXPOSE 3001

# Comando por defecto para iniciar la aplicación
CMD ["npm", "start"]
