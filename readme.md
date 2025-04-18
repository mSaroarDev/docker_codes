### Check docker status

``` bash
docker -v
```

### Show active containers
``` bash
docker ps
```

### Show all containers (active and inactive)
``` bash
docker ps -a
```

### List of all images
``` bash
docker images
```

### Create an image with tagname
``` bash
docker build -t <name-here>:<tagname> .
```

## If dont want to set the version manually then
``` bash
docker build -t <name> .
```
it will automatically get the version as latest


## Run container with image
``` bash
docker run <image-name>
```

## Run container with exposed port
``` bash
docker run -p <host-machine-port>:<desired-port> <image-name>
```
eg: docker run -p 3001:5000
then hit the http://localhost:5000 in browser


### run a container with volume to get instant update on change

```bash 
docker run -p 3001:3001 --name docker_test_run --rm -v "C:\Users\Saroar _\Documents\test-docker:/app" -v "/app/node_modules" node_test
```