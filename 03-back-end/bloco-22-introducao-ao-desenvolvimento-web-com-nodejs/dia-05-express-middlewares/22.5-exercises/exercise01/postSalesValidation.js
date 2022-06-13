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
  
  const dayValidation = day < 31 && day > 0;
  const monthValidation = month < 12 && month > 0;
  const yearValidation = year > 1000;

  if(dayValidation && monthValidation && yearValidation) return false;

  return true;

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

  if( Number(warrantyPeriod) < 1 || Number(warrantyPeriod) > 3) {
    res.status(400).json({ message: 'warrantyPeriod need to be between 1 and 3' });
    return;
  };

  const newSale = { productName, infos };

  req.newSale = newSale;

  next();
};

module.exports = postSalesValidation;