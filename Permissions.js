import Helpers from "./Helpers";

const permissions = "/permissions";

export default class Permissions {
   create(fileId, params) {
      const body = JSON.stringify(params);
      
      return fetch(`${Helpers._urlFiles}/${fileId}${permissions}`, {
         method: "POST",
         headers: Helpers._createHeaders(
            Helpers._contentTypeJson,
            body.length
         ),
         body
      });
   }
}
