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

		//test
				class Script{
						prepare_outgoing_request({request}){
							let data = request.data.text;
							let match = data.match(/(?<=\s)[\А-яA-z\s\,\\]+/g);
							let json = JSON.stringify(request);
							if (match.length > 0) {
								return {
									url: 'https://deep-sea.ru/rest/startIssue',
									headers: request.headers,
									method: 'POST',
									data: {
										name: match[0],
										details: json,
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


{"params":{},"method":"POST","url":null,"data":{"token":"od0wt2zxt3c","bot":false,"trigger_word":"task","channel_id":"XQKTTBDJ4fvTNpXr9bckXgkNHP3c8hK8tX","message_id":"FDysLweN6azoJCMvy","timestamp":"2022-03-02T07:06:16.623Z","user_id":"bckXgkNHP3c8hK8tX","user_name":"spiridovich","text":"task test","siteUrl":"https://rocket.nautic-rus.ru"},"npmRequestOptions":{"rejectUnauthorized":false,"strictSSL":false},"headers":{"User-Agent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2227.0 Safari/537.36"}}
