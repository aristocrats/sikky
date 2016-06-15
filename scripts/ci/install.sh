#!/usr/bin/env bash

set -ex -o pipefail

echo 'travis_fold:start:INSTALL'

echo 'travis_fold:start:install.npm-cli-tools'
# Install version of npm that we are locked against
npm install -g npm@3
npm -g install typings karma-cli tslint
# Disable the spinner, it looks bad on Travis
npm config set spin false
echo 'travis_fold:end:install.npm-cli-tools'

echo 'travis_fold:start:install.node_modules'
npm install
echo 'travis_fold:end:install.node_modules'

echo 'travis_fold:start:install.typings'
typings install
echo 'travis_fold:end:install.typings'

echo 'travis_fold:end:INSTALL'