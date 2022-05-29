SELECT description, count(*) AS TOTAL
	FROM clients INNER JOIN agents ON clients.A_ID = agents.A_ID
	INNER JOIN departments on agents.A_DeptID = Departments.DeptID
	WHERE departments.DeptID=7003;