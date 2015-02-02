/**
* Create an object literal with the following key value pairs:
* type: {string} 'Goldfish'
* brand: {string} 'Pepperidge Farm'
* flavor: {string} 'Cheddar'
* count: {number} 2000
* It should be returned directly by the following function
* @return {object} - the object literal
*/

function returnObjectLiteral() 
{
  var newobject = { type: 'Goldfish',
					brand: 'Pepperidge Farm',
					flavor: 'Cheddar',
					count: 2000};
 return newobject;
  
};

/**
* Create a constructor function for a `MessageLog` object.
* @constructor
* @param {string} user - The user associated to the message log
* The string indicating the user should be stored in the user property of the
* object instances.
*
* In addition, the following methods should be
* callable on a MessageLog object:
* logMessage( {string} messageText, {number} direction) - This should log a
* message
* as either being sent or received. A direction of 0 indicates it is a message
* the user sent. A direction of 1 indicates it is a message the user received.
* Behavior for other numbers is undefined.
* getSentMessage({number} n) - returns as a string, the content of the nth most
* recently sent message. To conserve memory, the object should only keep the
* last 5 message. n=0 retrieves the most recent n=4 retrieves the least recent
* of the 5.
* totalSent() - returns an integer indicating the total number of messages sent
* totalReceived() - returns an integer indicating the total number of messages
* received
*/

function MessageLog(user)
{
	this.logUser = user;
	this.log = new Array();
	this.totRec = 0;
	this.totSent = 0;


	this.logMessage = function(messageText, direction){

		var message = {text: messageText, dir: direction};

		if (this.totRec > 4)
		{
			if (this.log[0].dir > 0)
			{
				this.totRec -= 1;
			}
			else
			{
				this.totSent -= 1;
			}

			this.log.shift();
		}

		if (direction > 0)
		{
			this.totRec += 1;
		}
		else
		{
			this.totSend += 1;
		}

		this.log.push(message);
		
	};

	this.getSentMessage = function(n){

		return this.log[n].text;

	};

	this.totalSent = function(){
		return this.totSent;
	};

	this.totalReceived = function(){
		return this.totRec;
	};

};

/**
* Add a method to the MessageLog prototype:
* lastReceivedMessage() - returns the message text of the last message the user
* received.
*/
MessageLog.prototype.lastReceivedMessage = function(){

		return this.log[this.log.length];
}

/**
* Create an instance of a `MessageLog` for the user "BlackHatGuy". Have the
* instance receive 3 messages: "foo", "bar" and "baz", received in that order.
* Assign it to the variable myLog.
*/

var myLog = new MessageLog(BlackHatGuy);
myLog.logMessage("foo", 1);
myLog.logMessage("bar", 1);
myLog.logMessage("baz", 1);
