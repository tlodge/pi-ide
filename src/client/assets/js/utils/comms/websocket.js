import io from 'socket.io-client';
import {actionCreators as consoleActions} from 'features/serverconsole'

export function init(appId, dispatch) {
  
  const socket = io('/databox', {path: '/socket.io'});
 

  socket.on("connect", function(){
      socket.emit("join", appId.toLowerCase());
  });

  socket.on("debug", function(data){
    dispatch(consoleActions.newMessage(data.msg));
  });
};
   