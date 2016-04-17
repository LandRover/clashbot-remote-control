export default function SanitizeFilter($sce) {
    return function(html) {
         return $sce.trustAsHtml(html);
    };
}

SanitizeFilter.$inject = ['$sce'];