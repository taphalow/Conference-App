import { LightningElement, api } from 'lwc';
import { getSession } from 'data/sessionService';
export default class SessionDetails extends LightningElement {
  session;
  @api
  set sessionId(id) {
    this._sessionId = id;
    this.session = getSession(id);
  }
  get sessionId() {
    return this._sessionId;
  }
}