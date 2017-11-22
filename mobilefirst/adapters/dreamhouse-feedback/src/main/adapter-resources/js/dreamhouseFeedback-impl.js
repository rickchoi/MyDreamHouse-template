/*
 *  Licensed Materials - Property of IBM
 *  5725-I43 (C) Copyright IBM Corp. 2011, 2016. All Rights Reserved.
 *  US Government Users Restricted Rights - Use, duplication or
 *  disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

function postFeedback(feedback) {
	MFP.Logger.warn('--> dreamhouse-feedback adapter received: ' + feedback); 
	var response = {
		res: feedback
	};
	return response;
}
