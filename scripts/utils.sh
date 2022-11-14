function up_service() {
  for service in $@; do
    echo "== Starting ${service}== "
    sudo docker compose up --build -d "${service}"
  done
}
