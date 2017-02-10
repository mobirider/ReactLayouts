APP_NAME=${PWD##*/}
echo "======== Pushing $APP_NAME to Staging... ========"
code-push release-react $APP_NAME ios -d Staging
code-push release-react $APP_NAME android -d Staging
