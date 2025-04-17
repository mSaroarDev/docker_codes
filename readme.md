Check docker status

``` bash
docker -v
```


run a container with volume to get instant update on change

```bash 
docker run -p 3001:3001 --name docker_test_run --rm -v "C:\Users\Saroar _\Documents\test-docker:/app" -v "/app/node_modules" node_test
```