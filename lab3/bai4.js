function chuanHoa(str) {
    let result = str.toLowerCase().trim();
    
    result = result.replace(/\b\w/g, (char) => char.toUpperCase());

    result = result.replace(/\s+/g, ' ');

    result = result.replace(/\s+(!|\?|\.|\,)/g, '$1');

    result = result.replace(/(!|\?|\.|\,)(\w)/g, '$1 $2');
    
    result = result.replace(/(^|[.!?]\s+)([a-z])/g, (m) => m.toUpperCase());

    return result;
}


const input = "  xin chao cac ban. hom nay troi dep qua !toi di hoc ve ?  ";
const output = chuanHoa(input);

console.log("Input: ", `"${input}"`);
console.log("Output:", `"${output}"`);