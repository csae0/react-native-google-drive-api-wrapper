
export default class Helpers {
    static _urlFiles = "https://www.googleapis.com/drive/v3/files"
    static _contentTypeJson = "application/json; charset=UTF-8"
    static _accessToken = ""

    static _createHeaders = (contentType, contentLength, ... additionalPairs) => {
        let pairs = [
           [ "Authorization", `Bearer ${_accessToken}` ]
        ];
        
        [
           [ "Content-Type", contentType] ,
           [ "Content-Length", contentLength ]
        ].forEach(data => data[1] ? pairs.push(data) : undefined);
        
        if (additionalPairs) {
           pairs = pairs.concat(additionalPairs);
        }
        
        const headers = new Headers();
        
        for (let pair of pairs) {
           headers.append(pair[0], pair[1]);
        }
        
        return headers;
     }
    }