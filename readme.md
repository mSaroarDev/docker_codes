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

### 


### run a container with volume to get instant update on change

```bash 
docker run -p 3001:3001 --name docker_test_run --rm -v "C:\Users\Saroar _\Documents\test-docker:/app" -v "/app/node_modules" node_test
```