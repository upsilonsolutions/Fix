var baseurl = "https://cityinfo.host/backup";
var appconfig = {
	"Home":{
        "request": {
            "method": "GET",
            "url": {
                "raw": "/city/sync_tname_new.php?tname=cityinfo_issue&cond= where is_approve=1 order by id desc",
                "query": [
                    {
                        "key": "tname",
                        "value": "cityinfo_issue"
                    },
                    {
                        "key": "cond",
                        "value": " where is_approve=1 order by id desc"
                    }
                ]
            }
        }

    },
	"Departments":{
		"request": {
			"method": "GET",
			"url": {
				"raw": "/city/sync_tname_new.php?tname=cityinfo_department",
				"query": [
					{
						"key": "tname",
						"value": "cityinfo_issue"
					},
					{
						"key": "cond",
						"value": "  where is_approve='1' and department='Transportation' order by id desc"
					}
		
				]
			}
		}
	},
    "TrackIssue": 
    {
			"request": {
				"method": "GET",
				"url": {
					"raw": "/city/sync_tname_new.php?tname=cityinfo_issue&cond= where is_approve='1' and department='",
					"query": [
						{
							"key": "tname",
							"value": "cityinfo_issue"
						},
						{
							"key": "cond",
							"value": "  where is_approve='1' and department='Transportation' order by id desc"
						}
			
                    ]
				}
			}
		},
		"Issue": {
			"request": {
				"method": "GET",
				"url": {
					"raw": "/city/sync_tname_new.php?tname=cityinfo_issue&cond= where id=",
					"query": [
						{
							"key": "tname",
							"value": "cityinfo_issue"
						},
						{
							"key": "cond",
							"value": " where id=124"
						}
					]
				}
			}
		},
		"FileUpload": {
			"request": {
				"method": "POST",
				"url": {
					"raw": "/city/insert_new_content_app.php",
				}
			}
		},
};