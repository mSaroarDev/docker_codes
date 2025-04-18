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

## Stop container
``` bash
docker stop <container-id>
```

## Remove docker container
``` bash
docker rm CONTAINER_NAME_OR_ID
```

## Remove and delete one line code
``` bash
docker rm -f my-container
```


## Force remove (useful if the image is in use by a stopped container):
``` bash
docker rm -f my-container
```

## Remove image
``` bash
docker rmi IMAGE_NAME_OR_ID
```

## Remove all unused images (dangling + untagged):
``` bash
docker image prune
```

## Remove all images
``` bash
docker image prune -a
```


### run a container with volume to get instant update on change

```bash 
docker run -p 3001:3001 --name docker_test_run --rm -v "C:\Users\Saroar _\Documents\test-docker:/app" -v "/app/node_modules" node_test
```


### simplify pathname volume to get instant update on change
```bash 
docker run -p 3001:3001 --name docker_test_run --rm -v "//$(pwd)"://app -v "//app/node_modules" node_test
```

> -p: port
>
> --name: custom name that I want to set the run
>
> --rm: remove the run when container or image stop
>
> -v: volume bind (host-machine : work-dir)
