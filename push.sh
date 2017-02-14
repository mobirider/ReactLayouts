        cd /Users/olivier/dev/mobirider/reactnative/ReactLayouts/ColorChanger.app/.. 
        APP_NAME=${PWD##*/} 
        echo "======== Pushing $APP_NAME-ios to Staging... ========" 
        code-push release-react $APP_NAME-ios ios -d Staging 
        echo "======== Pushing $APP_NAME-android to Staging... ====" 
        code-push release-react $APP_NAME-android android -d Staging 
        exit