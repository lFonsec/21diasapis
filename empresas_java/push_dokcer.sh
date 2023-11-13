export USER='root'
export PASSWORD='root'
export DATABASE_URL='mysql://localhost:3306/empresas_multiplas_apis?createDatabaseIfNotExist=true&useTimezone=true&serverTimezone=UTC'

mvn clean
mvn package

docker build -t lfonsec/apijava_empresa -f Dockerfile .

docker tag lfonsec/apijava_empresa hub.docker.com/r/lfonsec/apijava_empresa./
docker push lfonsec/apijava_empresa

read -p "Press any key to continue" x