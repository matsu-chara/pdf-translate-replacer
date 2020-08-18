#!/bin/bash

set -eu

function js_build() {
  webpack --mode=production
}

function bump_version() {
  local manifest new

  ## rewrite and get new version
  new="$(npm version minor | tr -d 'v')"

  manifest="$(cat public/manifest.json)"
  echo "$manifest" | jq --arg ver "$new" '.version |= $ver' > public/manifest.json

  git tag -d "v$new"
  git add public/manifest.json
  git commit --amend --no-edit
  git tag "v$new"
}


function make_zip() {
  local zip_name="pdf_translate_replacer.zip"
  rm -rf "$zip_name"
  zip -r "$zip_name" dist/*
  echo "$zip_name created."
  echo "please submit zip file to https://chrome.google.com/webstore/devconsole"
}

function push_all() {
  git push origin master
  git push origin --tags
}

bump_version
js_build
make_zip
push_all
