const moment = require('moment');

const propertyRequired = (item, res) => {
  const itemName = Object.keys(item).join();
  if ( !item[itemName] ) {
    res.status(400).json({ message: `${itemName} is required.` });
    return true;
  }
  return false;
}

const salesDateCheck = (date, res) => {
  const [day, month, year ] = date.split('/');
  
  if( !day || !month || !year) return true;
  
  if( !moment(date).isValid()) return true;

  return false;

}

  const postSalesValidation = (req, res, next) => {

    if(Object.keys(req.body).length === 0) {
      res.status(400).json({ message: "productName and infos are required  " });
      return;
    }

    const { productName, infos }  = req.body;

    if(propertyRequired({ productName }, res)) return;

    if ( productName.length < 4 ) {
      res.status(400).json({ message: "producName need to have four caracter at least." 
    });
    return;
  };

  if(propertyRequired({ infos }, res)) return;

  const { saleDate, warrantyPeriod } = infos;

  if(propertyRequired({ saleDate }, res)) return;

  if(salesDateCheck( saleDate, res )) {
    res.status(400).json({ message: "Please saleDate should be valid and have a default pattern 'dd/mm/yyyy'" });
    return;
  };

  if(propertyRequired({ warrantyPeriod }, res)) return;

    next();
};

module.exports = postSalesValidation;