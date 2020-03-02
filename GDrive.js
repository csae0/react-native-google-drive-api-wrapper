import Files from "./Files";
import Permissions from "./Permissions";
import Helpers from "./Helpers";

export default class GDrive {
   
   static init(params = {}) {
      GDrive.files = new Files(params.files);
      GDrive.permissions = new Permissions();
   }
   
   static setAccessToken(accessToken) {
      Helpers._accessToken = accessToken;
   }
   
   static isInitialized() {
      return !!Helpers._accessToken;
   }
}
