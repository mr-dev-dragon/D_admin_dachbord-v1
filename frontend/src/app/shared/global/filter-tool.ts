function g(path: string, data: any): any {
    let [current, ...child] = path.split('.');
    if (child?.length) {
      return g(child.join('.'), data[current]);
    }
    if (current) {
      return data[current];
    }
    return data;
  }

function  removeAccent(s: any) {
    var r = s.toLowerCase();
    r = r.replace(new RegExp('-', 'g'), ' ');
    r = r.replace(new RegExp('_', 'g'), ' ');
    r = r.replace(new RegExp('[àáâãäå]', 'g'), 'a');
    r = r.replace(new RegExp('æ', 'g'), 'ae');
    r = r.replace(new RegExp('ç', 'g'), 'c');
    r = r.replace(new RegExp('[èéêë]', 'g'), 'e');
    r = r.replace(new RegExp('[ìíîï]', 'g'), 'i');
    r = r.replace(new RegExp('ñ', 'g'), 'n');
    r = r.replace(new RegExp('[òóôõö]', 'g'), 'o');
    r = r.replace(new RegExp('œ', 'g'), 'oe');
    r = r.replace(new RegExp('[ùúûü]', 'g'), 'u');
    r = r.replace(new RegExp('[ýÿ]', 'g'), 'y');
    r = r.replace(new RegExp('ç', 'g'), 'c');
    return r;
  }



function addArrays<T = any>(arr1: T[], arr2: T[], merge = true): T[] {
  return Array.from(
    new Set(
      merge ? arr1.concat(arr2) : arr1.filter((e) => arr2.find((i) => i == e))
    )
  );
}



// function i<x = number>(a: x, o: string, b: x)  =>
//   o == '==' || o == '=' || o == 'equals'
//     ? a == b
//     : o.includes('!=') || o == '=!' || o == '!' || o == 'not equals'
//       ?  a != b
//       : o == '<=' || o == '=<' || o == 'less then or equl equals'
//         ? a <= b
//         : o == '=>' || o == '>=' || o == 'greater then or equl equals'
//           ? a >= b
//           : o == '>' || o == '>' || o == 'greater then'
//             ? a > b
//             : o == '<' || o == '<' || o == 'less then'
//               ? a < b
//                : false;




export { removeAccent, g, addArrays };
