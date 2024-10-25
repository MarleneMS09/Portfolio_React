# Usa una imagen base con Node.js
FROM node:16-alpine

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos package.json y package-lock.json para instalar dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de la aplicación
COPY . .

# Expone el puerto en el que correrá la aplicación React
EXPOSE 3001

# Comando por defecto para iniciar la aplicación en modo desarrollo
CMD ["npm", "start"]
