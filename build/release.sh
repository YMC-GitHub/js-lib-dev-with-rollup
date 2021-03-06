#!/bin/sh

set -e
echo "Enter release version: "
read VERSION

read -p "Releasing $VERSION - are you sure? (y/n)" -n 1 -r
echo # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]; then
  echo "Releasing $VERSION ..."

  # run tests
  #npm run test:unit 2>/dev/null

  # build
  VERSION=$VERSION
  #npm run build

  # commit
  git add -A
  git commit --no-verify -m "[build] $VERSION"
  npm version $VERSION --message "[release] $VERSION"
  git tag v$VERSION
  # publish
  git push origin refs/tags/v$VERSION
  git push
  npm publish
fi

## file-usage
#./build/release.sh
#note:i prefer to run in pm
