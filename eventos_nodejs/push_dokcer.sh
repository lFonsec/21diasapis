docker stop apinode_eventos
docker rm apinode_eventos

docker build -t lfonsec/apinode_eventos -f Dockerfile .
docker tag lfonsec/apinode_eventos hub.docker.com/r/lfonsec/apinode_eventos./
docker push lfonsec/apinode_eventos

read -p "Press any key to continue" x