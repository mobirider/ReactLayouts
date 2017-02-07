APP_NAME=${PWD##*/}
echo "========= Getting keys for $APP_NAME ========"
code-push deployment ls $APP_NAME -k
