//Create task to myself
class Script{
	prepare_outgoing_request({request}){
		let data = request.data.text;
		let match = data.match(/(?<=\s)[\А-яA-z\s\,\\]+/g);
		if (match.length > 0) {
			return {
				url: 'https://deep-sea.ru/rest/startIssue',
				headers: request.headers,
				method: 'POST',
				data: {
					name: match[0],
					details: match[1],
					started_by: request.data.user_name,
					status: 'New',
					issue_type: 'OTHER',
					responsible: request.data.user_name,
					action: 'New'
				 }
			};
		}
	}
}


//Create task to another user
	class Script{
			prepare_outgoing_request({request}){
				let data = request.data.text;
				let match = data.match(/(?<=\s)[\А-яA-z\s\,\\]+/g);
				if (match.length > 0) {
					return {
						url: 'https://deep-sea.ru/rest/startIssue',
						headers: request.headers,
						method: 'POST',
						data: {
							name: match[0],
							details: match[1],
							started_by: request.data.user_name,
							status: 'New',
							issue_type: 'OTHER',
							responsible: request.data.channel_name,
							action: 'New'
						 }
					};
				}
			}
		}
