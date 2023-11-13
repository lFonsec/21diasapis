docker stop apijava_empresa
docker rm apijava_empresa

export USER='root'
export PASSWORD='root'
export DATABASE_URL='mysql://localhost:3306/empresas_multiplas_apis?createDatabaseIfNotExist=true&useTimezone=true&serverTimezone=UTC'

docker exec -it apijava_empresa /bin/sh

mvn clean
mvn package

docker build -t lfonsec/apijava_empresa -f Dockerfile .

docker run -d -e USER -e PASSWORD -e DATABASE_URL -p 5001:80 --name apijava_empresa lfonsec/apijava_empresa

docker logs apijava_empresa -f --tail 100

read -p "Press any key to continue" x