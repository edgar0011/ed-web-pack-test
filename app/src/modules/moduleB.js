
import lodash from 'lodash';

document.write("module B");
export function mainMethod(){

    console.log(lodash);
    alert("Hello, from Module B, lodash: " + lodash.noop);
    console.log(lodash.times(3, String));
    console.log(_.times(3, String));

};
