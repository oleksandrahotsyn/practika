type Callback = (status: string) => void;

function sendDoneStatus(callback: Callback): void {
  callback("done");
}

function myCallback(msg: string) {
  console.log("Статус:", msg);
}

sendDoneStatus(myCallback);
