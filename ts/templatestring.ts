function html(...pieces) {
    let result:any = '';
    let [piecesText, ...args] = pieces;
    const upper = str => str.toUpperCase();
    let index = 0;
    //console.log(pieces);
    //console.log(piecesText,args)
    result = args.map((arg, i) => {
        index = i;
        return piecesText[i].search('{upper') ? piecesText[i].replace('{upper', upper(arg)) : piecesText[i]+ arg
    }).map(res => index < piecesText.length - 1 ? [...res, piecesText.slice(index + 1)] : res)
    //console.log(result, index, piecesText.length-1)
    //result = index < piecesText.length - 1 ? [...result, piecesText.slice(index+1)] : result;
    return result.join('')
}

class IHTML {
    constructor(pieces:any[]) {
       
    }
    upper(str:string) {
        return str.toUpperCase();
    }
} 

let htm = new IHTML(['name', 'lover']);

const htmlTag = '<p>hosam</p>';
const love = '[Menna Allah]';
console.log(html`log this tag ${htmlTag} and my love {upper ${love} }`)
//console.log(htm`{upper ${love}}`)