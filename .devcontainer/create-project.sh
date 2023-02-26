#!/bin/bash

README_MD=$(cat .devcontainer/README.md)

if [ ! -e "package.json" ]; then
  npx -y create-react-app codespaces-react &&
  mv codespaces-react/.gitignore .gitignore &&
  mv codespaces-react/* . &&
  rm -rf codespaces-react &&
  echo "$README_MD
  " | cat - README.md > README_temp.md &&
  mv README_temp.md README.md
fi
