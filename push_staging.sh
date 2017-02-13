APP_NAME=${PWD##*/}
echo "======== Pushing $APP_NAME-ios to Staging... ========"
code-push release-react $APP_NAME-ios ios -d Staging
echo "======== Pushing $APP_NAME to Staging... ============"
code-push release-react $APP_NAME android -d Staging
