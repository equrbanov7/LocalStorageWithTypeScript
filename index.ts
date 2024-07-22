let username: string = "equrbanov";
let password: any = 13456798;

function setLocalStorage(key: string, value: any): void {
  localStorage.setItem(key, JSON.stringify(value));
}

function getFromLocalStorage(key: string): void {
  let keyValue = localStorage.getItem(key);

  //console.log(typeof keyValue, typeof JSON.parse(keyValue));

  // !Version 1

  //   if (keyValue !== null) {
  //     try {
  //       const parsedValue = JSON.parse(keyValue);

  //       if (typeof parsedValue === "object" && parsedValue !== null) {
  //         console.log("It is object:", parsedValue);
  //       } else if (typeof parsedValue === "string") {
  //         console.log("It is string:", parsedValue);
  //       } else if (typeof parsedValue === "number") {
  //         console.log("It is number type:", parsedValue);
  //       }
  //     } catch (e) {
  //       console.error("Failed to parse JSON:", e);
  //     }
  //   }

  if (keyValue !== null) {
    if (keyValue.startsWith("{") && keyValue.endsWith("}")) {
      console.log("It is an object:", keyValue);
    } else if (!isNaN(Number(keyValue))) {
      console.log("It is a number:", keyValue);
    } else if (Boolean(keyValue)) {
      if (keyValue == "undefined") {
        console.log("It is a undefined:", keyValue);
      } else {
        console.log("It is a boolean:", keyValue);
      }
    } else {
      console.log("It is a string:", keyValue);
    }
  } else {
    console.log("it is null:", key);
  }
}

function removeFromLocalStorage(key: string): void {
  localStorage.removeItem(key);
}

function clearAllFromLocalStorage(): void {
  localStorage.clear();
}

setLocalStorage(username, password);
setLocalStorage("elvin", 45789);
setLocalStorage("denis", 79823);
setLocalStorage("code", "789798");
setLocalStorage("objectKey", { age: 23, isBird: true });
setLocalStorage("booleanKey", true);
setLocalStorage("undefinedKey", undefined);

setTimeout(() => {
  removeFromLocalStorage("elvin");
}, 5000);

setTimeout(() => {
  clearAllFromLocalStorage();
}, 9000000);

getFromLocalStorage("booleanKey");
