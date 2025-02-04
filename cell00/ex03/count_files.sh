#!/bin/bash
echo $(find ~/discovery_piscine ! -name '.*' -type f -o -type d | wc -l)

