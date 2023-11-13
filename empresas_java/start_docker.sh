export USER='root'
export PASSWORD='root'
export DATABASE_URL='mysql://localhost:3306/empresas_multiplas_apis?createDatabaseIfNotExist=true&useTimezone=true&serverTimezone=UTC'

docker startapijava_empresa 

read -p "Press any key to continue" x