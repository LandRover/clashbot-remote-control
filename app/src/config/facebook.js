export default function FacebookConfig($facebookProvider) {
    $facebookProvider.setAppId(window.config.appID);
}

FacebookConfig.$inject = ['$facebookProvider'];