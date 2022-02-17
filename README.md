# ShopsRUs discounts, invoices microservice
[STEPS TO RUN THE PROJECT]

set your credentials in **ormconfig.json**

set your credentials in **.env**

**npm install**

**npm start**, to run the project

go to http://localhost:3000/inidatas to **load the initial data**

**npm run test** to run tests 


====================================================


**[Endpoints]**

(get)/clientes

(get)/clientes?firstName=[nombre]&lastName=[apellido]

(post)/clientes

	{
	
	  firstName (Req)
	  
	  lastName (Req)
	  
	  email
	  
	  isAfiliated [boolean]
	  
	  isEmployee [boolean]
	  
	  registered (if not provided, current time is setted)
	  
	}
	
(get)/clientes/id


=============================


(get)/facturas/id

(post)/facturas

	{
	
	  clientId (Req),
	  
	  items[   (Req)
	  
		{name (req), amount(req), price(req), category}
		
		]
		
	  discountFlag: String (optional)
	  
	}

=================================


(get)/descuentos

(post)/descuentos

	{
	
	  name, (req)
	  
	  description, (req)
	  
	  percentage (req)
	  
	}
