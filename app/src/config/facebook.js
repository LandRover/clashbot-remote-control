export default function FacebookConfig($facebookProvider) {
    $facebookProvider.setAppId('12345678000');
}

FacebookConfig.$inject = ['$facebookProvider'];