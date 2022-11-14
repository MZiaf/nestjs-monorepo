#!/usr/bin/env bash
set -e

# Setup environment variables
source ./compose.env

# Setup script functions
source ./utils.sh
source ./main.sh

# Starting script command
run_command "$@"
