import { LightningElement } from 'lwc';

export default class App extends LightningElement {
    sessionId;
    handleNavigate(event) {
        this.sessionId = event.detail.sessionId;
      }
}
