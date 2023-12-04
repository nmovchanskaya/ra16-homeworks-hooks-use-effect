import { UserType } from "../components/UserType";

export const createRequest = async (options: {
    url: string, 
    sendMethod: string, 
    id?: number,
    callback: (data: UserType[]) => void
  }) => {

    let strRequest = `${options.url}`;
    if (options.id) {
      strRequest += `${options.id}.json`;
    }
  
    if (options.sendMethod === 'GET') {
      fetch(strRequest)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          options.callback(data);
        })
        .catch((error) => {
          console.error(`Error: ${error}`);
        });
    } 
  };
  