//-----------------------------------------------------------------------------
// Customer Service

var customerService = function () {
    var customers = [];
    customers[0] = {
        id: 0,
        name: 'Amar',
        email: 'amar@xyz.com',
        phone: '+91-11111-22222',
        city: 'Bengaluru'
    };
    customers[1] = {
        id: 1,
        name: 'Akbar',
        email: 'akbar@xyz.com',
        phone: '+91-33333-44444',
        city: 'Hyderabad'
    };
    customers[2] = {
        id: 2,
        name: 'Anthony',
        email: 'anthony@xyz.com',
        phone: '+91-55555-66666',
        city: 'Chennai'
    };

    var parseId = function (id) {
        id = isNaN(parseInt(id)) ? 0 : id;
        return id;
    }
    
    this.create = function (name, email, phone, city) {
        var customerId = customers.length;
        
        customers.push({
            id: customerId,
            name: name,
            email: email,
            phone: phone,
            city: city
        });
        
        return customers[customerId];
    }

    this.getAll = function () {
        return customers;
    }
    
    this.get = function (customerId) {
        customerId = parseId(customerId);
        
        return customers[customerId];
    }
    
    this.update = function (customerId, name, email, phone, city) {
        customerId = parseId(customerId);
        
        customers[customerId].name = name;
        customers[customerId].email = email;
        customers[customerId].phone = phone;
        customers[customerId].city = city;
        
        return customers[customerId];
    }
    
    this.delete = function (customerId) {
        customerId = parseId(customerId);
        
        var deletedCustomers = customers.splice(customerId, 1);
        
        return deletedCustomers;
    }
}

module.exports = new customerService();

//-----------------------------------------------------------------------------
// Some more customers, if required

/*
customers[3] = {
  "id": 3,
  "name": "Hari",
  "email": "hari@xyz.com",
  "phone": "+91-12345-12345",
  "city": "Bengaluru"
};

customers[4] = {
  "id": 4,
  "name": "Krishna",
  "email": "krishna@xyz.com",
  "phone": "+91-99999-88888",
  "city": "Cochin"
};
*/
