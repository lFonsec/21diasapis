docker stop apinode_eventos
docker rm apinode_eventos

export USER="root"
export PASSWORD="root"
export DATABASE="eventos_multiplas_api"
export HOST="127.0.0.1"

docker build -t lfonsec/apinode_eventos -f Dockerfile .

docker run -d -e USER -e PASSWORD -e DATABASE_URL -e HOST -p 3000:3000 --name apinode_eventos lfonsec/apinode_eventos

docker logs apinode_eventos -f --tail 100

read -p "Press any key to continue" x