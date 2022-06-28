// https://github.com/NaturalIntelligence/fast-xml-parser/blob/HEAD/docs/v4/2.XMLparseOptions.md

const { XMLParser } = require('fast-xml-parser');
const fs = require('fs');

var argv = require('yargs/yargs')(process.argv.slice(2))
    .usage('Usage: node $0 -f [filepath] ')
    .example('node $0 -f /home/foo.xml', 'converts the /home/foo.xml to json and output is written in file ./parser-output.json')
    .nargs('f', 1)
    .alias('f', 'file')
    .describe('f', 'parses an xml file and converts to json')
    .demandOption(['f'])
    .strict()
    .argv;

if (!argv.f || argv.f === "")
    console

// const alwaysArray = [
//     "root.a.c",
//     "root.b"
// ];

const options = {
    ignoreAttributes: false,
    attributeNamePrefix: "@_",
    attributesGroupName: "attributes@_",
    allowBooleanAttributes: true,
    alwaysCreateTextNode: false,
    cdataPropName: "__cdata",
    ignoreDeclaration: false,
    ignorePiTags: false,
    textNodeName: "$text"
    // isArray: (name, jpath, isLeafNode, isAttribute) => {  //force tags which are array
    //     if( alwaysArray.indexOf(jpath) !== -1) return true;
    // }
    // stopNodes: ["root.a"] //stop parser from parsing tags nested tags
    //unpairedTags: ["unpaired"] //specifying which tags should be treated as unpaired i.e. <br >


};

const parser = new XMLParser(options);

fs.readFile(argv.f, function (err, data) {
    (err) 
    if (err) {
        return console.log(err);
    }
    console.log("xml data ->", data);
    let jsonObj = parser.parse(data);
    console.log("to json ->", JSON.stringify(jsonObj, null, '\t'));
    fs.writeFile('./parser-output.json', JSON.stringify(jsonObj, null, '\t'), function (err, d) {
        if (err) {
            return console.log(err);
        }
    });
});



