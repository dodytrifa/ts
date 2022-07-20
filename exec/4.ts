export type Event = 
| { 
    type: "LOGIN"; 
    payload: {
        username: string;
    } 
  }
| {
    type: "LOGOUT";
}

//first form
//const sendEvent = (event: Event["type"], payload?:any) => {};

//how do we know what type of event we are sending? different case by case

//sendevent takes generic, (event type)
const sendEvent = <Type extends Event["type"]>(
  //we extract out the event, we check for type match
  //if there is payload we infer the payload
  ...args: Extract<Event, {type:Type}> extends{payload:infer Payload}
  ? [type: Type, payload:Payload]
  : [type:Type]
)=>{};

//correct way
sendEvent("LOGOUT");
sendEvent("LOGIN", {username: "John"});





//error prone way beacuse of different payload type
sendEvent("LOGOUT",{});
sendEvent("LOGIN", {username: "John"});
sendEvent("LOGIN");