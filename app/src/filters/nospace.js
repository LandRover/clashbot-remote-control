/**
 * Description:
 *     removes white space from text. useful for html values that cannot have spaces
 * Usage:
 *   {{some_text | nospace}}
 */
export default function NoSpaceFilter() {
    return function(value) {
         return (!value) ? '' : value.replace(/ /g, '');
    };
}

NoSpaceFilter.$inject = [];