import dictionaryJson from '../assets/texts/fa.json';

interface jsonType {
  [key: string]: string;
}

let dictionary: jsonType = dictionaryJson;

interface keysMapType {
  [key: string]: string;
}

let translate: (text: string, keysMap?: keysMapType) => string = function (
  text: string,
  keysMap?: keysMapType
) {
  if (dictionaryJson && dictionary[text]) {
    if (keysMap) {
      let result = dictionary[text];
      Object.keys(keysMap).forEach((key) => {
        result = result.replace(
          `$${key}`,
          dictionary[keysMap[key]] || keysMap[key]
        );
      });
      return result;
    }
    return dictionary[text];
  }
  return text;
};

export default translate;
