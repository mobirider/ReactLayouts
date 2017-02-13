APP_NAME=${PWD##*/}
echo "========= Getting keys for $APP_NAME-ios ========"
code-push deployment ls $APP_NAME-ios -k
echo "========= Getting keys for $APP_NAME ============"
code-push deployment ls $APP_NAME -k
