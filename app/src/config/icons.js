export default function IconsConfig($mdThemingProvider, $mdIconProvider) {
          $mdIconProvider
              .defaultIconSet('./src/assets/svg/avatars.svg', 128)
              .icon('menu', './src/assets/svg/menu.svg', 24)
              .icon('share', './src/assets/svg/share.svg', 24)
              .icon('google_plus', './src/assets/svg/google_plus.svg', 512)
              .icon('hangouts', './src/assets/svg/hangouts.svg', 512)
              .icon('twitter', './src/assets/svg/twitter.svg', 512)
              .icon('phone', './src/assets/svg/phone.svg', 512);
              
          $mdThemingProvider.theme('default')
              .primaryPalette('brown')
              .accentPalette('red');
}

IconsConfig.$inject = ['$mdThemingProvider', '$mdIconProvider'];