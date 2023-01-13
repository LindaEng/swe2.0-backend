# Instructions to Create a Dockerfile within the client folder

To create a Dockerfile within the client folder, follow these instructions:

1. Open a terminal window and navigate to the client folder.

2. Create a new file in the client folder called `Dockerfile` (no file extension).

3. Open the `Dockerfile` in a text editor of your choice.

4. Add the following lines to the `Dockerfile`:

            FROM node:16-alpine

            WORKDIR /app

            COPY . /app

            RUN apk add g++ make py3-pip

            RUN npm install && npm run build

            EXPOSE 1234

            CMD ["node", "server.js"]


5. Save the changes to the `Dockerfile`.

6. Now you have a Dockerfile within the client folder, which you can use to build an image for your application.

7. To build the image, navigate to the client folder and use the command `docker build . -t <image-name> ` 

8. To run the container use the command `docker run -p 1234:1234 <image-name>`

This Dockerfile sets up an image based on the `node:16-alpine` image, sets the working directory to `/app`, copies all files in the current directory to the image, runs `npm install` and `npm run build` command, sets the container to listen on port 1234, and runs the command `node server.js` when the container starts up.


# Instructions to Create a Dockerfile within the server folder

To create a Dockerfile within the server folder, follow these instructions:

1. Open a terminal window and navigate to the server folder.

2. Create a new file in the server folder called `Dockerfile` (no file extension).

3. Open the `Dockerfile` in a text editor of your choice.

4. Add the following lines to the `Dockerfile`:

        FROM node:18-alpine

        COPY . /app

        WORKDIR /app

        RUN npm install

        EXPOSE 3000

        CMD [ "npm", "start" ]


5. Save the changes to the `Dockerfile`.

6. Now you have a Dockerfile within the server folder, which you can use to build an image for your application.

7. To build the image, navigate to the server folder and use the command `docker build -t <image-name> .` 

8. To run the container use the command `docker run -p 3000:3000 <image-name>`

This Dockerfile sets up an image based on the `node:18-alpine` image, copies all files in the current directory to the image, sets the working directory to `/app`, runs `npm install`, sets the container to listen on port 3000 and runs the command `npm start` when the container starts up.


//website with hats
//3:20

//useful Docker commands

//list all your containers
    docker ps
//list all your images
    docker images

//stop a container 
    docker stop containerid

//delete image
    docker rmi imageId

1. stop the container(s)
2. delete the container
3. delete the image
