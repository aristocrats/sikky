#!/usr/bin/env bash

set -ex -o pipefail

# Update the npm client. Older clients cannot, e.g., handle scoped modules.
npm update -g npm