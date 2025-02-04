#!/bin/bash

if [ $# -eq 0 ]; then
    echo "No arguments supplied"
else
    echo "$@" | awk '{for(i=1; i<=NF && i<=3; i++) print $i}'
fi


