#!/bin/bash

function startTmuxCopy {
	touch /tmp/__pastebuffer
	#copy
	while true 
		do 
		nc -l 5682 > /tmp/__openbuf; 
		cat /tmp/__openbuf | pbcopy;
	done &
	# paste
	while true 
	do 
		nc -l 5683 < /dev/null
		nc -l 5683 < pbpaste;
	done &
}
startTmuxCopy

