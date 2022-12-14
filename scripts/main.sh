function run_command() {
  case $1 in
  "s" | "start")

    run_command stop

    if [ "$(docker images -q lerna-root-image:latest 2>/dev/null)" == "" ] || [ "$2" = "fresh" ]; then
      docker build ../ -t lerna-root-image
    fi

    echo "== Starting Database =="
    up_service ${INFRA_SERVICES}
    sleep 30

    echo "== Starting API services =="
    up_service ${API_SERVICES}

    echo "== Containers =="
    docker ps

    ;;

  "stop" | "down")

    if [[ $# -gt 1 ]]; then

      echo "== Stopping services ... =="

      SERVICES=${@:2}

      docker compose stop ${SERVICES}

      docker compose rm -f ${SERVICES}

      echo "== Stopping services Done =="

    else

      echo "== Stopping infrastructure ... =="

      docker compose down

      echo "== Stopping infrastructure Done =="

    fi
    ;;
  esac
}
