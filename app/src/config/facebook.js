export default function FacebookConfig($facebookProvider) {
    $facebookProvider.setAppId(window.app.fbAppID);
}

FacebookConfig.$inject = ['$facebookProvider'];