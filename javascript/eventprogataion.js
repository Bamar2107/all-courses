//the event propagation mode determines in which order the elements recieve the event.


// top to bottom ==> Capture Phase
//with event capturing, the event is first captured & handle by the outer most element & then propagated to the inner elements
//Capturing is also known as trickling which remember the order of propagation


// bottom to top ==> Bubble phase
//with event bubbling, the event is first captured & handle by the inner most element & then propagated to the outer elements